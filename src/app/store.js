import { configureStore } from "@reduxjs/toolkit";

import themeSlice from "../features/themeSlice";
import taskSlice from "../features/taskSlice";
import modalSlice from "../features/modalSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    task: taskSlice,
    modal: modalSlice,
  },
  devTools: true,
});

export default store;
