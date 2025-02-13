function handleLogout(myContext) {
  localStorage.clear();

  // window.location.reload();
  // instead of reloading the window, we could just change the current user to null so that react would automatically re-render
  myContext.setCurrentUser(null);
  myContext.setCurrentEmployee(null);
  myContext.setCurrentAdmin(null);
}
export default handleLogout;
