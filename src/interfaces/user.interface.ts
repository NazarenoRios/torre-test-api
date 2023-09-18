import { Request } from "express";
import { Document } from "mongoose";

export interface UserAttributes extends Document {
  name: string | null;
  lastname: string | null;
  email: string;
  password: string;
  salt?: string;
  searchHistory?: Array<{}> | null;
  hashedPassword?: any;
  validatePassword?: any;
  getQuery?: any;
}

export interface UserCreationAttributes {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

export interface userRequest extends Request {
  user?: {
    id: any;
    name: string;
    lastname: string;
    email: string;
  };
}
