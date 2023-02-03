import { Avatar, Box, Button, Flex } from '@chakra-ui/react'
import {NavLink} from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <Box as='header' px='40px' pr='60px' py='20px' position='fixed' top='0' left='0' right='0'>
        <Flex as='nav' justify='space-between' alignItems='center'>
           <Avatar name='Proma' src='/images/icon.svg'/>
           <Box display='flex' gap={4}>
              <Box color='brand.900' fontSize='16px' border='2px' borderColor='brand.800' px='10px' py='6px' borderRadius='5px'>
                <NavLink to='/login'>Log in</NavLink>
              </Box>
              <Box bg='brand.900' px='10px' py='6px' color='white'  borderRadius='5px'>
                <NavLink to='/signup'>Get Started</NavLink>
              </Box>
           </Box>
        </Flex>
    </Box>
  )
}

export default Navbar