import Header from "../Reusabilities/Header";
import TaskList from "../Reusabilities/TaskList";
import TaskNumbers from "../Reusabilities/TaskNumbers";

function EmployeeDashboard(props) {
  const { currentEmployee, setEmployees } = props;
  return (
    <>
      <Header user={currentEmployee} />
      <TaskNumbers currentEmployee={currentEmployee} />
      <TaskList currentEmployee={currentEmployee} setEmployees={setEmployees} />
    </>
  );
}

export default EmployeeDashboard;
