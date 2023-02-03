import { Avatar, Box, Flex } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Box as='header'>
        <Flex>
           <Avatar src='/images/icon.svg'/>
        </Flex>
    </Box>
  )
}

export default Navbar