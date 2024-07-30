import { Admin, PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { verify, JwtPayload } from "jsonwebtoken";

export interface ExpressRequest extends Request {
    user?: Admin;
}

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const authenticate = async (req: ExpressRequest, res: Response, next: NextFunction): Promise<void> => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      res.status(401).json({ error: 'Unauthorized: Token not found' });
    }

    try {
        const decoded = verify(token, JWT_SECRET) as JwtPayload;
        const user = await prisma.admin.findUnique({
            where: {
                walmartID: decoded.walmartID,
            },
        });

        if (!user) {
        res.status(401).json({ error: 'Unauthorized: User not found' });
        }

        req.user = user;
        next();
    } catch (err) {
        console.error(err);
    res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
};
