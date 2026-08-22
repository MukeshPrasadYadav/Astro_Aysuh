import mongoose, { Schema, Document } from "mongoose";


export enum Role {
    "USER",
    "ADMIN"
}
export interface IUser extends Document {
  name: string;
  number: string;
  role : string;
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
      maxLength : 10,
      minLength : 10 ,
      unique: true,
      trim: true,
    },
    role: {
  type: String,
  enum: Object.values(Role),
  default: Role.USER,
}

  },
  {
    timestamps: true,
  }
);

const User =
  mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);

export default User;