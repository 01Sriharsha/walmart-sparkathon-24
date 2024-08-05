import {Router} from "express";

import { createUser, getAllUsers, getUserById, deleteUser, getUserRole } from "../controllers/userController";

const userRouter = Router();


userRouter.post('/addUser', createUser);
userRouter.get('/getAll', getAllUsers);
userRouter.get('/getUser/:id', getUserById);
userRouter.get('/getRole/:id',getUserRole);
userRouter.delete('/removeUser/:id', deleteUser);


export default userRouter;