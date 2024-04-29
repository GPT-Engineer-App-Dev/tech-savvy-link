import { Box, Flex, Heading, Text, Tag, Button, SimpleGrid } from '@chakra-ui/react';

const developers = [
  { name: 'John Doe', location: 'New York, USA', technologies: ['React', 'Node.js'] },
  { name: 'Jane Smith', location: 'Berlin, Germany', technologies: ['Go', 'Python'] },
  { name: 'Carlos Ruiz', location: 'Madrid, Spain', technologies: ['Java', 'Spring Boot'] }
];

const DeveloperCard = ({ developer }) => (
  <Flex direction="column" align="center" p={5} bg="white" borderRadius="md" boxShadow="md" m={2}>
    <Heading as="h3" size="md" mb={2}>{developer.name}</Heading>
    <Text mb={2}>{developer.location}</Text>
    <Flex wrap="wrap" justify="center">
      {developer.technologies.map(tech => <Tag size="sm" colorScheme="blue" m={1}>{tech}</Tag>)}
    </Flex>
    <Button mt={4} colorScheme="blue">View Profile</Button>
  </Flex>
);

const Developers = () => {
  return (
    <Box p={5} bg="gray.50" minH="100vh">
      <Flex direction="column" align="center" justify="center">
        <Heading as="h1" size="2xl" mb={6}>Developer Listings</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {developers.map(developer => <DeveloperCard developer={developer} />)}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Developers;