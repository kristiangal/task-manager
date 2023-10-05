import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const initialState = {
  tasks: [
    {
      id: uuidv4(),
      name: "Napisat majitelovi bytu email",
      date: moment(new Date()).format("DD/MM/YYYY"),
      tags: [
        { text: "Work", color: "yellow" },
        { text: "Work", color: "yellow" },
        { text: "Work", color: "yellow" },
        { text: "Work", color: "yellow" },
        { text: "Work", color: "yellow" },
        { text: "Work", color: "yellow" },
        { text: "Work", color: "yellow" },
        { text: "Work", color: "yellow" },
        { text: "Work", color: "yellow" },
      ],
      isImportant: true,
      isDone: false,
    },
  ],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { name, date, tags, isImportant, isDone } = action.task;
      const taskToAdd = {
        id: uuidv4(),
        name,
        date,
        tags,
        isImportant,
        isDone,
      };
      state.tasks.push(taskToAdd);
    },
    removeTask: (state, action) => {
      const { id } = action;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
