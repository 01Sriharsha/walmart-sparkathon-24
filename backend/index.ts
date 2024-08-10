import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import adminRouter from './src/routes/adminRouter';
import { connectDB } from './src/libs/db';
import userRouter from './src/routes/userRouter';

dotenv.config();

const app: Application = express();
const port: number = 8000;

app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors({
    origin: 'http://localhost:5173', // Allow this origin to access the server
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // If your backend requires credentials
}));

// for admin
app.use('/admin', adminRouter);

// for user
app.use('/user', userRouter);



app.listen(port, async () => {
    try {
        await connectDB(); // Ensure database connection is established
        console.log(`Server is running on port ${port}`);
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
});
