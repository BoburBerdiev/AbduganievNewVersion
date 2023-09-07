import { createSlice } from "@reduxjs/toolkit";


const formSlice = createSlice({
  name:'form',
  initialState: {
    form: false
  },

  reducers : {
    btnForm : (state,{payload})=> {
      state.form =payload;
    }
  }
})

export const {btnForm} = formSlice.actions
export default formSlice.reducer