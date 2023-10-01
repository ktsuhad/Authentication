import {Router} from "express";
import { loginController, signupController } from "../controller/userController";

const app = Router()

app.post("/signup",signupController)    //signup
app.post("/login",loginController)     //Login


export const router = app