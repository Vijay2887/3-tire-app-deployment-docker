function TaskNumbers(props) {
  const { currentEmployee } = props;
  return (
    <div className="flex px-6 py-2 gap-4 mt-2">
      <div className="w-[25%] bg-red-500 rounded-md py-6 px-2 flex flex-col items-start">
        <h1 className="text-4xl font-bold">
          {currentEmployee.taskCounts.active}
        </h1>
        <span className="text-2xl font-bold">Active</span>
      </div>

      <div className="w-[25%] bg-green-500 rounded-md py-6 px-2 flex flex-col items-start">
        <h1 className="text-4xl font-bold">
          {currentEmployee.taskCounts.completed}
        </h1>
        <span className="text-2xl font-bold">Completed</span>
      </div>

      <div className="w-[25%] bg-yellow-500 rounded-md py-6 px-2 flex flex-col items-start">
        <h1 className="text-4xl font-bold">
          {currentEmployee.taskCounts.newTasks}
        </h1>
        <span className="text-2xl font-bold">New Tasks</span>
      </div>

      <div className="w-[25%] bg-blue-500 rounded-md py-6 px-2 flex flex-col items-start">
        <h1 className="text-4xl font-bold">
          {currentEmployee.taskCounts.failed}
        </h1>
        <span className="text-2xl font-bold">Failed</span>
      </div>
    </div>
  );
}
export default TaskNumbers;
