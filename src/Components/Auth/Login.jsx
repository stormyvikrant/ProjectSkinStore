import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Text, FormControl, FormLabel, Heading, Input, useToast, Icon, IconButton } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"
import { userLogin, userLogout } from '../Redux/auth/auth.actions'
let intdata = {
    email: "",
    password: ""
}


const Login = () => {
    const [data, setData] = useState(intdata);
    const existingData = useSelector((state) => state.authManager.userdata)
    const dispatch = useDispatch()
    const toast = useToast();
    const isAuth = useSelector((state) => state.authManager.isAuth)
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.email !== existingData.email || data.password !== existingData.password) {
            toast({
                position: 'top-left',

                render: () => (
                    <Flex color='white' border="4px solid white" p={"10px"} bgColor='red'>

                        <WarningIcon w={30} h={30} /><Text size="lg" ml="15px">Incorrect email or password</Text>
                    </Flex >

                ),
            })
        } else {
            toast({
                position: 'top-left',
                render: () => (
                    <Flex color='white' border="4px solid white" p={"10px"} bgColor='green.400'>

                        <CheckCircleIcon w={30} h={30} /><Text size="lg" ml="15px">Signed In Successfully!!!</Text>
                    </Flex >

                ),
            })
            dispatch(userLogin());
            navigate("/")


        }

        setData(intdata)

    }
    const handleChange = (e) => {
        const { type, value } = e.target;
        setData({ ...data, [type]: value })

    }
    const handleLogOut = () => {
        if (!isAuth) {
            toast({
                position: 'top-left',

                duration: 1200,

                render: () => (
                    <Flex color='white' border="4px solid white" p={"10px"} bgColor='red'>

                        <WarningIcon w={30} h={30} /><Text size="lg" ml="15px">You have not Signed in yet!!!</Text>
                    </Flex >
                ),
            })

        } else {

            toast({
                position: 'top-left',
                duration: 1200,
                render: () => (
                    <Flex color='white' border="4px solid white" p={"10px"} bgColor='green.400'>

                        <CheckCircleIcon w={30} h={30} /><Text size="lg" ml="15px">You have not Signed Out Successfully!!!</Text>
                    </Flex >
                ),
            })
            dispatch(userLogout())
        }



    }
    return (
        <>
            <Box bgColor="#f5f5f5" pb="50px" mt={["12","12","12","12","auto"]}>
                <Flex w={["90%", "70%", "70%"]} m="auto" direction={["column", "column", "row"]} justify="space-between">
                    <Box w={["100%", "100%", "45%"]} mt="30px" p="25px" bgColor={"white"}>
                        <Heading size="lg" mb="30px">Existing Customers</Heading>
                        <form onSubmit={handleSubmit}>

                            <FormControl>
                                <FormLabel >*Email address</FormLabel>
                                <Input value={data.email} h="50px" border="1px solid black" onChange={handleChange} mb="30px" isRequired type='email' />
                                <FormLabel>*Password</FormLabel>
                                <Input value={data.password} h="50px" border="1px solid black" onChange={handleChange} mb="30px" isRequired type='password' />

                            </FormControl>
                            <Link to="/admin-login">
                                <Text as="u" color="red" >Do you have an admin account?</Text>
                            </Link>
                            <Button w="100%" color="white" mt="20px" borderRadius="0px" bgColor="black" _hover={{ bgColor: "#28bdb7", color: "black" }} type="submit">SIGN-IN</Button>

                        </form>


                    </Box>
                    <Box w={["100%", "100%", "45%"]} mt="30px" p="25px" h="300px" bgColor="white">
                        <Heading size="lg" mb="30px">Existing Customers</Heading>
                        <Link to="/signup">
                            <Button w="100%" color="black" mb="20px" mt="20px" borderRadius="0px" border="1px solid black" bgColor="white" _hover={{ bgColor: "#28bdb7", color: "black" }} type="submit">REGISTER</Button>
                        </Link>
                        <Button w="100%" onClick={handleLogOut} color="black" mt="20px" borderRadius="0px" border="2px solid #28bdb7" bgColor="white" _hover={{ bgColor: "red", color: "white" }} type="submit">SIGN-OUT</Button>



                    </Box>

                </Flex>
            </Box>
        </>
    )
}

export default Login