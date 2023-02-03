import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, FormControl, FormLabel, Image, Input, Text, Icon } from '@chakra-ui/react'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Form, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Signup = () => {
  return (
    <div>
      <Navbar />
      <Flex as='section' display='flex' justify='center' alignContent='center' position='relative' top='100px' left='0' right='0' gap={8}>
        <Card>
          <CardHeader>
            <Button display='flex' gap={4} alignContent='center' colorScheme='red'>
              <Icon as={FcGoogle} />
              <Text>Sign up with Google</Text>
            </Button>
          </CardHeader>

          <CardBody>
            <Form>
              <Box display={{lg: 'flex'}} alignItems='center' gap={4} mb='20px'>
                <FormControl>
                  <FormLabel color='gray.500'>Enter your email</FormLabel>
                  <Input type='email' name='email' />
                </FormControl>
                <FormControl>
                  <FormLabel color='gray.500'>Enter Username</FormLabel>
                  <Input type='text' name='name' />
                </FormControl>
              </Box>
              <Box display={{lg: 'flex'}} alignItems='center' gap={4}>
                <FormControl>
                  <FormLabel color='gray.500'>Enter your password</FormLabel>
                  <Input type='password' name='password' />
                </FormControl>
                <FormControl>
                  <FormLabel color='gray.500'>Confrim Password</FormLabel>
                  <Input type='password' name='confrimPassword' />
                </FormControl>
              </Box>
              <Button type='submit' mt='20px' w='100%' bg='brand.900' color='white' colorScheme='brand.700'>
                <Link to='dashboard'>Sign up</Link>
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