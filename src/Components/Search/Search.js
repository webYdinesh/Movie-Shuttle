import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { getSearch } from "../../Redux/Slices/SearchSlice";

const Search = () => {
    const [searchValue , setSearchValue]= useState("")
    const searchQuery =  useSelector(state=>state.SearchSliceReducer.searchValue)
    const dispatch = useDispatch()
    const navegate = useNavigate()
    const searchHandler =(e)=>{

        e.preventDefault()
dispatch(getSearch(searchValue))
console.log(searchQuery)
        navegate('/search')

    }
  return (
    <>
<form onSubmit={searchHandler}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Type Your Movie..."
        autoComplete="off"
        value={searchValue}
        onChange={(e)=> setSearchValue(e.target.value)}
      />
      <FaSearch id="icon" />
    </form>

  
   
    </>
  );
};

export default Search;

