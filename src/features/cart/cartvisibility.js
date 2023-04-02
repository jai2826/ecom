import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "hidden",
};

export const cartvisibility = createSlice({
  name: "Visibility",
  initialState,
  reducers: {
    hide: (state) => {
      state.value = "hidden";
    },
    show: (state) => {
      state.value = "flex";
    },
    change: (state) => {
      if (state.value == "hidden") state.value = "flex";
      else if (state.value == "flex") state.value = "hidden";
    },
  },
});

// Action creators are generated for each case reducer function
export const { hide, show, change } = cartvisibility.actions;

export default cartvisibility.reducer;
