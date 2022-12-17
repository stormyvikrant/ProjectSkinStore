import { Stack, HStack, VStack } from '@chakra-ui/react'

import './App.css';
import React, { useEffect, useState } from 'react'
import { Box, Heading, Input } from '@chakra-ui/react'


export const Post = () => { 
 const [name,setName]=useState("");
 const [link,setLink]=useState("");
  const [price, setPrice] = useState("");
  const [des,setDes]=useState("");
function saveData()
{
  let data = { name, link, price,des }
  
  
// url .............................................. fetch url
//       ||
//       \/
  
  fetch("url", {  //url

    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((res)=>{
    res.json().then((data)=>{
      console.log("data",data)
    })
  })
}
  
  
  return (
    <Box >
      <Heading size='lg' fontSize='50px'>
Product Details
      </Heading>
      <VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={4}
  align='stretch'
></VStack>
      
      <Box  h='40px'>
        <Input type="text" name="name" placeholder='Product Name'  value={name} onChange={(e) => { setName(e.target.value) }} /> <br /> <br />
        </Box>
      <Box  h='40px'>
      <Input type="text" name="link" placeholder='Product Link' value={link} onChange={(e) => { setLink(e.target.value) }} /> <br /> <br />
      </Box>
      <Box  h='40px'> 
      <Input type="number" name="price" placeholder='Product Price'  value={price} onChange={(e)=>{setPrice(e.target.value)}}/> <br /> <br />
      </Box>
      <Box  h='40px'>
      <Input type="text" name="des" placeholder='Product Description'  value={des} onChange={(e)=>{setDes(e.target.value)}}/> <br /> <br />
      </Box>
      <Box h='40px'>
        <Button type="button" onClick={saveData} >Chalo Var dia</Button>
         </Box>
    </Box>
  );
}
