import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, FormControl, FormLabel, Image, Input, Text, Icon } from '@chakra-ui/react'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Form, Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useFormik } from 'formik'
import toast, { Toaster } from 'react-hot-toast'
import { registerValidation } from '../helper/validate'
import { useAuthStore } from '../store/store.js'
import { registerUser } from '../helper/hooks'

const Signup = () => {
  const navigate = useNavigate()
  const setUsername = useAuthStore((state) => state.setUsername)

  const formik = useFormik({
    initialValues :{
      email: '',
      username: '',
      password: '',
      confirm_password:''
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values)
      setUsername(values.username)
      let registerPromise = registerUser(values)
      toast.promise(registerPromise, {
        loading: 'Creating...',
        success: <b>Registration successfull</b>,
        error: <b>Could not register</b>
      })
      registerPromise.then(function(){navigate('/login')})
    }
  })

  return (
    <div>
      <Toaster position='top-center'></Toaster>
      <Navbar />
      <Flex as='section' display='flex' justify='center' alignContent='center' position='relative' top='100px' left='0' right='0' gap={8}>
        <Card display='flex' flexDirection='column' alignItems='center'>
          <CardHeader>
            <Button display='flex' gap={4} alignItems='center'  colorScheme='red'>
              <Icon as={FcGoogle} />
              <Text>Sign up with Google</Text>
            </Button>
          </CardHeader>

          <CardBody>
            <Form onSubmit={formik.handleSubmit}>
              <Box display={{lg: 'flex'}} alignItems='center' gap={4} mb='20px'>
                <FormControl>
                  <FormLabel color='gray.500'>Enter your email</FormLabel>
                  <Input 
                    type='email' 
                    name='email'
                    {...formik.getFieldProps('email')} 
                  />
                </FormControl>
                <FormControl>
                  <FormLabel color='gray.500'>Enter Username</FormLabel>
                  <Input 
                    type='text' 
                    name='username'
                    {...formik.getFieldProps('username')}  
                  />
                </FormControl>
              </Box>
              <Box display={{lg: 'flex'}} alignItems='center' gap={4}>
                <FormControl>
                  <FormLabel color='gray.500'>Enter your password</FormLabel>
                  <Input 
                    type='password' 
                    name='password'
                    {...formik.getFieldProps('password')}  
                    />
                </FormControl>
              </Box>
              <Button type='submit' mt='20px' w='100%' bg='brand.900' color='white' _hover={{bg:'teal.600'}}>
                Get Started
              </Button>
            </Form>
          </CardBody>
          
          <CardFooter>
              <Text color='gray.500'>Already have an account? 
                <Text as='span' color='brand.900'>
                  <Link to='/login'> Log in</Link>
                </Text>
              </Text>
          </CardFooter>
          
        </Card>
      </Flex>
    </div>
  )
}

export default Signup