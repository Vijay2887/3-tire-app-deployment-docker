import { useContext } from "react";
import handleLogout from "../../Helpers/handleLogout";
import { AuthContext } from "../../context/AuthContext";

function Header(props) {
  const { user } = props;
  const myContext = useContext(AuthContext);
  // console.log(currentEmployee);
  return (
    <>
      <div className="flex justify-between px-6 py-5 items-center">
        <h3 className="text-2xl font-semibold">
          Hello, <br />
          <span className="text-3xl font-bold"> {user.name}👋</span>
        </h3>
        <button
          className="bg-red-600 px-3 py-2 text-white rounded-md hover:bg-red-800 active:bg-red-500"
          onClick={() => handleLogout(myContext)}
        >
          Log Out
        </button>
      </div>
    </>
  );
}

export default Header;
