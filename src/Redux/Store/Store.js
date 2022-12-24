import { configureStore } from "@reduxjs/toolkit";
import SearchSliceReducer from "../Slices/SearchSlice";
const Store = configureStore({
    reducer:{
        SearchSliceReducer,
    }
})
export default Store