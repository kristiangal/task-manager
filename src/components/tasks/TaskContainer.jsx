import React from "react";
import TaskItem from "./TaskItem";
import Modal from "../Modal";

import { IoIosAddCircle } from "react-icons/io";
import { IoFilterCircleSharp } from "react-icons/io5";

import { useDispatch } from "react-redux";
import { toggleModal, setBodyType } from "../../features/modalSlice";

const TaskContainer = ({ theme, tasks }) => {
  const dispatch = useDispatch();

  const handleShowModal = () => {
    dispatch(setBodyType({ bodytype: "addTask" }));
    dispatch(toggleModal());
  };

  return (
    <>
      <div
        className={`mx-auto pb-3 text-center sm:w-11/12 lg:w-8/12 ${theme}Theme bg-gray-500/50 drop-shadow-md rounded-lg overflow-hidden`}
      >
        <div
          className={`list-header px-6 py-5 ${theme}Theme flex justify-between items-center`}
        >
          <h1 className="font-medium text-left sm:text-center text-lg sm:text-xl sm:mx-auto sm:pl-14">
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
        <div className="task-list max-h-96 py-3 overflow-auto">
          {tasks.length ? (
            tasks.map((task) => (
              <TaskItem task={task} key={task.id} theme={theme} />
            ))
          ) : (
            <div>
              <h1 className="text-xl font-medium">
                You didn't create a task yet 😊
              </h1>
              <p className="text-lg text-gray-400 py-2">
                Start with creating your first task of the day!
              </p>
              <button
                onClick={handleShowModal}
                className="flex items-center mx-auto mt-2 bg-green-400 hover:bg-green-500 transition-all duration-300 text-white rounded py-1 px-2"
              >
                <IoIosAddCircle className="fill-white mr-1" size={20} /> Add
                Task
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TaskContainer;
