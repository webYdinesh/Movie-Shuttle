import React from "react";
import "./Header.css";
import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Search from "../Search/Search";

const Header = () => {
  return (
    <header className="container flex">
      <div className="left-side-navbar flex">
        <div className="logo">
          <a href="/">
            <img
              src="https://i.postimg.cc/W1XrxyQ9/Moviecropped1.png"
              alt="logo"
            />
          </a>
        </div>
        <nav>
          <ul className="flex">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/popularshow"}>Popular Shows</NavLink>
            </li>
            <li>
              <NavLink to={"/upcoming"}>Upcoming</NavLink>
            </li>
            <li>
              <NavLink to={"/trending"}>Trending</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="search-field flex">
       <Search/>

        <div className="button-container flex">
          <Button
            background="#5d15f5"
            color="#fff"
            _hover={{
              background: "transparent",

              border: "1px solid #5d15f5",
            }}
            variant="solid"
            fontSize={"1.6rem"}
            fontWeight={"500"}
            p={"1.8rem"}
            border={"1px solid #5d15f5"}
          >
            Sign Up
          </Button>
          <Button
            background="transparent"
            color="#fff"
            _hover={{
              background: "#5d15f5",

              border: "1px solid #5d15f5",
            }}
            variant="solid"
            fontSize={"1.6rem"}
            fontWeight={"500"}
            p={"1.8rem"}
            border={"1px solid #5d15f5"}
          >
            Log In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
