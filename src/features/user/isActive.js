import { createSlice } from "@reduxjs/toolkit";

export const CheckActive = createSlice({
  name: "Active",
  initialState: {
    value: "block",
    // SigninShow: true,
  },
  reducers: {
    disableButton: (state, action) => {
      console.log(action);
      if (action.payload !== null) {
        if (action.payload.success) {
          state.value = "hidden";
          // state.SigninShow = false;
        } else if (!action.payload.success) {
          state.value = "block";
          // state.SigninShow = true;
        }
      }
    },
  },
});
// Action creators are generated for each case reducer function
export const { disableButton } = CheckActive.actions;

export default CheckActive.reducer;
