import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartslice'
import cartVisibility from '../features/cart/cartvisibility'
import isActive from '../features/user/isActive'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartVisibility: cartVisibility,
    isActive: isActive,
  },
});
