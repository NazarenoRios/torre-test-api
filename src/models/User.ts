import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { UserAttributes } from "../interfaces/user.interface";

const userSchema = new Schema<UserAttributes>({
  name: {
    type: String,
    required: false,
  },
  lastname: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
  },
  searchHistory: {
    type: [
      {
        query: String,
        timestamp: Date,
      },
    ],
    default: [],
  },
});

// methods

userSchema.methods.hashedPassword = function (password: string, salt: string) {
  return bcrypt.hash(password, salt);
};

userSchema.methods.validatePassword = function (password: string) {
  return bcrypt.compare(password, this.password);
};

// hooks

userSchema.pre<UserAttributes>("save", async function (next) {
  if (!this.salt) {
    const salt = await bcrypt.genSalt();
    this.salt = salt;
  }

  if (this.isModified("password")) {
    const hash = await this.hashedPassword(this.password, this.salt);
    this.password = hash;
  }

  next();
});

const User = mongoose.model<UserAttributes>("User", userSchema);

export default User;
