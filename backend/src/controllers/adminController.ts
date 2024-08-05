import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import prisma from '../libs/db';

dotenv.config();


export const signIn = async (req: Request, res: Response): Promise<void> => {
  try {
    const { walmartID, password } = req.body;

    if (!walmartID) {
      throw new Error('ID is missing');
    }else if(!password){
      throw new Error('Password Field cannot be Empty!')
    }

    const admin = await prisma.admin.findUnique({ where: { walmartID } });

    if (!admin) {
      throw new Error('Admin is not found');
    }

    if (password !== admin.password) {
      throw new Error('Please fill the correct password');
    }

    const tokenData = { isAdmin: admin.isAdmin };
    const token = jwt.sign(tokenData, process.env.JWT_SECRET as string, { expiresIn: '1d' });

    res.cookie('token', token, {
      maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
      sameSite: 'none',
      secure: true,
      httpOnly: true,
    });

    res.json({
      status: 200,
      message: 'Admin login successfully',
      token,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(500).json({
        status: 500,
        message: error.message,
      });
    } else {
      console.log('An unexpected error occurred');
      res.status(500).json({
        status: 500,
        message: 'An unexpected error occurred',
      });
    }
  }
};
