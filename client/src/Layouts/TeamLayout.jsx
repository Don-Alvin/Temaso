import { AddIcon } from '@chakra-ui/icons'
import { Text, Icon, Box } from '@chakra-ui/react'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const TeamLayout = () => {
  return (
    <Box as='main'>
      <Box as='nav' display='flex' p='20px' gap={12} alignItems='center'>
        <Box display='flex' justify='center' alignItems='center' bg='brand.900' p='10px' borderRadius='6px'>
          <Link to='/dashboard/team/addteammember'>
            <Box display='flex' gap={4} alignItems='center' color='white'>
              <Icon as={AddIcon}/>
              <Text color='white'>Add New</Text>
            </Box>
          </Link>
        </Box>
      </Box>
      <Outlet />
    </Box>
  )
}

export default TeamLayout