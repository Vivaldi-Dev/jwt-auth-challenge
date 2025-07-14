import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
import { hashSync, compareSync } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../utils/secrets";

const prisma = new PrismaClient();

export const signup = async (req: Request, res: Response): Promise<void> => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    res.status(400).json({ error: "Email, password, and name are required." });
    return;
  }

  console.log(req.body);

  try {
    const user = await prisma.user.findFirst({ where: { email } });

    if (user) {
      res.status(400).json({ error: "User already exists!" });
      return;
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashSync(password, 10), 
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  const user = await prisma.user.findFirst({ where: { email } });

  if (!user || !compareSync(password, user.password)) {
    res.status(400).json({ error: "Email or password is incorrect" });
    return;
  }
  

  const token = jwt.sign(
    { userId: user.id },
    JWT_SECRET,
    { expiresIn: "1h" } 
  );

  const { password: _, ...userWithoutPassword } = user;

  res.json({
    token,
    user: userWithoutPassword
  });
};

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      }
    });

    res.json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar usuários." });
  }
};