import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Heading } from '@chakra-ui/react'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Box as='section' bgImage='url("/images/bgImage.jpg")' bgRepeat='no-repeat' bgSize='cover' objectFit='contain' bgPosition='center' p={{base: '10px', lg: 0}} textAlign={{base: 'center', lg: 'none'}} h='100vh' display='flex' justifyContent='center' alignItems='center'>
          <Heading as='h3' color='white' fontSize={{base: '24px', lg:'48px'}}>Manage all your projects with Proma</Heading>

      </Box>
    </div>
  )
}

export default LandingPage