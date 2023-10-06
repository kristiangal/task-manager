import React from "react";
import TaskItem from "./TaskItem";

import { IoIosAddCircle } from "react-icons/io";
import { IoFilterCircleSharp } from "react-icons/io5";

import { useDispatch } from "react-redux";
import { toggleModal } from "../../features/modalSlice";

const TaskContainer = ({ theme, tasks }) => {
  const dispatch = useDispatch();

  const handleShowModal = () => {
    dispatch(toggleModal());
  };

  return (
    <div
      className={`mx-auto pb-3 text-center w-4/5 ${theme}Theme bg-gray-500/50 drop-shadow-md rounded-lg overflow-hidden`}
    >
      <div
        className={`list-header px-3 py-5 ${theme}Theme flex justify-between items-center`}
      >
        <h1 className="font-medium text-xl mx-auto pl-14">
          Your tasks for today
        </h1>
        <div className="icons flex">
          <IoIosAddCircle
            className="fill-green-400 cursor-pointer"
            size={25}
            onClick={handleShowModal}
          />
          <IoFilterCircleSharp
            className="ml-1 fill-blue-400 cursor-pointer"
            size={25}
          />
        </div>
      </div>
      <div className="task-list py-3">
        {tasks
          ? tasks.map((task) => (
              <TaskItem task={task} key={task.id} theme={theme} />
            ))
          : null}
      </div>
    </div>
  );
};

export default TaskContainer;
