import React, { useState } from "react";

import {
  AiFillCheckCircle,
  AiFillDelete,
  AiFillCloseCircle,
} from "react-icons/ai";
import { CgDanger } from "react-icons/cg";

import Tag from "../Tag";

const TaskItem = ({ theme, task }) => {
  return (
    <div
      className={`flex items-center justify-between py-3 px-5 mb-3 w-11/12 mx-auto rounded-md ${
        theme === "light" ? "bg-white" : "darkTheme mainBg"
      } drop-shadow`}
    >
      <div className="main-section text-left">
        <h3 className="text-lg font-medium flex items-center">
          {task.isImportant ? (
            <CgDanger size={30} className="inline mr-2 text-red-500" />
          ) : null}{" "}
          {" " + task.name}
        </h3>
        <p className="text-sm text-medium text-gray-400 py-2">{task.date}</p>
        <div className="tags py-1 flex max-w-md overflow-x-auto">
          {task.tags
            ? task.tags.map((tag) => (
                <Tag key={tag.label} text={tag.label} color={tag.color} />
              ))
            : null}
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
