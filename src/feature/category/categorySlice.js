import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: "now_playing",
}

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { changeCategory } = categorySlice.actions

export default categorySlice.reducer
