import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../features/themeSlice.js";

const Nav = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  const handleThemeChange = (e) => {
    dispatch(changeTheme());
  };

  return (
    <nav
      className={`h-10 px-10 py-12 flex justify-between items-center ${theme}Theme drop-shadow`}
    >
      <h1 className="font-medium">MyTaskManager</h1>
      <div
        className="themeSwitch relative h-6 w-12 bg-blue-400! rounded-full cursor-pointer bg-white drop-shadow-sm"
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
    </nav>
  );
};

export default Nav;
