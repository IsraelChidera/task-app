import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    increment: (state) => {   
      state.value = true;
    },
  },
})

export const { increment } = todoSlice.actions

export default todoSlice.reducer