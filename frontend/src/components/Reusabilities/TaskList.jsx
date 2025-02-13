import ActiveComponent from "../TaskComponents/ActiveComponent";
import CompletedComponent from "../TaskComponents/CompletedComponent";
import FailedComponent from "../TaskComponents/FailedComponent";
import NewTaskComponent from "../TaskComponents/NewTaskComponent";

function TaskList({ currentEmployee, setEmployees }) {
  return (
    <div className="flex px-6 py-5 mt-3  gap-5 overflow-x-auto scrollbar-hide">
      {currentEmployee?.tasks.map((task, index) => {
        if (task.active) {
          return (
            <ActiveComponent
              key={index}
              task={task}
              currentEmployee={currentEmployee}
              setEmployees={setEmployees}
            />
          );
        }
        if (task.completed) {
          return (
            <CompletedComponent
              key={index}
              task={task}
              setEmployees={setEmployees}
            />
          );
        }
        if (task.failed) {
          return (
            <FailedComponent
              key={index}
              task={task}
              setEmployees={setEmployees}
            />
          );
        }
        if (task.newTask) {
          return (
            <NewTaskComponent
              key={index}
              task={task}
              currentEmployee={currentEmployee}
              setEmployees={setEmployees}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default TaskList;
