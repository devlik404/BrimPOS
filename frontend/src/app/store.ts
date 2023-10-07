import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice'
import productReducer from '../features/Product/poductSlice'
export const store = configureStore({
  reducer: {
    userReducer,
    productReducer
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;