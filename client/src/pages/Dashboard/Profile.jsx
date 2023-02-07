import { Avatar, AvatarGroup, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <Flex alignItems='center' flexDirection='column' gap={8}>
      <AvatarGroup>
        <Avatar size='xl' src='/images/profile.jpg'>
        </Avatar>
      </AvatarGroup>
      <Link to='/dashboard/profile/edit-profile'>
        <Box bg='brand.900' p='10px' color='white' borderRadius='5px'>Edit Profile</Box>
      </Link>
      <Flex flexDirection='column' gap={8}>
        <Text>Kevin Gates</Text>
        <Text>kevingates@proma.com</Text>
      </Flex>
    </Flex>
  )
}

export default Profile