import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import bagActionAddProduct from "./actions/bag-action-add-product";
import bagActionDecreaseProduct from "./actions/bag-action-decrease-product";
import bagActionIncreaseProduct from "./actions/bag-action-increase-product";
import bagActionRemoveProduct from "./actions/bag-action-remove-product";
import { IBag } from "./type-bag-controller";




const initialState: IBag = {
  products: [],
  qtyProducts: 0,
};

export const bagReducer = createSlice({
  name: "bag-reducer",
  initialState,
  reducers: {
    addProduct: (state, product: PayloadAction<IProduct>)=>{
      bagActionAddProduct(product.payload, state)
    },
    removeProductById: (state, id: PayloadAction<number>)=>{
      bagActionRemoveProduct(id.payload, state)
    },
    increaseQtyProduct:(state, id: PayloadAction<number>)=>{
      bagActionIncreaseProduct(state, id.payload)
    },
    decreaseQtyProduct:(state, id: PayloadAction<number>)=>{
      bagActionDecreaseProduct(state, id.payload)
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

export default bagReducer.reducer;
