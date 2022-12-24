import React from "react";
import { Skeleton, VStack } from "@chakra-ui/react";

const Loader = ({ quantity }) => {
  const cardArray = [];
  cardArray.length = quantity;

  return cardArray.fill(
    <>
      <VStack
        width="260px"
        pb={"2rem"}
        border="1px solid #5d15f5"
        borderRadius={"0rem 1.5rem 0rem 1.5rem"}
        gap={"5px"}
      >
        <Skeleton
          width={"258px"}
          height="300px"
          borderRadius={"0rem 1.5rem 0rem 0rem"}
          mb={4}
        />
        <Skeleton height="30px" w={"70%"} borderRadius={"3px"} />
        <Skeleton height="30px" w={"60%"} borderRadius={"3px"} />
      </VStack>
    </>
  );
};

export default Loader;
