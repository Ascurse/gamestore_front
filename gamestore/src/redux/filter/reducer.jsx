import { createSlice } from '@reduxjs/toolkit'

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    currentCategory: null
  },
  reducers: {
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload
    },
  }
});

export const { setCurrentCategory } = categorySlice.actions;
export default categorySlice.reducer;