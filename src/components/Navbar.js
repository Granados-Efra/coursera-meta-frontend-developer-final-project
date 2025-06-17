import { Box, Flex, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box bg="gray.900" px={8} py={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <img src="https://littlelemon.leanczo.vercel.app/static/media/Logo.6c132dfefa69396bba43f72aa595e62f.svg" alt="logo" height={40} />

        <HStack spacing={6} display={{ base: 'none', md: 'flex' }} color="white">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/menu">Menu</RouterLink>
          <RouterLink to="/reservations">Reservations</RouterLink>
          <RouterLink to="/order-online">Order Online</RouterLink>
          <RouterLink to="/login">Login</RouterLink>
        </HStack>
      </Flex>
    </Box>
  );
}
