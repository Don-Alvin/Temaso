import { Card, CardBody, CardFooter, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const Team = () => {
  return (
    <SimpleGrid spacing={4} templateColumns='repeat(4, 1fr)' px='20px'>
      <Card>
        <CardFooter></CardFooter>
        <CardBody></CardBody>
        <CardFooter></CardFooter>
      </Card>

      <Card>
        <CardFooter></CardFooter>
        <CardBody></CardBody>
        <CardFooter></CardFooter>
      </Card>

      <Card>
        <CardFooter></CardFooter>
        <CardBody></CardBody>
        <CardFooter></CardFooter>
      </Card>

      <Card>
        <CardFooter></CardFooter>
        <CardBody></CardBody>
        <CardFooter></CardFooter>
      </Card>

      <Card>
        <CardFooter></CardFooter>
        <CardBody></CardBody>
        <CardFooter></CardFooter>
      </Card>

      <Card>
        <CardFooter></CardFooter>
        <CardBody></CardBody>
        <CardFooter></CardFooter>
      </Card>
    </SimpleGrid>
  )
}

export default Team