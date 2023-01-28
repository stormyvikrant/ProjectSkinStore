import { CheckCircleIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Flex,
  Image,
  Text,
  Box,
  Circle,
  Heading,
  useToast,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import {
  decQuantity,
  deleteToCart,
  incQuantity,
} from "../Redux/cart/cart.actions";

const CartItem = ({ image_link, name, price, id, brand, quantity }) => {
  const toast = useToast();
  console.log(id);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    toast({
      position: "top-left",
      duration: 1200,
      render: () => (
        <Flex
          color="white"
          border="4px solid white"
          p={"10px"}
          bgColor="green.400"
        >
          <CheckCircleIcon w={30} h={30} />
          <Text size="lg" ml="15px">{`${name} has been deleted!!!`}</Text>
        </Flex>
      ),
    });

    dispatch(deleteToCart(id));
  };
  return (
    <Flex
      w="100%"
      justify="space-between"
      p="20px"
      borderBottom="1px solid gainsboro"
    >
      <Image display="block" src={image_link} w="100px" />
      <Box w="50%">
        <Text fontSize={"20px"} mb="20px">
          {name}
        </Text>
        <Text fontSize={"15px"} mb="20px">{`Brand: ${brand}`}</Text>
        <Box mb="20px">
          <Button
            disabled={quantity <= 1}
            onClick={() => dispatch(decQuantity(id))}
            bgColor="white"
            borderRadius="0px"
            border="1px solid black"
            mr="4px"
            size="xs"
          >
            -
          </Button>
          <Button bgColor="white" borderRadius="0px" border="0px" mr="4px">
            {quantity}
          </Button>
          <Button
            onClick={() => dispatch(incQuantity(id))}
            bgColor="white"
            borderRadius="0px"
            border="1px solid black"
            mr="4px"
            size="xs"
            p="5px"
          >
            +
          </Button>
        </Box>

        <Heading size="sm">{`$${price}`}</Heading>
      </Box>
      <Box position="relative">
        <Circle
          as="button"
          bgColor="#f1f1f1"
          display="flex"
          justifyContent="center"
          alignItem="center"
          w="30px"
          p={["1", "1", "2"]}
          onClick={() => handleDelete(id)}
        >
          <SmallCloseIcon
            boxSize="1em"
            display="flex"
            justifyContent="center"
            alignItem="center"
          />
        </Circle>
        <Heading
          fontSize="md"
          position="absolute"
          bottom="0px"
          right="10px"
        >{`Subtotal: ${quantity * price}`}</Heading>
      </Box>
    </Flex>
  );
};

export default CartItem;
