import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarDashboard from '../components/NavbarDashboard'
import Sidebar from '../components/Sidebar'

const DashboardLayout = () => {
  return (
    <Flex flexDirection={{base: 'column', lg: 'row'}} w='100vw'>
      <Box as='aside' position='fixed' left={0} top={0}  bg='brand.900' width={{base: '100%', lg: '20%'}} minHeight={{base: '70px' , lg: '100vh'}}>
        <Sidebar />
      </Box>
      <Box ml='20%' as='main' display='flex' flexDirection='column' width={{lg: '80%'}}>
        <NavbarDashboard />
        <Outlet/>
      </Box>
    </Flex>
  )
}

export default DashboardLayout