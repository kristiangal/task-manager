import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeTheme } from "../features/themeSlice.js";
import { logoutUser } from "../features/userSlice.js";
import { clearTasks } from "../features/taskSlice.js";

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { theme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.user);

  const handleThemeChange = (e) => {
    dispatch(changeTheme());
  };

  const handleLogoutUser = () => {
    navigate("/login");
    dispatch(logoutUser());
    dispatch(clearTasks());
  };

  return (
    <nav
      className={`h-10 px-10 py-12 flex justify-between items-center ${theme}Theme drop-shadow transition-all duration-300`}
    >
      <h1 className="font-medium">MyTaskManager</h1>
      <div className="actions flex items-center justify-content-center">
        <div
          className="themeSwitch relative h-6 w-12 bg-blue-400! rounded-full cursor-pointer bg-white drop-shadow-s mr-3"
          onClick={(e) => handleThemeChange(e)}
        >
          <div
            className={`iconContainer absolute ${
              theme === "light" ? "translate-x-0" : "translate-x-full"
            } bg-white h-full flex items-center p-1 rounded-full transition-transform duration-300`}
          >
            {theme === "light" ? (
              <BsFillSunFill className="fill-yellow-500" />
            ) : (
              <BsFillMoonFill className="fill-gray-400" />
            )}
          </div>
        </div>
        {user ? (
          <IoMdLogOut
            onClick={handleLogoutUser}
            size={25}
            className="fill-gray-500 cursor-pointer"
          />
        ) : null}
      </div>
    </nav>
  );
};

export default Nav;
