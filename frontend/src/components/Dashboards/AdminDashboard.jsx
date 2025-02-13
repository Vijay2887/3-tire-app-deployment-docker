import { useContext } from "react";
import AllTasks from "../Reusabilities/AllTasks";
import CreateTask from "../Reusabilities/CreateTask";
import Header from "../Reusabilities/Header";
import { AuthContext } from "../../context/AuthContext";

function AdminDashboard(props) {
  const { currentAdmin, employees } = props;

  return (
    <>
      <Header user={currentAdmin} />
      <CreateTask />
      <AllTasks employees={employees} />
    </>
  );
}
export default AdminDashboard;
