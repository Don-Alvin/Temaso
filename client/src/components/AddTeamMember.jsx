import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import { Form } from 'react-router-dom'

const AddTeamMember = () => {
  return (
    <Box px={{lg: '100px'}} py={{lg: '30px'}}>
        <Form>
            <FormControl w={{lg:'70%'}} mb='30px'>
                <FormLabel>Name</FormLabel>
                <Input type='text' name='name' placeholder='Enter name' outlineColor='brand.900' border='none'  />
            </FormControl>
            <FormControl w={{lg:'70%'}} mb='30px'>
                <FormLabel>Position</FormLabel>
                <Input type='text' name='position' placeholder='Enter position' outlineColor='brand.900' border='none' />
            </FormControl>
            <Button type='submit' bg='brand.900' color='white'>Add New</Button>
        </Form>
    </Box>
  )
}

export default AddTeamMember