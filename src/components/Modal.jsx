import React, { useState } from "react";

import Select from "react-select";

import { tasks } from "../data/tasks";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../features/modalSlice";
import { addTask } from "../features/taskSlice";

const Modal = ({ bodyType, theme }) => {
  const [taskName, setTaskName] = useState("");
  const [taskIsRequired, setTaskIsRequired] = useState(false);
  const [taskTags, setTaskTags] = useState([]);

  const dispatch = useDispatch();

  const { isOpen } = useSelector((state) => state.modal);

  const handleAddTask = () => {
    console.log("ey");
  };

  const bodyTypes = {
    addTask: (
      <form className={`${theme}Theme py-3 px-5 w-3/4 rounded text-center`}>
        <h1 className="text-xl font-medium pb-3">Add task</h1>
        <div className="input-groups grid grid-rows-1 grid-cols-2 gap-10 text-left">
          <div className="form-group flex flex-col">
            <label htmlFor="task-name" className="pb-2 text-sm">
              Task name
            </label>
            <input
              type="text"
              name="task-name"
              id="task-name"
              className="mb-2 p-1 rounded"
            />
            <label htmlFor="isImportant" className="pb-1 text-sm">
              Is important?
            </label>
            <input
              className="mr-auto"
              type="checkbox"
              name="isImportant"
              id="isImportant"
            />
          </div>
          <div className="form-group flex flex-col">
            <label htmlFor="tags" className="pb-2 text-sm">
              Related tags
            </label>
            <Select closeMenuOnSelect={false} isMulti options={tasks} />
          </div>
        </div>
        <div className="actions pt-6 text-right">
          <button
            type="submit"
            className="py-1 px-3 bg-green-400 text-white rounded"
          >
            Add
          </button>
          <button
            onClick={() => dispatch(toggleModal())}
            type="button"
            className="ml-6 py-1 px-3 bg-red-400 text-white rounded"
          >
            Close
          </button>
        </div>
      </form>
    ),
  };

  if (isOpen) {
    return (
      <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-10 flex justify-center items-center">
        {bodyTypes[bodyType]}
      </div>
    );
  }
};

export default Modal;
