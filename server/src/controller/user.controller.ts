import { Request, Response } from "express";
import * as userService from "../service/user.service";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({
      message: "User created successfully",
      data: user,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", success: false });
  }
};
