import React from "react";
import TaskItem from "./TaskItem";

import { IoIosAddCircle } from "react-icons/io";
import { IoFilterCircleSharp } from "react-icons/io5";

const TaskContainer = () => {
  return (
    <div className="mx-auto pb-3 text-center w-4/5 bg-gray-600 rounded overflow-hidden">
      <div className="list-header p-3 bg-gray-800 flex justify-between items-center">
        <h1 className="font-medium text-xl mx-auto pl-14">
          Your tasks for today
        </h1>
        <div className="icons flex">
          <IoIosAddCircle size={25} />
          <IoFilterCircleSharp size={25} />
        </div>
      </div>
      <div className="task-list">
        <TaskItem />
      </div>
    </div>
  );
};

export default TaskContainer;
