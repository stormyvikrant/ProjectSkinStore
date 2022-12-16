import React from "react";
// import { Card, Button } from "react-bootstrap";
import { Box, Button, Card, CardBody, CardFooter, Divider, Image, Stack, Text } from '@chakra-ui/react';
import { Link } from "react-router-dom"
const BrandCard = props => {
  return (
    <>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src={props.imgSrc}
            alt='images'

          />
          <Stack mt='6' spacing='3'>
            <Text size='md' textAlign={"left"}>{props.productdetail}</Text>
            <Box border="1px solid red" p="2px" mt={2} fontSize={"sm"}>{props.discountmessage}</Box>
            <Text fontSize='xl' textAlign={"left"}>
              {props.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Box w="100%" m="auto" >
            <Link to="/skin">
              <Button _hover={{ bgColor: "#28bdb7", color: "black" }} bg='black' borderRadius="0px" display="block" m="auto" w={"100%"} color={"white"}>
                See More
              </Button>
            </Link>
          </Box>


        </CardFooter>
      </Card>





    </>
  );
};

export default BrandCard;
