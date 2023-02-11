import { Box, Button, FormControl, FormLabel, Input, Icon, Text, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Form, Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const AddTeamMember = () => {
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [positionIsValid, setPositionIsValid] = useState(true)

  const submitHandler = (e) => {
    e.preventDefault()

    if (position.toLowerCase() !== 'product designer' && position.toLowerCase() !== 'backend developer' && position.toLowerCase() !== 'frontend developer'){
        setPositionIsValid(false)
        setPosition('')
        return
    }else {
      setPositionIsValid(true)
    }

    setName('')
    setPosition('')
    setPositionIsValid(true)
  }

  return (
    <Box px={{lg: '100px'}} py={{lg: '30px'}}>
        <Link to='/dashboard/team'>
          <Flex alignItems='center' gap={4} mb='20px'>
            <Icon as={AiOutlineArrowLeft} fontSize='32px' fontWeight='bold' color='brand.900'/>
            <Text color='gray.500'>Back to team</Text>
          </Flex>
        </Link>
        <Form method='post' onSubmit={submitHandler}>
            <FormControl w={{lg:'70%'}} mb='30px' isRequired>
                <FormLabel color='gray.500'>Name</FormLabel>
                <Input 
                  type='text' 
                  name='name' 
                  placeholder='Enter name' 
                  _focus={{borderColor: 'brand.900', outline: 'none'}}
                  onChange={event => setName(event.target.value)}
                  value={name}
                />
            </FormControl>
            <FormControl w={{lg:'70%'}} mb='30px' isRequired>
                <FormLabel color='gray.500'>Position</FormLabel>
                <Input 
                  type='text' 
                  name='position' 
                  placeholder='Enter position' 
                  onChange={event => setPosition(event.target.value)}
                  value={position}
                />
                {!positionIsValid && <Text as='small' color='red'>* VALID POSITIONS ARE PRODUCT DESIGNER, MARKETER, BACKEND DEVELOPER AND FRONTEND DEVELOPER</Text>}
            </FormControl>
            <Button 
              type='submit' 
              bg='brand.900' 
              color='white' 
              _hover={{bg: 'brand.700'}}

            >
              Add New
            </Button>
        </Form>
    </Box>
  )
}

export default AddTeamMember