import { Request, Response } from "express";
import { PrismaClient} from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

// WalmartID Generation
function generateWalmartId(): string {
  const timestamp = Date.now().toString();
  const randomString = uuidv4().substr(0, 8);
  return `WALMART-${timestamp}-${randomString}`;
}

// Create User
export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { password, username, email, phone, address, dno, roleId } = req.body;

    // Validate roleId
    const roleExists = await prisma.role.findUnique({
      where: { id: roleId }
    });
    if (!roleExists) {
      res.status(400).json({ message: "Invalid roleId" });
    }

  const walmart_id = generateWalmartId();

  try {

    const newUser = await prisma.user.create({
      data: {
        walmart_id,
        password,
        username,
        email,
        phone,
        address,
        dno,
        roleId,
      },
    });
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server Error!" });
  }
};

// Get All Users
export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await prisma.user.findMany({
      include: { role: true },
    });
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Users not found!" });
  }
};

// Get User By ID
export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { walmart_id: id },
      include: { role: true },
    });

    if (user) {
      res.json({ user, role: user.role.name });
    } else {
      res.status(404).json({ message: "User not found!" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get User By ID and Return Role
export const getUserRole = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { walmart_id: id },
      include: { role: true },
    });

    if (user) {
      res.json({role: user.role.name });
    } else {
      res.status(404).json({ message: "User not found!" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete User
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const deleteUser = await prisma.user.delete({
      where: { walmart_id: id },
    });
    res.json({ message: "User Deleted", deleteUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};
