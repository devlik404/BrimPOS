import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";

export interface User {
  // id: string;
  name: string,
  price: string
  category: string
}
export interface UserState {
  loading: boolean;
  users: Array<User>;
  error: string | undefined;
}
const initialState: UserState = {
  loading: false,
  users: [],
  error: undefined,
}
export const getUsers = createAsyncThunk("users/getUsers", async() => {
    const res = await axios.get('http://localhost:8000/product')
    console.table('getUsers',res.data)
    return res.data;
  }
)
export const fetchUsers = createAsyncThunk("users/fetchUsers", async(newUser: User) => {
  const res = await axios.post('http://localhost:8000/product', newUser)
  console.table('fetchUsers',res.data)
  return res.data;
}
)
const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action: PayloadAction<Array<User>>) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });

    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<Array<User>>) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
  reducers: {}
})
export const userSelector = (state: RootState) => state.userReducer;
export default userSlice.reducer;