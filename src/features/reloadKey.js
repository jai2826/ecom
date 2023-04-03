import { createSlice } from "@reduxjs/toolkit";

export const reloadSlice = createSlice({
  name: "reload",
  initialState: {
    key: 0
  },
  reducers: {
    reload: (state)=>{
        state.key = Math.random();
    }
  },
});
// Action creators are generated for each case reducer function
export const { reload } = reloadSlice.actions;

export default reloadSlice.reducer;
