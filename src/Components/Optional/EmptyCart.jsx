import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Pages/Footer";

const EmptyCart = () => {
  return (
    <Box w={["col", "col", "row"]} mb={8}>
      <Box w={["90%", "85%", "80%"]} m="auto">
        <Heading
          textAlign={["center", "left", "left"]}
          as="h4"
          fontFamily={"sans-serif"}
          fontWeight="normal"
          mt={8}
          borderBottom="1px solid black"
          pb={4}
        >
          Your Cart
        </Heading>
        <Box>
          <Heading as="h5" fontFamily={"sans-serif"} fontWeight="normal" mt={8}>
            There are currently no items in your cart.
          </Heading>
          <Link to="/skin">
            <Button
              mt="6"
              color={"white"}
              fontWeight="normal"
              bgColor="black"
              borderRadius="none"

            >
              CONTINUE SHOPPING
            </Button>
          </Link>
        </Box>

        <SimpleGrid
          columns={[1, 2, 2, 3]}
          spacing="40px"
          mt={12}
          textAlign={"left"}
          fontSize="20px"
        >
          <Box>
            <Image
              src="https://s1.thcdn.com/widgets/121-us/53/Skincare-041053.jpg"
              alt="skincare"
            />
            <Text mt={4}>Skin Care</Text>
          </Box>
          <Box>
            <Image
              src="https://s1.thcdn.com/widgets/121-us/30/580x580-125830.jpg"
              alt="Hair Care"
            />
            <Text mt={4}>Hair Care</Text>
          </Box>
          <Box>
            <Image
              src="https://s1.thcdn.com/widgets/121-us/17/original-NF_PROD_SpringPromo22-Mini_Hero_01-102717.jpg"
              alt="Tools"
            />
            <Text mt={4}>Tools</Text>
          </Box>
          <Box>
            <Image
              src="https://s1.thcdn.com/widgets/121-us/16/Makeup-041316.jpg"
              alt="Makueup"
            />
            <Text mt={4}>Make Up</Text>
          </Box>
          <Box>
            <Image
              src="https://s1.thcdn.com/widgets/121-us/32/Body-041332.jpg"
              alt="bath & body"
            />
            <Text mt={4}>Bath & Body</Text>
          </Box>
          <Box>
            <Image
              src="https://s1.thcdn.com/widgets/121-us/49/Wellness-041349.png"
              alt="Wellness"
            />
            <Text mt={4}>Wellness</Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </Box>
  );
};

export default EmptyCart;
