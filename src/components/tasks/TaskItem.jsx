import React, { useState } from "react";
import {
  AiFillCheckCircle,
  AiFillDelete,
  AiFillCloseCircle,
} from "react-icons/ai";

const TaskItem = ({ theme, task }) => {
  return (
    <div
      className={`flex items-center justify-between py-3 px-5 w-11/12 mx-auto rounded-md ${
        theme === "light" ? "bg-white" : "darkTheme mainBg"
      } drop-shadow`}
    >
      <div className="main-section text-left">
        <h3 className="text-lg font-medium">{task.name}</h3>
        <p className="text-sm text-medium text-gray-400 py-1">22/12/2023</p>
        <div className="tags flex">
          <div className="tag">Work</div>
          <div className="tag">Easy</div>
          <div className="tag">Tech</div>
        </div>
      </div>
      <div className="actions flex">
        {task.isDone ? (
          <AiFillCloseCircle
            className="fill-red-400 cursor-pointer"
            size={25}
          />
        ) : (
          <AiFillCheckCircle
            className="fill-green-400 cursor-pointer"
            size={25}
          />
        )}
        <AiFillDelete className="ml-3 fill-gray-700 cursor-pointer" size={25} />
      </div>
    </div>
  );
};

export default TaskItem;
