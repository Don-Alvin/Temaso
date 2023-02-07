import { Box, Button, FormControl, FormLabel, Input, Icon, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import { Form, Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const AddTeamMember = () => {
  return (
    <Box px={{lg: '100px'}} py={{lg: '30px'}}>
        <Link to='/dashboard/team'>
          <Flex alignItems='center' gap={4} mb='20px'>
            <Icon as={AiOutlineArrowLeft} fontSize='32px' fontWeight='bold' color='brand.900'/>
            <Text color='gray.500'>Back to team</Text>
          </Flex>
        </Link>
        <Form>
            <FormControl w={{lg:'70%'}} mb='30px' isRequired>
                <FormLabel color='gray.500'>Name</FormLabel>
                <Input type='text' name='name' placeholder='Enter name' outlineColor='brand.900' border='none'/>
            </FormControl>
            <FormControl w={{lg:'70%'}} mb='30px' isRequired>
                <FormLabel color='gray.500'>Position</FormLabel>
                <Input type='text' name='position' placeholder='Enter position' outlineColor='brand.900' border='none'/>
            </FormControl>
            <Button type='submit' bg='brand.900' color='white'>Add New</Button>
        </Form>
    </Box>
  )
}

export default AddTeamMember