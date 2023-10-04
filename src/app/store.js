import { configureStore } from "@reduxjs/toolkit";

import themeSlice from "../features/themeSlice";
import taskSlice from "../features/taskSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    task: taskSlice,
  },
  devTools: true,
});

export default store;
