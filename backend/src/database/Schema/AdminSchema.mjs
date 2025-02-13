import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const Admin = mongoose.model("admin", adminSchema);
