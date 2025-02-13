function CompletedComponent({ task }) {
  return (
    <div className="w-[35%] flex-shrink-0 bg-blue-400 rounded-md px-6 py-5">
      <div className="flex justify-between">
        <span className="bg-violet-300 text-black font-bold text-lg px-2 py-1 rounded-lg">
          {task.category}
        </span>
        <span className="font-bold text-lg text-white">
          {task.taskDate.toString().slice(0, 10)}
        </span>
      </div>
      <h1 className="text-4xl font-bold font-sans pt-2">{task.taskTitle} </h1>
      <div className="mt-6">{task.taskDescription}</div>
      <div className="flex justify-center py-2 mt-4">
        <span className="bg-green-600 p-2 rounded">Completed ✅</span>
      </div>
    </div>
  );
}

export default CompletedComponent;
