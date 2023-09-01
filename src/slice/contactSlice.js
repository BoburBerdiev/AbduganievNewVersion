import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: 'contact' ,
  initialState: {
    contact: false
  },
  reducers: {
    btnContact: (state ) =>{
      state.contact = !state.contact
    }
  }
})



export const {btnContact} = contactSlice.actions
export default contactSlice.reducer
