import { configureStore } from "@reduxjs/toolkit";

import themeSlice from "../features/themeSlice";
import taskSlice from "../features/taskSlice";
import modalSlice from "../features/modalSlice";
import userSlice from "../features/userSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    task: taskSlice,
    modal: modalSlice,
    user: userSlice,
  },
  devTools: true,
});

export default store;
