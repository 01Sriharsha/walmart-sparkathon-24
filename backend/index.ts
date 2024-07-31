import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import adminRouter from './src/routes/adminRouter'; // Import without '.ts'
import { connectDB } from './src/libs/db'; // Ensure this path is correct

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

app.use('/admin', adminRouter);

app.listen(port, async () => {
    try {
        await connectDB(); // Ensure database connection is established
        console.log(`Server is running on port ${port}`);
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
});
