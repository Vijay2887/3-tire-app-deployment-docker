export const handleLogin = (
  e,
  {
    username,
    password,
    employees,
    admin,
    setCurrentUser,
    setUsername,
    setCurrentAdmin,
    setPassword,
    setCurrentEmployee,
  }
) => {
  e.preventDefault();
  if (admin.find((a) => a.email == username && a.password == password)) {
    const curAdmin = admin.find(
      (a) => a.email == username && a.password == password
    );
    setCurrentAdmin(curAdmin);
    setCurrentUser("admin");
  } else if (
    employees.find(
      (employee) => employee.email == username && employee.password == password
    )
  ) {
    const curEmployee = employees.find(
      (employee) => employee.email == username && employee.password == password
    );
    setCurrentUser("employee");
    setCurrentEmployee(curEmployee);
  } else {
    window.alert("Invalid Credentials");
  }
  setUsername("");
  setPassword("");
};
