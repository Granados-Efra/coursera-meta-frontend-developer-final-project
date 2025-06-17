// src/pages/Home.tsx
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { FaMotorcycle } from 'react-icons/fa';

const SpecialsSection = () => {
  return (
     <Box mt={12}>
        <Flex justify="space-between" align="center" mb={6}>
          <Heading as="h2" size="xl">Specials</Heading>
          <Button colorScheme="yellow">Online Menu</Button>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
  {[
    {
      title: 'Greek Salad',
      price: '$12.99',
      desc: 'Crispy lettuce, peppers, olives and feta, garnished with garlic and rosemary croutons.',
      img: 'https://plus.unsplash.com/premium_photo-1667215177072-6539146bc577?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Bruschetta',
      price: '$5.99',
      desc: 'Grilled bread with garlic, olive oil and salt.',
      img: 'https://images.unsplash.com/photo-1572695157360-1153aaad020b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Lemon Dessert',
      price: '$5.00',
      desc: "Grandma’s recipe with authentic ingredients.",
      img: 'https://plus.unsplash.com/premium_photo-1716918178946-5922b4e8645d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ].map((dish) => (
    <Box
      key={dish.title}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      boxShadow="md"
      display="flex"
      flexDirection="column"
      h="100%"
    >
      <Image src={dish.img} alt={dish.title} h="200px" w="100%" objectFit="cover" />
      <Flex flexDirection="column" justify="space-between" flex="1" p={4}>
        <Box>
          <Flex justify="space-between" align="center" mb={2}>
            <Text fontWeight="bold">{dish.title}</Text>
            <Text color="green.500" fontWeight="bold">{dish.price}</Text>
          </Flex>
          <Text fontSize="sm" mb={3}>{dish.desc}</Text>
        </Box>
        <Flex align="center" color="gray.600" fontSize="sm" mt="auto">
          <FaMotorcycle />
          <Text ml={2}>Order a delivery</Text>
        </Flex>
      </Flex>
    </Box>
  ))}
</SimpleGrid>

      </Box>
  )
}

export default SpecialsSection