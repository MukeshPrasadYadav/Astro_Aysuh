import mongoose, { Schema, Document } from "mongoose";

export enum Role {
  USER = 0,
  ADMIN = 1,
}

export interface IUser extends Document {
  name: string;
  number: string;
  password: string;
  role: Role;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    number: {
      type: String,
      required: true,
      maxLength: 10,
      minLength: 10,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: Number,
      enum: [Role.USER, Role.ADMIN],
      default: Role.USER,
    },
  },
  {
    timestamps: true,
  }
);

const User =
  mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);

export default User;