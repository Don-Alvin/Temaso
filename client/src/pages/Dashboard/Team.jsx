import { Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Team = () => {
  return (
    <SimpleGrid spacing={4} templateColumns='repeat(4, 1fr)' px='20px'>
      <Card>
        <CardHeader>
          <Heading as='h4' fontSize='18px'>Don Alvin</Heading>
          <Text>Frontend Developer</Text>
        </CardHeader>
        <CardBody>
          <Text>Active tasks: 5</Text>
          <Text>Taks Review: 3</Text>
          <Text>Completed Tasks: 3</Text>
        </CardBody>
        <CardFooter>
          <Link to='/dashboard/create'>
            <Button bg='brand.900' color='white' _hover={{bg:'teal.600'}}>Assign new task</Button>
          </Link>
        </CardFooter>
      </Card>
    </SimpleGrid>
  )
}

export default Team