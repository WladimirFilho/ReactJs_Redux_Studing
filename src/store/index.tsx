/* eslint-disable @typescript-eslint/no-unused-vars */

import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: ["Make Food", "Studying Redux", "Cooking"],

  reducers: {},
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
