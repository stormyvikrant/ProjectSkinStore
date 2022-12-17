import { WarningIcon } from '@chakra-ui/icons';
import { Flex, useToast, Text } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    let isAuth = useSelector((state) => state.authManager.isAuth);

    const toast = useToast()
    console.log(isAuth)
    if (isAuth) {
        return children
    } else {
        toast({
            position: 'top-left',

            render: () => (
                <Flex color='white' border="4px solid white" p={"10px"} bgColor='red'>

                    <WarningIcon w={30} h={30} /><Text size="lg" ml="15px">Signed In Required</Text>
                </Flex >

            ),
        })
        return <Navigate to="/login" />
    }

}

export default PrivateRoute