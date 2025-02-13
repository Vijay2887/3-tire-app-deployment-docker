import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Employee } from "./database/Schema/EmployeeSchema.mjs";
import { Admin } from "./database/Schema/AdminSchema.mjs";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log(error));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running at PORT : ${PORT}`);
});

app.get("/api/employees", async (request, response) => {
  try {
    const employees = await Employee.find();
    response.status(200).send(employees);
  } catch (error) {
    console.log(error);
    response.sendStatus(400);
  }
});

app.get("/api/admins", async (request, response) => {
  try {
    const admins = await Admin.find();
    response.status(200).send(admins);
  } catch (error) {
    console.log(error);
    response.sendStatus(400);
  }
});

app.post("/api/update-user-task", async (request, response) => {
  const data = request.body;
  try {
    const parsedId = parseInt(data.id);
    const findEmployee = await Employee.findOne({ id: parsedId });
    if (!findEmployee) return response.sendStatus(404);
    findEmployee.tasks.push((({ id, ...rest }) => rest)(data));
    //update the newTask count
    // findEmployee.taskCounts.newTask = findEmployee.taskCounts.newTask + 1;
    await findEmployee.save();

    return response.sendStatus(200);
  } catch (error) {
    return response.sendStatus(500);
  }
});

app.post("/api/modify-task", async (request, response) => {
  const data = request.body;

  try {
    const findEmployee = await Employee.findOne({
      id: parseInt(data.currentEmployee.id),
    });
    if (!findEmployee) return response.sendStatus(404);

    const index = findEmployee.tasks.findIndex(
      (currentTask) =>
        currentTask.taskTitle == data.task.taskTitle &&
        currentTask.taskDescription == data.task.taskDescription
    );
    if (index === -1) return response.sendStatus(404);

    findEmployee.tasks.splice(index, 1, data.updatedTask);

    // Debugging task counts

    // Safely update task counts
    if (data.updatedTask.active) {
      findEmployee.taskCounts.active =
        parseInt(findEmployee.taskCounts.active) + 1;
    }

    if (data.updatedTask.newTask) {
      findEmployee.taskCounts.newTask =
        parseInt(findEmployee.taskCounts.newTask) + 1;
    }

    if (data.updatedTask.completed) {
      findEmployee.taskCounts.completed =
        parseInt(findEmployee.taskCounts.completed) + 1;
      findEmployee.taskCounts.active =
        parseInt(findEmployee.taskCounts.active) - 1;
    }

    if (data.updatedTask.failed) {
      findEmployee.taskCounts.failed =
        parseInt(findEmployee.taskCounts.failed) + 1;
      findEmployee.taskCounts.active =
        parseInt(findEmployee.taskCounts.active) - 1;
    }

    await findEmployee.save();
    return response.sendStatus(200);
  } catch (error) {
    console.error("Error modifying task:", error);
    return response
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});
