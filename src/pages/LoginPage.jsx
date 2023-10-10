import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { theme } = useSelector((state) => state.theme);
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSetUser = (e) => {
    e.preventDefault();
    dispatch(setUser({ user: { name: username } }));
    navigate("/");
  };

  return (
    <div
      className={`${theme}Theme mainBg flex flex-col h-screen py-16 px-32 transition-all duration-300`}
    >
      <form
        onSubmit={(e) => handleSetUser(e)}
        className={`${theme}Theme w-full text-center py-12 rounded-lg mt-6 transition-all duration-300`}
      >
        <div className="text text-center">
          <h1 className="text-2xl font-medium">
            Welcome, fellow task manager! 👋
          </h1>
          <p className="text-lg py-4 text-gray-500">this is the</p>
          <h1 className="text-4xl font-bold">Task Manager Application!</h1>
          <p className="text-lg text-gray-500 pt-6 pb-12">
            To start, you just need to pass in your name, and you can begin to
            add tasks to your day! 💪
          </p>
        </div>
        <div className="inputGroup text-center w-1/2 mx-auto">
          <label className="block text-sm mb-1" htmlFor="name">
            Type in your name
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="my-2 py-2 px-2 w-full rounded focus:border-green-400"
            placeholder="Type your name here..."
            type="text"
          />
        </div>
        <button className="px-2 py-1 bg-green-400 rounded-lg text-white w-32 mt-3">
          Start
        </button>
      </form>
    </div>
  );
};

export default LoginPage;