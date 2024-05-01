import { createSlice } from '@reduxjs/toolkit';
import productsData from '../data/products.json';

const initialState = {
  items: productsData,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
