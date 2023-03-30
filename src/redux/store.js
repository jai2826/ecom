import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartslice'
import cartVisibility from '../features/cart/cartvisibility'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartVisibility: cartVisibility,
  },
});
