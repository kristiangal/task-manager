import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const initialState = {
  tasks: localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      console.log(action);
      console.log(action.task);
      const { name, date, tags, isImportant, isDone } = action.payload.task;

      const taskToAdd = {
        id: uuidv4(),
        name,
        date: moment(date).format("DD/MM/YYYY"),
        tags,
        isImportant,
        isDone,
      };
      state.tasks.push(taskToAdd);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    removeTask: (state, action) => {
      const { id } = action;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
