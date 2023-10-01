import { Request, Response } from "express";
import { userModel } from "../model/userModel";

export const signupController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    //find existingUser
    const existingUser =await userModel.findOne({ email });

    if(existingUser) {
      return res.status(400).json({ succes: false, message: "user already exist" });
    }

    const user = new userModel({ name, email, password });
    await user.save();
  } catch (error) {}
};

export const loginController = async (req: Request, res: Response) => {}