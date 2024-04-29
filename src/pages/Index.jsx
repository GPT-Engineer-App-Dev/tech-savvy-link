import { Box, Flex, Heading, Text, Button, Image, SimpleGrid } from '@chakra-ui/react';
import { FaCode, FaLaptopCode, FaUsers } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" justify="center" minH="100vh" bg="gray.50">
        <Heading as="h1" size="2xl" mb={4}>Welcome to Particles Marketplace</Heading>
        <Text fontSize="xl" mb={6}>
          Connecting businesses with top software talent specialized in technologies like React, Node.js, .NET, Go, and JavaScript.
        </Text>
        <Button colorScheme="blue" size="lg" mb={4}>Get Started</Button>
        <Image src="https://via.placeholder.com/600x300" alt="Tech Image" mb={4} />

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={10}>
          <Feature icon={FaCode} title="Expert Developers" description="Handpicked top-notch professionals ready to tackle any challenge." />
          <Feature icon={FaLaptopCode} title="Cutting-Edge Technology" description="Focus on modern web technologies to deliver scalable solutions." />
          <Feature icon={FaUsers} title="Trusted by Companies" description="Join a host of satisfied clients who trust our expertise." />
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

const Feature = ({ icon, title, description }) => (
  <Flex direction="column" align="center" p={5} bg="white" borderRadius="md" boxShadow="md">
    <Box as={icon} size="3x" mb={4} />
    <Heading as="h3" size="lg" mb={2}>{title}</Heading>
    <Text textAlign="center">{description}</Text>
  </Flex>
);

export default Index;