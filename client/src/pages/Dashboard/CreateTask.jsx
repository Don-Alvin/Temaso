import React from 'react'
import { Box, Button, Flex, FormControl, FormLabel, Input, Text, Textarea } from '@chakra-ui/react'
import { Form } from 'react-router-dom'

const CreateTask = () => {
  return (
    <Box px='50px'>
      <Text mb='40px' color='gray.600' fontSize='24px' fontWeight='bold'>Enter Task Details</Text>
      <Form method='post'>
        <Flex gap={4}>
          <FormControl mb='20px'>
            <FormLabel color='gray.500'>Task Name</FormLabel>
            <Input type='text' name='taskName' />
          </FormControl>
          <FormControl mb='20px'>
            <FormLabel color='gray.500'>Asssign to</FormLabel>
            <Input type='text' name='assigned' />
          </FormControl>
        </Flex>
        <FormControl mb='20px'>
          <FormLabel color='gray.500'>Task Description</FormLabel>
          <Textarea type='text' name='taskDescription' />
        </FormControl>
        <Flex gap={4}>
          <FormControl mb='20px'>
            <FormLabel color='gray.500'>Start Date</FormLabel>
            <Input type='date' name='taskStartDate' />
          </FormControl>
          <FormControl mb='20px'>
            <FormLabel color='gray.500'>Deadline</FormLabel>
            <Input type='date' name='taskDeadline' />
          </FormControl>
        </Flex>
        <Button bgColor='brand.900' color='white' _hover={{bg: 'teal.700'}} >Add Task</Button>
      </Form>
    </Box>
  )
}

export default CreateTask