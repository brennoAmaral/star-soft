import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface IBagProduct extends IProduct {
  qty: number;
}
interface IBag {
  products: IBagProduct[];
  qtyProducts: number;
}

function calculetTotalProducts(products: IBagProduct[]) {
  return products.reduce((accumulator, product) => {
    return accumulator + product.qty;
  }, 0);
}
// Define the initial state using that type
const initialState: IBag = {
  products: [],
  qtyProducts: 0,
};

export const bagReducer = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      let products = state.products.map((product) => product);
      const product = action.payload;

      const isAlreadyInBag = products.some((p) => p.id === product.id);
      
      if (!isAlreadyInBag) {
        products.push({ ...product, qty: 1 });
        state.products=products
        state.qtyProducts = calculetTotalProducts(products)
        console.log(state);
        return;
      }
      state=state
    },
  },
});

export const bagActions = bagReducer.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter;

export default bagReducer.reducer;
