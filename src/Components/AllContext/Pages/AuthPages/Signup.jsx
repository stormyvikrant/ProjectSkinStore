import { Container, Box, useToast } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../../../features/useSlice'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../../features/useSlice'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
  Text,
  Heading,
} from '@chakra-ui/react'

const obj = {
  name: '',
  email: '',
  password: '',
  loggedIn: false,
}

export default function SignUp() {
  const [form, setForm] = useState(obj)
  // const {state,dispatch}=useContext(CartContext)
  // const [load,setLoad]=useState(false)
  // const [data,setData]=useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const toast = useToast()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    //      setLoad(!load)
  }

  // console.log(data)
  const submit1 = (e) => {
    e.preventDefault()
    // console.log(form)
    if (
      form.email == '' ||
      form.password == '' ||
      form.name == '' ||
      form === obj
    ) {
      toast({
        title: `Fill All Inputs`,
        position: 'top-right',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      })
    } else {
      toast({
        title: `Signup Successfully`,
        position: 'top-right',
        status: 'success',
        duration: 1000,
        isClosable: true,
      })
      dispatch(login(form))
      navigate('/login')
      // console.log(form)
    }
  }
  // console.log(form)
  return (
    <>
      {
        <Box w="100%" bg="gray.300" p="5">
          <form onSubmit={submit1}>
            <Container
              h="100%"
              mb="20"
              mt="30px"
              bg="red.50"
              boxShadow="lg"
              borderRadius="10"
              px="10"
              pt="5"
              pb="10"
            >
              <Heading mb="10px" textAlign={'center'}>
                Sign-up
              </Heading>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  borderRadius="10"
                  name="name"
                  bg="white"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                />
                <FormLabel>Email address</FormLabel>
                <Input
                  borderRadius="10"
                  name="email"
                  bg="white"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />

                <FormLabel>Password</FormLabel>
                <Input
                  borderRadius="10"
                  name="password"
                  bg="white"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                />
                <FormHelperText mb="5">
                  {' '}
                  Never Share Your Password
                </FormHelperText>

                <Input
                  style={{ cursor: 'pointer' }}
                  borderRadius="10"
                  mb="5"
                  bg="gray.700"
                  color="white"
                  type="submit"
                  name=""
                  id=""
                />
              </FormControl>
              <Link to="/login">
                Click here to <Text color="blue">Login ?</Text>{' '}
              </Link>
            </Container>
          </form>
        </Box>
      }
    </>
  )
}
