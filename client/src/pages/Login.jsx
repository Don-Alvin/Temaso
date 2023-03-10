import { Box, Button, Card, CardHeader, Flex, Image, ListIcon, Text, Icon, CardBody, FormControl, FormLabel, Input, CardFooter } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Form, Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import toast, {Toaster} from 'react-hot-toast'
import { useFormik } from 'formik'
import { loginValidation } from '../helper/validate'
import { loginUser } from '../helper/hooks'

const Login = () => {

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues:{
      email: '',
      password: ''
    },
    validate: loginValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      const { email, password} = values
      let loginPromise = loginUser({email, password})
      toast.promise(loginPromise, {
        loading: 'Login in...',
        success: <b>Login successfull</b>,
        error: <b>Could not login user</b>
      })
      loginPromise.then(function(){navigate('/dashboard')})
    }
  })

  return (
    <div>
      <Toaster position='top-center'></Toaster>
      <Navbar />
      <Flex as='section' display='flex' justify='center' alignItems='center' position='relative' top='100px' left='0' right='0' gap={8}>
        <Card>
          <CardHeader>
            <Button display='flex' gap={4} alignContent='center' colorScheme='red'>
              <Icon as={FcGoogle} />
              <Text>Log in with Google</Text>
            </Button>
          </CardHeader>

          <CardBody>
            <Form method='post' onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel color='gray.500'>Enter your email</FormLabel>
                <Input type='text' name='name' {...formik.getFieldProps('email')}/>
              </FormControl>
              <FormControl mt='10px'>
                <FormLabel color='gray.500'>Enter your password</FormLabel>
                <Input type='password' name='password' {...formik.getFieldProps('password')} />
              </FormControl>
              <Button type='submit' mt='20px' w='100%' bg='brand.900' color='white' _hover={{bg:'teal.600'}}>
                Log in
              </Button>
            </Form>
          </CardBody>
          
          <CardFooter>
              <Text color='gray.500'>Don't have an account?
                <Text w='100%' as='span' color='brand.900'>
                  <Link to='/register'> Sign up</Link>
                </Text>
              </Text>
          </CardFooter>
          
        </Card>
      </Flex>
    </div>
  )
}

export default Login