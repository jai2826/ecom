import { createSlice } from "@reduxjs/toolkit";



export const cartSlice = createSlice({
  name: "cart",
  initialState:{
  data: [],
  count: 0,
  totalamt: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const index = state.data.findIndex((item) => item._id === action.payload._id);
      if (index >= 0) {
        state.data[index].qty += 1;
      } else {
        const tempdata = { ...action.payload, qty: 1 };
        state.data.push(tempdata);
        state.count += 1;
      }

      state.totalamt = state.totalamt + action.payload.price;
    },

    //Remove Item from the cart
    removeItem:(state, action) => {
      const index = state.data.findIndex((item) => item._id === action.payload._id);
      state.data.splice(index,1)
      state.count -= 1;
      state.totalamt -= action.payload.price * action.payload.quantity;
    },

    //Decrease Item count
    decreaseItem: (state, action) => {
      const index = state.data.findIndex((item) => item._id === action.payload._id);
      // console.log(state.data[index].id);
      if(state.data[index].qty>1)
      {
          state.data[index].qty -= 1;
      }else{
        state.data.splice(index, 1);
        state.count -= 1;
      }

      state.totalamt = state.totalamt - action.payload.price;
    },
  },
});
// Action creators are generated for each case reducer function
export const { addItem, removeItem, decreaseItem } = cartSlice.actions;

export default cartSlice.reducer;
