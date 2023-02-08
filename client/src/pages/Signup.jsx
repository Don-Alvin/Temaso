import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, FormControl, FormLabel, Image, Input, Text, Icon } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Form, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isValid, setIsValid] = useState(false)


  const submitHandler = (event) => {
    event.preventDefault()
    if(confirmPassword !== password) {
      alert("Passwords must match")
      setPassword('')
      setConfirmPassword('')
    }
   
    if(confirmPassword === password){
      setIsValid(!isValid)
    }
  }

  return (
    <div>
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
            <Form method='post' action='' onSubmit={submitHandler}>
              <Box display={{lg: 'flex'}} alignItems='center' gap={4} mb='20px'>
                <FormControl isRequired>
                  <FormLabel color='gray.500'>Enter your email</FormLabel>
                  <Input 
                    type='email' 
                    name='email' 
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel color='gray.500'>Enter Username</FormLabel>
                  <Input 
                    type='text' 
                    name='username' 
                    onChange={(event) => setUsername(event.target.value)}
                    value={username}
                  />
                </FormControl>
              </Box>
              <Box display={{lg: 'flex'}} alignItems='center' gap={4}>
                <FormControl isRequired>
                  <FormLabel color='gray.500'>Enter your password</FormLabel>
                  <Input 
                    type='password' 
                    name='password' 
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel color='gray.500'>Confrim Password</FormLabel>
                  <Input 
                    type='password' 
                    name='confrimPassword' 
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    value={confirmPassword}
                    />
                </FormControl>
              </Box>
              <Button type='submit' mt='20px' w='100%' bg='brand.900' color='white' _hover={{bg:'teal.600'}}>
                {isValid ? <Link to='/dashboard'>Button</Link> : 'Button'}
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