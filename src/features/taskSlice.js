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
      const { id } = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toggleCompleted: (state, action) => {
      const { id } = action.payload;
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === id) {
          task.isDone = !task.isDone;
        }
        return task;
      });
      state.tasks = updatedTasks;
    },
    clearTasks: (state) => {
      state.tasks = [];
      localStorage.removeItem("tasks");
    },
    getFromLocalStorage: (state) => {
      state.tasks = JSON.parse(localStorage.getItem("tasks"));
    },
  },
});

export const {
  addTask,
  removeTask,
  toggleCompleted,
  clearTasks,
  getFromLocalStorage,
} = taskSlice.actions;

export default taskSlice.reducer;
