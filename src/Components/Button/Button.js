import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "./Button.css"
const Button = ({increment,incrementHandler,decrementHandler}) => {

  return (
    <>
    <div className="button-group">
      <button onClick={()=>decrementHandler()}>
        <ChevronLeftIcon h={20} w={20}/>
      </button>
     <span>{`${increment}/50`}</span>
      <button onClick={()=>incrementHandler()}>
        <ChevronRightIcon h={20} w={20}/>
      </button>

    </div>
    </>
  );
};

export default Button;
