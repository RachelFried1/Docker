import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    total: 0,
    itemsAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
     const item = state.cartList.find((item) => item.item.id === action.payload.id);
     if (item) {
        item.amount++;
        item.cost = (Number(item.cost) + Number(item.item.price)).toFixed(2);       
     }
     else{
      state.cartList.push({
        id: Date.now(),
        item: action.payload,
        amount: 1,
        cost: action.payload.price.toFixed(2),       
      });
      state.itemsAmount = state.cartList.length;
    }
      state.total = (Number(state.total) + Number(action.payload.price)).toFixed(2);
      
    },
    deleteItem: (state, action) => {
      const item = state.cartList.find((item) => item.id === action.payload);
      if (item) {
        state.total = (Number(state.total) - Number(item.cost)).toFixed(2);
        state.cartList = state.cartList.filter((item) => item.id !== action.payload);
      }
      state.itemsAmount = state.cartList.length;
    },
    plusItem: (state, action) => {
      const item = state.cartList.find((item) => item.id === action.payload);
      if (item) {
        item.amount++;
        item.cost = (Number(item.cost) + Number(item.item.price)).toFixed(2);
        state.total = (Number(state.total) + Number(item.item.price)).toFixed(2);
      }
      state.itemsAmount = state.cartList.length;
    },
    minusItem: (state, action) => {
      const item = state.cartList.find((item) => item.id === action.payload);
      if (item) {
        state.total = (Number(state.total) - Number(item.item.price)).toFixed(2);
        if (item.amount === 1) {
          state.cartList = state.cartList.filter((item) => item.id !== action.payload);
        } else {
          item.amount--;
          item.cost = (Number(item.cost) - Number(item.item.price)).toFixed(2);
        }
      }
      state.itemsAmount = state.cartList.length;
    },
    clearCart: (state) => {
      state.cartList = [];
      state.total = 0;
      state.itemsAmount = 0;
    },
  },
});

export const { addItem, deleteItem, plusItem, minusItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;