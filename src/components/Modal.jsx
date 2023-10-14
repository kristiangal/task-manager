import React, { useState } from "react";

import Select from "react-select";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

import { tasks } from "../data/tasks";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../features/modalSlice";
import { addTask, removeTask } from "../features/taskSlice";

import { toast } from "react-toastify";

const Modal = ({ theme }) => {
  const [taskName, setTaskName] = useState("");
  const [taskIsImportant, setTaskIsImportant] = useState(false);
  const [taskTags, setTaskTags] = useState([]);

  const dispatch = useDispatch();

  const { isOpen, bodyType, selectedTask } = useSelector(
    (state) => state.modal
  );

  const resetInputs = () => {
    setTaskName("");
    setTaskTags([]);
    setTaskIsImportant(false);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const taskToAdd = {
      name: taskName,
      date: new Date(),
      tags: taskTags,
      isImportant: taskIsImportant,
      isDone: false,
    };
    dispatch(addTask({ task: taskToAdd }));
    dispatch(toggleModal());
    toast.success("Task succesfully added!");
    resetInputs();
  };

  const handleDeleteTask = (e, id) => {
    e.preventDefault();
    dispatch(removeTask({ id: selectedTask }));
    dispatch(toggleModal());
    resetInputs();
    toast.success("Task succesfully deleted!");
  };

  const bodyTypes = {
    addTask: (
      <>
        <h1 className="text-xl font-medium pb-3">Add task</h1>
        <div className="input-groups grid grid-rows-auto md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-10 text-left">
          <div className="form-group flex flex-col">
            <label htmlFor="task-name" className="pb-2 text-sm">
              Task name
            </label>
            <input
              type="text"
              name="task-name"
              id="task-name"
              className="mb-2 p-1 rounded"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <label htmlFor="isImportant" className="pb-1 text-sm">
              Is important?
            </label>
            <input
              className="mr-auto"
              type="checkbox"
              name="isImportant"
              id="isImportant"
              value={taskIsImportant}
              onChange={(e) => setTaskIsImportant(e.target.checked)}
            />
          </div>
          <div className="form-group flex flex-col">
            <label htmlFor="tags" className="pb-2 text-sm">
              Related tags
            </label>
            <Select
              value={taskTags}
              closeMenuOnSelect={false}
              isMulti
              options={tasks}
              onChange={(selectedOptions) => setTaskTags(selectedOptions)}
            />
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
            onClick={() => {
              dispatch(toggleModal());
              setTaskTags([]);
              setTaskName("");
              setTaskIsImportant(false);
            }}
            type="button"
            className="ml-6 py-1 px-3 bg-red-400 text-white rounded"
          >
            Close
          </button>
        </div>
      </>
    ),
    confirmDelete: (
      <div>
        <h1 className="text-lg font-medium mb-3">Delete this task?</h1>
        <div className="actions">
          <button
            onClick={(e) => handleDeleteTask(e, selectedTask)}
            className="py-1 px-3 bg-green-400 text-white rounded mr-1"
          >
            Yes
          </button>
          <button
            className="py-1 px-3 bg-red-400 text-white rounded ml-1"
            type="button"
            onClick={() => dispatch(toggleModal())}
          >
            No
          </button>
        </div>
      </div>
    ),
  };

  if (isOpen) {
    return (
      <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-10 flex justify-center items-center">
        <form
          onSubmit={bodyType === "addTask" ? handleAddTask : handleDeleteTask}
          className={`${theme}Theme py-3 px-5 w-full sm:w-3/4 rounded text-center`}
        >
          {bodyTypes[bodyType]}
        </form>
      </div>
    );
  }
};

export default Modal;
