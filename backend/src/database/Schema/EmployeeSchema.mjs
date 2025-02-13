import mongoose from "mongoose";
import { Schema } from "mongoose";

const employeeSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  tasks: [
    {
      taskTitle: { type: String, required: true },
      taskDescription: { type: String, required: true },
      taskDate: { type: Date, required: true },
      category: { type: String, required: true },
      active: { type: Boolean, required: true },
      newTask: { type: Boolean, required: true },
      completed: { type: Boolean, required: true },
      failed: { type: Boolean, required: true },
    },
  ],
  taskCounts: {
    active: { type: Number },
    completed: { type: Number },
    failed: { type: Number },
    newTask: { type: Number },
  },
  name: { type: String },
});

export const Employee = mongoose.model("employee", employeeSchema);
