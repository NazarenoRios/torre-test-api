import { Document } from "mongoose";

export interface FavoriteAttributes extends Document {
  user: any;
  ggId: string;
  name: string;
  picture: string;
  professionalHeadline: string;
  username: string;
  verified: boolean;
}
