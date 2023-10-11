import React from "react";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getFromLocalStorage } from "../features/taskSlice";

import TaskContainer from "../components/tasks/TaskContainer";
import Modal from "../components/Modal";

const HomePage = () => {
  const [time, setTime] = useState(new Date());
  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.theme);
  const { tasks } = useSelector((state) => state.task);
  const { user } = useSelector((state) => state.user);

  const date = new Date().toLocaleDateString();
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
    if (localStorage.getItem("sessions")) {
      const currentUserSession = JSON.parse(
        localStorage.getItem("sessions")
      ).find((session) => session.name === user);
      if (currentUserSession) {
        localStorage.setItem("tasks", JSON.stringify(currentUserSession.tasks));
        dispatch(getFromLocalStorage());
      }
    }
  }, []);
  return (
    <>
      <main
        className={`${theme}Theme mainBg h-full transition-all duration-300`}
      >
        <div className="info-section text-center py-5">
          <h1 className="text-2xl font-semibold">Hey there, {user}!</h1>
          <h2
            className={`text-lg py-2 font-medium ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            {date}
          </h2>
          <h2
            className={`font-medium ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            {time.toLocaleTimeString()}
          </h2>
        </div>
        <TaskContainer tasks={tasks} theme={theme} />
      </main>
      <Modal theme={theme} />
    </>
  );
};

export default HomePage;
