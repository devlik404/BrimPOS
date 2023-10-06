import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";

export interface Product {
  // id: string;
  name: string,
  price: string
  category: string
}
interface ProductState {
    loading: boolean;
    product: Product[]; // Tetapkan tipe data elemen array
    error: string | undefined;
  }
  
const initialState: ProductState = {
  loading: false,
  product: [],
  error: undefined,
}
export const getProduct = createAsyncThunk("product/getUsers", async() => {
    try {
        const res = await axios.get('http://localhost:8000/product')
        console.table('getUsers',res.data)
        return res.data;
    } catch (error) {
        console.log('error bro ',error)
    }
    
  }
)
export const fetchProduct = createAsyncThunk("product/fetchUsers", async(newProduct: Product) => {
    try {
        const res = await axios.post('http://localhost:8000/product', newProduct)
        console.table('fetchUsers',res.data)
        return res.data;
    } catch (error) {
        console.log('error bro ',error)
    }

}
)
const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action: PayloadAction<Array<Product>>) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.loading = false;
      state.product = [];
      state.error = action.error.message;
    });

    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action: PayloadAction<Array<Product>>) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.product = [];
      state.error = action.error.message;
    });
  },
  reducers: {}
})
export const productSelector = (state: RootState) => state.productReducer;
export default productSlice.reducer;