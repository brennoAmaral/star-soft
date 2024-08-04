import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import addProduct from "./actions/add-product";
import decreaseProduct from "./actions/decrease-product";
import increaseProduct from "./actions/increase-product";
import removeProduct from "./actions/remove-product";
import { IBag } from "./type-bag-controller";

const initialState: IBag = {
  products: [],
  qtyProducts: 0,
  totalPrice: 0
};

export const bagReducer = createSlice({
  name: "bag-reducer",
  initialState,
  reducers: {
    addProduct: (state, product: PayloadAction<IProduct>)=>{
      addProduct(product.payload, state)
    },
    removeProductById: (state, id: PayloadAction<number>)=>{
      removeProduct(id.payload, state)
    },
    increaseQtyProduct:(state, id: PayloadAction<number>)=>{
      increaseProduct(state, id.payload)
    },
    decreaseQtyProduct:(state, id: PayloadAction<number>)=>{
      decreaseProduct(state, id.payload)
    },
  },
});

export const bagActions = bagReducer.actions

export default bagReducer.reducer;
