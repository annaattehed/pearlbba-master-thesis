import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

// adding products to shoppingcart to the empty array "products"
// deleting and empty cart from line 22

export const shoppingCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state,action) => {
      state.products=state.products.filter(item=>item.id !== action.payload)
    },
    resetCart: (state) => {
      state.products = []
    },
  },
});

// Action creators are generated 
export const { addToCart,removeItem,resetCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;