import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: 'contact' ,
  initialState: {
    contact: false
  },
  reducers: {
    btnContact: (state,{payload} ) =>{
      state.contact = payload
    }
  }
})



export const {btnContact} = contactSlice.actions
export default contactSlice.reducer

