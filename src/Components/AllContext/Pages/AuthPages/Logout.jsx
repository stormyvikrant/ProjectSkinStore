import { Box, Heading,Button,useToast } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../../features/useSlice';
import {selectUser} from "../../../../features/useSlice";


const Logout = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const toast = useToast()

    const handleLogout=()=>{
        toast({
            title: `Logout Successfully`,
            position: 'top-right',
            status:'success',
            duration: 2000,
            isClosable: true,
          })
        dispatch(logout())
    }

  return (
    <Box>


    {
        user.loggedIn && <> <Heading as='h6' size='xs'>
        Welcome <span>{user.name.toUpperCase()}</span>
        </Heading>
        <Button onClick={handleLogout}>Logout</Button></>
    }
   

    </Box>
  )
}

export default Logout