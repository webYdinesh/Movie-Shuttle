import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        searchValue:""
    },
    reducers:{
        getSearch:(state,action)=>{
            state.searchValue = action.payload
        }
    }
})

export default searchSlice.reducer
export const {getSearch} = searchSlice.actions