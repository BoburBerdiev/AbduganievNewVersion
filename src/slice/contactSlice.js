import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: 'contact' ,
  initialState: {
    contact: true
  },
  reducers: {
    btnContact: (state ) =>{
      state.contact = !state.contact
      console.log(state.contact);
    }
  }
})



export const {btnContact} = contactSlice.actions
export default contactSlice.reducer

