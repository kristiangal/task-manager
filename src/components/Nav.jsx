import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="h-10 px-10 py-12 flex justify-between items-center bg-white drop-shadow-sm">
      <h1 className="font-medium">MyTaskManager</h1>
      <div className="themeSwitch relative h-6 w-12 bg-blue-400 rounded-full cursor-pointer">
        <div className="iconContainer absolute left-0 bg-white h-full flex items-center p-1 rounded-full">
          <BsFillSunFill className="fill-yellow-500" />
          {/* <BsFillMoonFill /> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
