import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, HStack, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import tasks from '../../data/tasks'
import { ViewIcon, EditIcon } from '@chakra-ui/icons'

const Dashboard = () => {
  return (
    <Tabs colorScheme='brand.900' variant='enclosed'>
      <TabList>
        <Tab _selected={{color: 'white', bg: 'brand.900'}} mr='20px' color='brand.900'>All Tasks</Tab>
        <Tab _selected={{color: 'white', bg: 'brand.900'}} mr='20px' color='brand.900'>Under progress</Tab>
        <Tab _selected={{color: 'white', bg: 'brand.900'}} mr='20px' color='brand.900'>Under Review</Tab>
        <Tab _selected={{color: 'white', bg: 'brand.900'}} mr='20px' color='brand.900'>Completed</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
        <SimpleGrid spacing={4} minChildWidth='300px'>
      {tasks && tasks.map(task => (
        <Card key={task.id} borderTop='8px' borderColor='brand.900' bg='white'>
          <CardHeader>
            <Flex gap={5}>
              <Avatar name={task.author} bg='brand.500' src={task.img} />
              <Box>
                <Heading as='h3' size='sm'>{task.title}</Heading>
                <Text>by {task.author}</Text>
              </Box>
            </Flex>
          </CardHeader>

          <CardBody color='gray.500'>
            <Text>{task.description}</Text>
          </CardBody>
            <Divider borderColor='gray.200'/>
          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
              <Button variant="ghost" leftIcon={<EditIcon />}>Comment</Button>
            </HStack>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </TabPanels>
    </Tabs>
  )
}


export default Dashboard