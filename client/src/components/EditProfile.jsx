import { Box, Button, Flex, FormControl, FormLabel, Icon, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Form, Link } from 'react-router-dom'

const EditProfile = () => {
  return (
    <Flex flexDirection='column' alignItems='center' px='20px'>
        <Box mb='80px'>
            <Link to='/dashboard/profile'>
                <Flex gap={4}>
                    <Icon as={AiOutlineArrowLeft} fontSize='24px' fontWeight='bolder' color='brand.900' />
                    <Text color='gray.500'>Back to profile</Text>
                </Flex>
            </Link>
        </Box>
        <Form method='post'>
            <FormControl mb='30px'>
                <FormLabel color='gray.500'>Edit Profile Picture</FormLabel>
                <Input type='file' name='profileImage' accept='.png, .jpeg, .jpg' />
            </FormControl>
            <FormControl mb='30px'>
                <FormLabel color='gray.500'>Edit Name</FormLabel>
                <Input type='text' name='profileName' placeholder='Enter new name' />
            </FormControl>
            <FormControl mb='30px'>
                <FormLabel color='gray.500'>Edit Email</FormLabel>
                <Input type='email' name='profileEmail' placeholder='Enter new email' />
            </FormControl>
            <Button bg='brand.900' color='white'>Save changes</Button>
        </Form>
    </Flex>
  )
}

export default EditProfile