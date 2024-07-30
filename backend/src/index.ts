import express from 'express';
import cors from 'cors';
import { PrismaClient, Admin } from '@prisma/client';
import { hash, compare } from 'bcrypt';
import { sign, verify, JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true,
  }));
app.use(express.json());
app.options('*', cors());

// Helper function to generate JWT
const generateJwt = (user: { walmartID: string }): string => {
  return sign({ walmartID: user.walmartID }, JWT_SECRET, { expiresIn: '7d' });
};

// Middleware to authenticate user
const authenticate = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Token not found' });
  }

  try {
    const decoded = verify(token, JWT_SECRET) as JwtPayload;
    const user = await prisma.admin.findUnique({
      where: {
        walmartID: decoded.walmartID,
      },
    });

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized: User not found' });
    }

    (req as any).user = user;
    next();
  } catch (err) {
    console.error('Token verification error:', err);
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};

// Register new user
app.post('/users', async (req, res) => {
  try {
    const { walmartID, password } = req.body;

    const existingUser = await prisma.admin.findUnique({
      where: { walmartID },
    });
    if (existingUser) {
      return res.status(400).json({ error: 'WalmartID already exists' });
    }

    const hashedPassword = await hash(password, 10);

    const user = await prisma.admin.create({
      data: { walmartID, password: hashedPassword },
    });

    res.json({
      ...user,
      token: generateJwt(user),
    });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login user
app.post('/users/login', async (req, res) => {
  try {
    const { walmartID, password } = req.body;

    const user = await prisma.admin.findUnique({
      where: { walmartID },
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isPasswordCorrect = await compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.json({
      ...user,
      token: generateJwt(user),
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Example protected route
app.get('/user', authenticate, (req: express.Request, res: express.Response) => {
  try {
    const user = (req as any).user;

    if (!user) {
      return res.sendStatus(401);
    }

    res.json({
      ...user,
      token: generateJwt(user),
    });
  } catch (err) {
    console.error('Protected route error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

async function main() {
  app.listen(3000, () => {
    console.info('Server running at http://localhost:3000');
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
