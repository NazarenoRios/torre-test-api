import mongoose, { Schema } from "mongoose";
import { FavoriteAttributes } from "../interfaces/favorite.interface";

const favoriteSchema = new Schema<FavoriteAttributes>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  ggId: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  picture: {
    type: String,
    required: false,
  },
  professionalHeadline: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: false,
  },
  verified: {
    type: Boolean,
    required: false,
  },
});

const Favorite = mongoose.model<FavoriteAttributes>("Favorite", favoriteSchema);

export default Favorite;
