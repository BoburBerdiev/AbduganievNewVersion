import {configureStore} from "@reduxjs/toolkit";
import contactSlice from '@/slice/contactSlice'
import formSlice from "@/slice/formSlice";
import LanguageSlice from "@/slice/LanguageSlice";

export default configureStore({
  reducer:{contactSlice , formSlice ,LanguageSlice  ,  devTools: process.env.NODE_ENV !== 'production'}
})