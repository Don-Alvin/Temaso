import { Avatar, AvatarBadge, Button, Flex, Heading, HStack, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const NavbarDashboard = () => {
  return (
    <Flex as='nav' p='10px' alignItems='center' justify='space-between' mb='40px' w='100%' px='30px'>
        <Heading as='h1' display='flex' alignItems='center' gap={4} color='brand.900'>
          <Image src='/images/icon.svg' alt='Profile Picture' fontSize='12px' w={{base: '30px', lg: '50px'}} h={{base: '30px', lg: '50px'}} objectFit='cover' borderRadius="50%" />
          Proma
        </Heading>
        <HStack spacing='20px'>
            <Avatar name='Kevin' bg='brand.500' src='/images/profile.png'>
              <AvatarBadge width='1.3em' bg='teal.500'>
                  <Text fontSize='xs' color='white'>3</Text>
              </AvatarBadge>
            </Avatar>
            <Text>Kevin Gates</Text>
            <Link to='/'>
              <Button color='white' bgColor='brand.900'>Logout</Button>
            </Link>
        </HStack>
    </Flex>
  )
}

export default NavbarDashboard