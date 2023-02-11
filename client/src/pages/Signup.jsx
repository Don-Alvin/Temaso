import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, FormControl, FormLabel, Image, Input, Text, Icon } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Form, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useFormik } from 'formik'
import { Toaster } from 'react-hot-toast'
import { registerValidation } from '../helper/validate'

const Signup = () => {
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
      console.log(values);
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
            <Form method='post' action='http://localhost:5000/api/signup' onSubmit={formik.handleSubmit}>
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
                <FormControl>
                  <FormLabel color='gray.500'>Confirm Password</FormLabel>
                  <Input 
                    type='password' 
                    name='confrimPassword'
                    {...formik.getFieldProps('confirm_password')}  
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