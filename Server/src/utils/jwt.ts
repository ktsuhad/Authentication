// src/utils/jwtUtil.ts
import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET_KEY as string;
const tokenExpiration = "7d";

export const generateAccessToken = (userId: string): string => {
  return jwt.sign({ userId }, secretKey, { expiresIn: tokenExpiration });
};
