import React, { useState } from 'react'
import { Box, Button, Flex, Text, FormControl, FormLabel, Heading, Input, useToast, Icon, IconButton } from '@chakra-ui/react'
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons'
import { useDispatch } from 'react-redux'
import { adminLogin } from '../Redux/auth/auth.actions'
import { useNavigate } from 'react-router-dom'
let intdata = {
  email: "",
  password: ""
}
const AdminLogin = () => {
  const [data, setData] = useState(intdata);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.email !== "priyank@admin.gmail.com" && data.password !== "admin123") {
      toast({
        position: 'top-left',

        render: () => (
          <Flex color='white' border="4px solid white" p={"10px"} bgColor='red'>

            <WarningIcon w={30} h={30} /><Text size="lg" ml="15px">It is not an admin credentials</Text>
          </Flex >

        ),
      })

    } else {
      toast({
        position: 'top-left',
        render: () => (
          <Flex color='white' border="4px solid white" p={"10px"} bgColor='green.400'>

            <CheckCircleIcon w={30} h={30} /><Text size="lg" ml="15px">Welcome admin Priyank</Text>
          </Flex >

        ),
      })
      dispatch(adminLogin());
      navigate("/admin")


    }
    setData(intdata)
  };
  const handleChange = (e) => {
    const { type, value } = e.target;
    setData({ ...data, [type]: value })
    console.log(data)
  }
  return (
    <Box p="30px" >
      <Box w={["95%", "95%", "30%"]} shadow="2xl" mt="30px" m="auto" p="25px" bgColor={"white"}>
        <Heading size="lg" mb="30px">Admin Account Login</Heading>
        <form onSubmit={handleSubmit}>

          <FormControl>
            <FormLabel >*Email address</FormLabel>
            <Input value={data.email} h="50px" border="1px solid black" onChange={handleChange} mb="30px" isRequired type='email' />
            <FormLabel>*Password</FormLabel>
            <Input value={data.password} h="50px" border="1px solid black" onChange={handleChange} mb="30px" isRequired type='password' />

          </FormControl>
          <Text color="black" as="u" >FORGOTTEN YOUR PASSWORD?</Text>
          <Button w="100%" color="white" mt="20px" borderRadius="0px" bgColor="black" _hover={{ bgColor: "#28bdb7", color: "black" }} type="submit">SIGN-IN</Button>

        </form>


      </Box>
    </Box>


  )
}

export default AdminLogin