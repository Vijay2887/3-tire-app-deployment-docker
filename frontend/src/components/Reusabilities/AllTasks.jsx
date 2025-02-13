function AllTasks({ employees }) {
  return (
    <div className="py-3 bg-[#1c1c1c] mt-4">
      <div className="px-6">
        <div className="flex justify-between px-4 py-2 bg-gray-700 rounded">
          <h3 className="w-[15%]">Name</h3>
          <h3 className="text-lg font-bold text-gray-">ID</h3>
          <h3 className="text-lg font-bold text-gray-">New Tasks</h3>
          <h3 className="text-lg font-bold text-gray-">Active</h3>
          <h3 className="text-lg font-bold text-gray-">Completed</h3>
          <h3 className="text-lg font-bold text-gray-">Failed</h3>
        </div>
      </div>
      <div className="bg-[#1c1c1c]  px-6 py-2 ">
        {employees.map((employee, index) => {
          return (
            <div
              className="flex justify-between py-2 px-4 bg-transparent rounded mb-1 border-green-900 border-2"
              key={index}
            >
              <h3 className=" w-[10%]">{employee.name}</h3>
              <h3 className="text-lg font-medium text-gray-400">
                {employee.id}
              </h3>
              <h3 className="text-lg font-medium text-gray-400">
                {employee.taskCounts.newTasks}
              </h3>
              <h3 className="text-lg font-medium text-gray-400">
                {employee.taskCounts.active}
              </h3>
              <h3 className="text-lg font-medium text-gray-400">
                {employee.taskCounts.completed}
              </h3>
              <h3 className="text-lg font-medium text-gray-400">
                {employee.taskCounts.failed}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllTasks;
