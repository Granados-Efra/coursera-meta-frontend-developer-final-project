import { Box, Flex, Image, Link, Text, VStack } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box bg="gray.600" color="white" py={10} mt={20}>
      <Flex maxW="6xl" mx="auto" px={6} wrap="wrap" justify="space-between">
        <VStack align="start" spacing={2}>
          <Image src="https://littlelemon.leanczo.vercel.app/static/media/Logo.6c132dfefa69396bba43f72aa595e62f.svg" alt="Little Lemon" h="80px" />
        </VStack>

        <VStack align="start" spacing={1}>
          <Text fontWeight="bold">SITEMAP</Text>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Menu</Link>
          <Link href="#">Reservations</Link>
          <Link href="#">Order Online</Link>
          <Link href="#">Login</Link>
        </VStack>

        <VStack align="start" spacing={1}>
          <Text fontWeight="bold">CONTACT</Text>
          <Text>123 Citrus Lane</Text>
          <Text>123-456-7890</Text>
          <Text>little.lemon@lemon.com</Text>
        </VStack>

        <VStack align="start" spacing={1}>
          <Text fontWeight="bold">SOCIAL MEDIA LINKS</Text>
          <Link href="https://facebook.com" isExternal>Facebook</Link>
          <Link href="https://instagram.com" isExternal>Instagram</Link>
          <Link href="https://twitter.com" isExternal>Twitter</Link>
        </VStack>
      </Flex>
    </Box>
  );
}
