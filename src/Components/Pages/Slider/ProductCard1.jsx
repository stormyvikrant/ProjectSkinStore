import React from "react";
// import { Card, Button } from "react-bootstrap";
import { Box, Button, Card, CardBody, CardFooter, Divider, Image, Stack, Text } from '@chakra-ui/react'
const ProductCard1 = props => {
  return (
    <>
<Card maxW='sm'>
  <CardBody>
    <Image
      src={props.imgSrc}
      alt='images'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Text size='md'textAlign={"left"}>{props.productdetail}</Text>
    <Box border="1px solid red" w={"70%"} mt={2} fontSize={"sm"}>{props.discountmessage}</Box>
      <Text  fontSize='xl' textAlign={"left"}>
        {props.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
      <Button variant='solid' bg='black' color={"white"} w={"98%"}>
       Quick Buy
      </Button>
   

  </CardFooter>
</Card>





    </>
  );
};

export default ProductCard1;
