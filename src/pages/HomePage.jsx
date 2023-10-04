import React from "react";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import TaskContainer from "../components/tasks/TaskContainer";

const HomePage = () => {
  const name = "Kiko";
  const [time, setTime] = useState(new Date());

  const { theme } = useSelector((state) => state.theme);
  const { tasks } = useSelector((state) => state.task);
  const date = new Date().toLocaleDateString();
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);
  return (
    <main className={`${theme}Theme mainBg h-full transition-all duration-300`}>
      <div className="info-section text-center py-5">
        <h1 className="text-2xl font-semibold">Hey there, {name}!</h1>
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
  );
};

export default HomePage;
