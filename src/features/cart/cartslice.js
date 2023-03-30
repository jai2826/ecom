import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    count: 0,
    totalamt: 0,
  },
  reducers: {
    addItem: (state, payload) => {
      if (state.count <= 0) {
        state.data.push(payload.payload);
        state.count += 1;
      } else
        for (var i = 0; i < state.data.length; i++) {
          if (state.data[i].id == payload.payload.id) {
            state.data[i].quantity += 1;
          } else {
            state.data.push(payload.payload);
            state.count += 1;
          }
        }

      state.totalamt = state.totalamt + payload.payload.price;
    },

    //Remove Item from the cart
    removeItem: (state, payload) => {
      state.totalamt -= payload.payload.price * payload.payload.quantity;
      const newdata = state.data.filter((item) => {
        item.id !== payload.payload.id;
      });
      state.count -= 1;
      state.data = newdata;
    },

    //Decrease Item count
    decreaseItem: (state, payload) => {
      for (var i = 0; i < state.data.length; i++) {
        if (state.data[i].quantity > 1) {
          if (state.data[i].id == payload.payload.id) {
            state.data[i].quantity -= 1;
          }
        } else {
          const newdata = state.data.filter((item) => {
            item.id !== payload.payload.id;
          });
          state.count -= 1;
          state.data = newdata;
        }
      }

      state.totalamt = state.totalamt - payload.payload.price;
    },
  },
});
// Action creators are generated for each case reducer function
export const { addItem, removeItem, decreaseItem } = cartSlice.actions;

export default cartSlice.reducer;
