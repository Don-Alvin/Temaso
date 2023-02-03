import React from 'react'
import { Box, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { AddIcon, CalendarIcon } from '@chakra-ui/icons'
import { BsPeopleFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'

const Sidebar = () => {
  return (
    <Box px={{lg:'50px'}} py={{lg:'50px'}}>
      <List>
        <ListItem color='white' fontSize={{base:'14px', lg: '18px'}} display='flex' mb='50px'>
          <NavLink to='/dashboard'>
            <Box display='flex' alignItems='center'>
              <ListIcon as={CalendarIcon}/>
              <Text> DashBoard</Text>
            </Box>
          </NavLink>
        </ListItem>

        <ListItem color='white' fontSize={{base:'14px', lg: '18px'}} display='flex' mb='50px'>
          <NavLink to='/dashboard/profile'>
            <Box display='flex' alignItems='center'>
              <ListIcon as={CgProfile}/>
              <Text>Profile</Text>
            </Box>
          </NavLink>
        </ListItem>

        <ListItem color='white' fontSize={{base:'14px', lg: '18px'}} display='flex' mb='50px'>
          <NavLink to='/dashboard/team'>
            <Box display='flex' alignItems='center'>
              <ListIcon as={BsPeopleFill}/>
              <Text>Team</Text>
            </Box>
          </NavLink>
        </ListItem>

        <ListItem color='white' fontSize={{base:'14px', lg: '18px'}} display='flex' mb='50px'>
          <NavLink to='/dashboard/create'>
            <Box display='flex' alignItems='center'>
              <ListIcon as={AddIcon}/>
              <Text>Create Tasks</Text>
            </Box>
          </NavLink>
        </ListItem>

      </List>
    </Box>
  )
}

export default Sidebar