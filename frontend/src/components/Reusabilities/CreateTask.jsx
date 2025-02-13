import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function CreateTask() {
  const myContext = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [category, setCategory] = useState("");
  const [id, setId] = useState(0);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // console.log(taskTitle, taskDate, taskDescription, category);
    const data = {
      id,
      taskTitle,
      taskDate,
      taskDescription,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/update-user-task`,
        data
      );
      window.alert("Task Assigned Successfully");
      const employeeResponse = await axios.get(
        "http://localhost:3000/api/employees"
      );
      myContext.setEmployees(employeeResponse.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      className="flex justify-between  px-6 py-5 bg-[#1c1c1c]"
      onSubmit={(e) => handleFormSubmit(e)}
    >
      {/* main div 1 */}
      <div className="w-[35%] flex flex-col gap-2">
        <div>
          <h3>Task Title</h3>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            type="text"
            placeholder="Make a UI design"
            className="w-full bg-transparent border-gray-500 border-2 rounded px-2 py-1 focus:outline-none font-semibold text-teal-200 placeholder-gray-400"
          />
        </div>
        <div>
          <h3>Date</h3>
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            type="date"
            className="w-full bg-transparent border-gray-500 border-2 rounded px-2 py-1 focus:outline-none text-teal-200 placeholder-gray-400"
          />
        </div>
        <div>
          <h3>Assign to</h3>
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            type="number"
            placeholder="employee id"
            className="w-full bg-transparent border-gray-500 border-2 rounded px-2 py-1 focus:outline-none text-teal-200 placeholder-gray-400"
          />
        </div>
        <div>
          <h3>Category</h3>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            placeholder="design, dev, etc"
            className="w-full bg-transparent border-gray-500 border-2 rounded px-2 py-1 focus:outline-none text-teal-200 placeholder-gray-400"
          />
        </div>
      </div>
      {/* main div 2 */}
      <div className="w-[40%] flex flex-col justify-between">
        <div>
          <h3>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            rows={6}
            cols={50}
            className="w-full border-green-500 border-2 rounded bg-transparent focus:outline-none p-2 text-teal-200 font-semibold placeholder-gray-400"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-green-500 p-3 rounded-sm w-full hover:scale-[1.04] active:bg-green-800 active:scale-[1]"
          >
            Create Task
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateTask;
