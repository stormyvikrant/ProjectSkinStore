import {
  Text,
  Box,
  Container,
  Input,
  Heading,
  useToast,
  Button,
  Spacer,
} from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../../../features/useSlice'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../../features/useSlice'
import Home from '../Home'

let obj = {
  email: '',
  password: '',
}
// export function ToastExample() {
//     const toast = useToast()

//     return (
//       <Button
//         onClick={() =>
//           toast({
//             title: 'Account created.',
//             description: "We've created your account for you.",
//             status: 'success',
//             duration: 9000,
//             isClosable: true,
//           })
//         }
//       >
//         Show Toast
//       </Button>
//     )
//   }

export default function Login() {
  const [form, setForm] = useState(obj)

  const user = useSelector(selectUser)

  const toast = useToast()

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const submit1 = (e) => {
    e.preventDefault()
    // console.log(form)
    if (user === null) {
      toast({
        title: `Your Enterd Credentials Not Matching With Our Database, You Have To Signup `,
        position: 'top-right',
        status: 'warning',
        duration: 2000,

        isClosable: true,
      })
    } else if (form.email == '' || form.password == '' || form === obj) {
      toast({
        title: `Fill All Inputs`,
        position: 'top-right',
        status: 'warning',
        duration: 2000,

        isClosable: true,
      })
    } else {
      if (form.password === user.password && form.email === user.email) {
        dispatch(login({ ...user, ['loggedIn']: true }))
        toast({
          title: `Login Successfully`,
          position: 'top-right',
          status: 'success',
          duration: 2000,

          isClosable: true,
        })
      } else {
        toast({
          title: `Invalid Credentials`,
          position: 'top-right',
          status: 'error',
          duration: 2000,

          isClosable: true,
        })
      }
    }
  }

  // console.log("login",user)

  return (
    <>
      {user && user.loggedIn ? (
        <Home />
      ) : (
        <Box w="100%" p="10" bg="gray.300">
          <Container
            h="100%"
            mb="20px"
            mt="50px"
            textAlign={'center'}
            bg="blue.50"
            p="10"
            boxShadow="lg"
            borderRadius="10"
          >
            <Heading mb="20px">Login</Heading>
            <form onSubmit={submit1}>
              <Input
              borderRadius="10"
                placeholder="Email..."
                value={form.email}
                type="email"
                name="email"
                bg="white"
                mb="6"
                onChange={handleChange}
              ></Input>

              <Input
              borderRadius="10"

                type="password"
                bg="white"
                value={form.password}
                name="password"
                placeholder="Password..."
                onChange={handleChange}
              ></Input>

              <Input
              borderRadius="10"

                style={{ cursor: 'pointer' }}
                mt="20px"
                bg="gray.700"
                color="white"
                boxShadow="md"
                type="submit"

              ></Input>
            </form>
            <Container>
              OR <br />
              Create new account{' '}
              <Link to="/signup">
                <Text color="blue">Signup</Text>{' '}
              </Link>
            </Container>
          </Container>
        </Box>
      )}
    </>
  )
}
