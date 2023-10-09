import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  bodyType: "addTask",
  selectedTask: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    setBodyType: (state, action) => {
      state.bodyType = action.payload.bodytype;
    },
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload.task;
    },
  },
});

export const { toggleModal, setBodyType, setSelectedTask } = modalSlice.actions;
export default modalSlice.reducer;
