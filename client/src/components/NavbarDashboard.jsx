import { Avatar, AvatarBadge, Button, Flex, Heading, HStack, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const NavbarDashboard = () => {
  return (
    <Flex as='nav' p='10px' alignItems='center' justify='space-between' mb='40px' w='100%'>
        <Heading as='h1' display='flex' alignItems='center' gap={4} color='brand.900'>
          <Image src='/images/icon.svg' alt='Profile Picture' fontSize='12px' w={{base: '30px', lg: '50px'}} h={{base: '30px', lg: '50px'}} objectFit='cover' borderRadius="50%" />
          Proma
        </Heading>
        <HStack spacing='20px'>
            <Avatar name='mario' bg='brand.500' src='/img/mario.png'>
              <AvatarBadge width='1.3em' bg='teal.500'>
                  <Text fontSize='xs' color='white'>3</Text>
              </AvatarBadge>
            </Avatar>
            <Text>Kevin Gates</Text>
            <Button colorScheme='brand.900'>Logout</Button>
        </HStack>
    </Flex>
  )
}

export default NavbarDashboard