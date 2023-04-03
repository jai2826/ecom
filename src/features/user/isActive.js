import { createSlice } from "@reduxjs/toolkit";

export const CheckActive = createSlice({
  name: "Active",
  initialState: {
    signIn: "block",
    signOut:"hidden"
  },
  reducers: {
    disableButton: (state, action) => {
      console.log(action);
      if (action.payload !== null) {
        if (action.payload.success) {
          state.signIn = "hidden";
          state.signOut = "block";
          // state.SigninShow = false;
        } else if (!action.payload.success) {
          state.signIn = "block";
          state.signOut = "hidden";
          // state.SigninShow = true;
        }
      }
    },
  },
});
// Action creators are generated for each case reducer function
export const { disableButton } = CheckActive.actions;

export default CheckActive.reducer;
