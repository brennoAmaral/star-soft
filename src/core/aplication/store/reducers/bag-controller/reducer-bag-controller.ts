import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import bagActionAddProduct from "./actions/bag-action-add-product";
import bagActionRemoveProduct from "./actions/bag-action-remove-product";
import { IBag } from "./type-bag-controller";




const initialState: IBag = {
  products: [],
  qtyProducts: 0,
};

export const bagReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>)=>{
      bagActionAddProduct(action.payload, state)
    },
    removeProductById: (state, id: PayloadAction<number>)=>{
      bagActionRemoveProduct(id.payload, state)
    }
    // addProduct: (state, action: PayloadAction<IProduct>) => {
    //   let products = state.products.map((product) => product);
    //   const product = action.payload;

    //   const isAlreadyInBag = products.some((p) => p.id === product.id);
      
    //   if (!isAlreadyInBag) {
    //     products.push({ ...product, qty: 1 });
    //     state.products=products
    //     state.qtyProducts = calculetTotalProducts(products)
    //     console.log(state);
    //     return;
    //   }
    //   state=state
    // },
  },
});

export const bagActions = bagReducer.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter;

export default bagReducer.reducer;
