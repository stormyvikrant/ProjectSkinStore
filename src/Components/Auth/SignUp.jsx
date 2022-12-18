import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Text, FormControl, FormLabel, Heading, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userSignUp } from '../Redux/auth/auth.actions';
let intdata = {
    email: "",
    password: "",
    username: "",
}

const SignUp = () => {
    const [data, setData] = useState(intdata);
    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate()

    const handleSubmit = (e) => {

        e.preventDefault();

        toast({
            position: 'top-left',
            render: () => (
                <Flex color='white' border="4px solid white" p={"10px"} bgColor='green.400'>

                    <CheckCircleIcon w={30} h={30} /><Text size="lg" ml="15px">Signed Up Successfully!!!</Text>
                </Flex >

            ),
        })
        dispatch(userSignUp(data))

        setData(intdata);
        navigate("/login")

    }
    const handleChange = (e) => {
        console.log(1)
        const { name, value } = e.target;
        setData({ ...data, [name]: value })

    }
    return (
        <Box bgColor="#f5f5f5" pt="50px" pb="50px" mt={["12","12","12","12","auto"]}>

            <Box w={["90%", "50", "40%"]} m="auto" p="25px" bgColor={"white"}>
                <Heading size="lg" mb="30px">Existing Customers</Heading>
                <form onSubmit={handleSubmit}>

                    <FormControl>
                        <FormLabel >*Your Name</FormLabel>
                        <Input h="50px" onChange={handleChange} value={data.username} border="1px solid black" name="username" mb="30px" />
                        <FormLabel >*Email address</FormLabel>
                        <Input value={data.email} h="50px" border="1px solid black" onChange={handleChange} mb="30px" isRequired name="email" type='email' />
                        <FormLabel>*Password</FormLabel>
                        <Input value={data.password} h="50px" border="1px solid black" onChange={handleChange} mb="30px" name="password" isRequired type='password' />

                    </FormControl>
                    <Text color="black" as="u" >Do you have a raferral code?</Text>
                    <Button w="100%" color="white" mt="20px" borderRadius="0px" bgColor="black" _hover={{ bgColor: "#28bdb7", color: "black" }} type="submit">Sign Up</Button>

                </form>


            </Box>


        </Box>

    )
}

export default SignUp