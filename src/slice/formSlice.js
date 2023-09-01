import { createSlice } from "@reduxjs/toolkit";


const formSlice = createSlice({
  name:'form',
  initialState: {
    form: false
  },

  reducers : {
    btnForm : (state)=> {
      state.form =!state.form;
    }
  }
})

export const {btnForm} = formSlice.actions
export default formSlice.reducer