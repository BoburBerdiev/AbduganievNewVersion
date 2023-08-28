import {configureStore} from "@reduxjs/toolkit";
import contactSlice from '@/slice/contactSlice'
import formSlice from "@/slice/formSlice";
export default configureStore({
  reducer:{contactSlice , formSlice  ,  devTools: process.env.NODE_ENV !== 'production'}
})