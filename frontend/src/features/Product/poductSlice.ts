// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../../app/store";
// import axios from "axios";

// export interface Product {
//   // id: string;
//   name: string,
//   price: string
//   category: string
// }
// interface ProductState {
//     loading: boolean;
//     product: Product[]; // Tetapkan tipe data elemen array
//     error: string | undefined;
//   }
  
// const initialState: ProductState = {
//   loading: false,
//   product: [],
//   error: undefined,
// }
// export const getProduct = createAsyncThunk("product/getUsers", async() => {
//     try {
//         const res = await axios.get('http://localhost:8000/product')
//         console.table('getUsers',res.data)
//         return res.data;
//     } catch (error) {
//         console.log('error bro ',error)
//     }
    
//   }
// )
// export const fetchProduct = createAsyncThunk("product/fetchUsers", async(newProduct: Product) => {
//     try {
//         const res = await axios.post('http://localhost:8000/product', newProduct)
//         console.table('fetchUsers',res.data)
//         return res.data;
//     } catch (error) {
//         console.log('error bro ',error)
//     }

// }
// )
// const productSlice = createSlice({
//   name: 'product',
//   initialState,
//   extraReducers: (builder) => {
//     builder.addCase(getProduct.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(getProduct.fulfilled, (state, action: PayloadAction<Array<Product>>) => {
//       state.loading = false;
//       state.product = action.payload;
//     });
//     builder.addCase(getProduct.rejected, (state, action) => {
//       state.loading = false;
//       state.product = [];
//       state.error = action.error.message;
//     });

//     builder.addCase(fetchProduct.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(fetchProduct.fulfilled, (state, action: PayloadAction<Array<Product>>) => {
//       state.loading = false;
//       state.product = action.payload;
//     });
//     builder.addCase(fetchProduct.rejected, (state, action) => {
//       state.loading = false;
//       state.product = [];
//       state.error = action.error.message;
//     });
//   },
//   reducers: {}
// })
// export const productSelector = (state: RootState) => state.productReducer;
// export default productSlice.reducer;








import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";
import { RootState } from "../../app/store";
import { ApiData } from "../../hooks/api";
import axios from "axios";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: Blob | MediaSource | string;
}

export interface ProductState {
  loading: boolean;
  products: Product[];
  error: string | null;
}

const initialState: ProductState = {
  loading: false,
  products: [],
  error: null,
};

export const getProduct = createAsyncThunk("product/getUsers", async() => {
      try {
          const res = await ApiData.get('/product')
          console.table('getUsers',res.data)
          return res.data;
      } catch (error) {
          console.log('error bro ',error)
      }
    })

export const fetchProduct = createAsyncThunk("product/fetchUsers", async(newProduct: Product) => {
    try {
        const res = await axios.post('http://localhost:4000/api/v1/product', newProduct)
        console.table('fetchUsers',res.data)
        return res.data;
    } catch (error) {
        console.log('error bro ',error)
    }
})

export const editProduct = createAsyncThunk("product/editProduct", async ({ id, newProduct }: { id: string, newProduct: Product }) => {
  try {
    const res = await ApiData.put(`/updateproduct/${id}`, newProduct);
    console.table('editProduct', res.data);
    return res.data;
  } catch (error) {
   console.log('error bro ',error)
  }
});

export const deleteProduct = createAsyncThunk('product/deleteProduct', async (id : string) => {
    try {
      const res = await ApiData.delete(`/deleteproduct/${id}`)
      return res.data
    } catch (error) {
      console.log('error bro ',error)
    }
})


const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProduct.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products.";
      })

      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products.";
      })

      .addCase(deleteProduct.pending , (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state,action : PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products.";
      })
      .addCase(editProduct.pending , (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editProduct.fulfilled, (state,action : PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products.";
      });

  },
});

export const productSelector = (state: RootState) => state.productReducer;
export default productSlice.reducer;
