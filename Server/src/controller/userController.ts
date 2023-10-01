import { Request, Response } from "express";
import { userModel } from "../model/userModel";

export const signupController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const existingUser =await userModel.findOne({ email });       //find existingUser

    if(existingUser) {
      return res.status(400).json({ succes: false, message: "user already exist" });
    }

    const user = new userModel({ name, email, password });
    await user.save();
    return res.status(201).json({ succes: true, message: "user created successfully" });

  } catch (error) {
    return res.status(500).json({ succes: false, message: "error while creating user",error });
  }
};

export const loginController = async (req: Request, res: Response) => {}