import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  compareProduct: [],
  isPopupOpen: false,
};

export const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    // add all product
    addProduct: (state, action) => {
      state.productData = action.payload;
    },
    // add compare product
    addCompareProduct: (state, action) => {
      state.compareProduct.push(action.payload);
    },
    // remove compare product
    removeCompareProduct: (state, action) => {
      state.compareProduct = state.compareProduct.filter(
        (product) => product.id !== action.payload
      );
    },
    // create a new contact
    createProduct: (state, action) => {
      state.productData.push(action.payload);
      console.log(state.productData);
    },
  },
});

export const {
  addProduct,
  addCompareProduct,
  removeCompareProduct,
  createProduct,
} = detailsSlice.actions;

export default detailsSlice.reducer;
