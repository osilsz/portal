import mongoose from "mongoose";
import { Users } from "../types/user";

const userSchema = new mongoose.Schema<Users>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model<Users>("User", userSchema);

export default User;
