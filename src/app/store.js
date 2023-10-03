import { configureStore } from "@reduxjs/toolkit";

import themeSlice from "../features/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
  devTools: true,
});

export default store;
