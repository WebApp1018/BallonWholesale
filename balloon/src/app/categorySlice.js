import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  category: null,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    }
  }
});

// Get All Categories
export const getCategoryAsync = () => async (dispatch) => {
  console.log("slice")
  try {
    const response = await axios.get(process.env.REACT_APP_API_BASE_URL + "api/product/category");
    dispatch(setCategory(response.data));
    console.log("response", response.data)
  } catch (err) {
    throw new Error(err);
  }
}

export const { setCategory } = categorySlice.actions;
export const showCategory = (state) => state.category.category;

export default categorySlice.reducer;