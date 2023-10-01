import { Request, Response } from "express";
import { userModel } from "../model/userModel";
import { comparePassword, hashPassword } from "../utils/bcrypt";
import { generateAccessToken } from "../utils/jwt";

//signup
export const signupController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const existingUser =await userModel.findOne({ email });  //find existingUser

    if(existingUser) {
      return res.status(400).json({ success: false, message: "user already exist" });
    }

    const hashedPassword =await hashPassword(password)  //converting password into hashedPassword

    const user = new userModel({ name, email, password:hashedPassword });
    await user.save();  //saved in DB

    // Generate an access token for the newly registered user
    const accessToken = generateAccessToken(user._id.toString());

    return res.status(201).json({ success: true, message: "user created successfully",user ,accessToken});

  } catch (error) {
    return res.status(500).json({ success: false, message: "error while creating user",error });
  }
};

//login 
export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({email})   // Find the user by email

    if(!user){
      return res.status(404).json({ success: false, message: "User not found" });    
    }

    const passwordMatch = await comparePassword(password,user.password)  //comparing password

    if (!passwordMatch) {
      return res.status(401).json({ success: false, message: "Incorrect password" });
    }

    // Generate an access token for the logged-in user
    const accessToken = generateAccessToken(user._id.toString());

    return res.status(200).json({ success: true, message: "Login successful", user ,accessToken});  //login successfull

  } catch (error:any) {
    return res.status(500).json({ success: false, message: "Error while logging user", error: error.message });
  }
}