import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import SpecialsSection from '../components/SpecialsSection';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box p={4}>
      {/* Hero Section */}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        bg="yellow.100"
        p={6}
        borderRadius="xl"
      >
        <VStack align="start" spacing={4}>
          <Heading as="h1" size="2xl">Little Lemon</Heading>
          <Heading as="h2" size="md" color="gray.600">Chicago</Heading>
          <Text maxW="lg">
            Nestled in the heart of bustling Chicago, Little Lemon is where modern flair meets cozy nostalgia. Our diverse, artisanal menu, featuring delectable bruschettas, succulent burgers, and refreshing Greek salads, is a testament to our belief that food is an art.
          </Text>
          <Button colorScheme="yellow" size="lg" onClick={() => navigate('/reservations')}>
            Reserve a table
          </Button>
        </VStack>
        <Image
          src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=1189&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Restaurant Dinning Room"
          boxSize="250px"
          objectFit="cover"
          borderRadius="lg"
          mt={{ base: 6, md: 0 }}
        />
      </Flex>

      {/* Specials Section */}
      <SpecialsSection />
    </Box>
  );
}
