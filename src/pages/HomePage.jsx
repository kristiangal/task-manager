import React from "react";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import TaskContainer from "../components/tasks/TaskContainer";

const HomePage = () => {
  const name = "Kiko";
  const [time, setTime] = useState(new Date());

  const { theme } = useSelector((state) => state.theme);
  const date = new Date().toLocaleDateString();
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);
  return (
    <main>
      <div className="info-section text-center py-5">
        <h1 className="text-2xl font-semibold">Hey there, {name}!</h1>
        <h2 className="text-lg font-medium text-gray-700">{date}</h2>
        <h2 className="font-medium text-gray-600">
          {time.toLocaleTimeString()}
        </h2>
      </div>
      <TaskContainer />
    </main>
  );
};

export default HomePage;
