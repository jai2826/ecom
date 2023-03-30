import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value:"hidden"
};

export const cartvisibility = createSlice({
  name: "Visibility",
  initialState,
  reducers: {
    hide: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value ="hidden";
    },
    show:(state)=>{
        state.value="flex";
    },
    change:(state)=>{
      if ((state.value == "hidden")) state.value = "flex";
      else if ((state.value == "flex")) state.value = "hidden";
    }
  },
});

// Action creators are generated for each case reducer function
export const { hide, show, change } = cartvisibility.actions;

export default cartvisibility.reducer;
