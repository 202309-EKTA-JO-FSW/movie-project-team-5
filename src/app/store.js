import { configureStore } from "@reduxjs/toolkit"
import categoryReducer from "@/feature/category/categorySlice"

export const store = configureStore({
  reducer: {
    // if curious from where the categoryReducer came from
    // name like this just to explain that we geting the reducer but in actual is returning categorySlice.reducer
    category: categoryReducer,
  },
})
