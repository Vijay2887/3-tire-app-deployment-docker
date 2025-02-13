import { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboards/AdminDashboard";
import EmployeeDashboard from "./components/Dashboards/EmployeeDashboard";
import axios from "axios";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [admin, setAdmin] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("currentUser") || null
  );
  const [currentAdmin, setCurrentAdmin] = useState(
    JSON.parse(localStorage.getItem("currentAdmin")) || null
  );
  const [currentEmployee, setCurrentEmployee] = useState(
    JSON.parse(localStorage.getItem("currentEmployee")) || null
  );

  // Fetching all employees and admin data
  useEffect(() => {
    async function fetchData() {
      const adminResponse = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/admins`
      );
      const employeeResponse = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/employees`
      );
      setAdmin(adminResponse.data);
      setEmployees(employeeResponse.data);
    }
    fetchData();
  }, []);

  // Updating currentEmployee when employees data changes
  useEffect(() => {
    if (currentEmployee) {
      const updatedEmployee = employees.find(
        (emp) => emp.id === currentEmployee.id
      );
      if (updatedEmployee) {
        setCurrentEmployee(updatedEmployee);
      }
    }
  }, [employees, currentEmployee]);

  // Storing logged-in user's data in localStorage
  useEffect(() => {
    currentUser && localStorage.setItem("currentUser", currentUser);
    currentAdmin &&
      localStorage.setItem("currentAdmin", JSON.stringify(currentAdmin));
    currentEmployee &&
      localStorage.setItem("currentEmployee", JSON.stringify(currentEmployee));
  }, [currentUser, currentAdmin, currentEmployee]);

  // UI rendering
  return (
    <AuthContext.Provider
      value={{
        admin,
        employees,
        setEmployees,
        setCurrentUser,
        setCurrentEmployee,
        setCurrentAdmin,
      }}
    >
      {!currentUser && <Login />}
      {currentUser === "admin" && (
        <AdminDashboard currentAdmin={currentAdmin} employees={employees} />
      )}
      {currentUser === "employee" && (
        <EmployeeDashboard
          currentEmployee={currentEmployee}
          setEmployees={setEmployees}
          employees={employees}
        />
      )}
    </AuthContext.Provider>
  );
}

export default App;
