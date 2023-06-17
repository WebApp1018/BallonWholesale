import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: null,
  product_by_category: null,
  product_by_code: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setProductByCategory: (state, action) => {
      state.product_by_category = action.payload;
    },
    setProductByCode: (state, action) => {
      state.product_by_code = action.payload;
    },
  },
});

// Get All Products
export const getProdcutAsync = () => async (dispatch) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_API_BASE_URL + "api/product"
    );
    dispatch(setProduct(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

// Get Products By category
export const getProdcutByCategoryAsync = (category) => async (dispatch) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_API_BASE_URL +
        "api/product/get_product_by_category/" +
        category
    );
    dispatch(setProductByCategory(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

// Get Product By code
export const getProdcutByCodeAsync = (code) => async (dispatch) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_API_BASE_URL +
        "api/product/get_product_by_code/" +
        code
    );
    dispatch(setProductByCode(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const { setProduct, setProductByCategory, setProductByCode } =
  productSlice.actions;
export const showProduct = (state) => state.product.product;
export const showProductByCategory = (state) =>
  state.product.product_by_category;
export const showProductByCode = (state) => state.product.product_by_code;

export default productSlice.reducer;
