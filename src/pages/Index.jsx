import { Container, Text, VStack, Box, Heading, Button, IconButton, HStack, Image, StackDivider } from "@chakra-ui/react";
import { FaGamepad, FaComments, FaShoppingCart, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} divider={<StackDivider borderColor="gray.200" />}>
        <Heading as="h1" size="2xl" textAlign="center">
          Board Meets World
        </Heading>
        <Text fontSize="lg" textAlign="center">
          A social network for board gaming enthusiasts. Share your collections, join chat threads, and buy/sell games.
        </Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaGamepad />} colorScheme="teal" variant="solid">
            Collections
          </Button>
          <Button leftIcon={<FaComments />} colorScheme="teal" variant="solid">
            Chat Threads
          </Button>
          <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid">
            Buy/Sell
          </Button>
        </HStack>
        <Box boxSize="sm">
          <Image src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxib2FyZCUyMGdhbWVzJTIwY29sbGVjdGlvbnxlbnwwfHx8fDE3MTY0Nzk4OTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Board Games Collection" borderRadius="md" />
        </Box>
        <IconButton aria-label="Add New Post" icon={<FaPlus />} size="lg" colorScheme="teal" />
      </VStack>
    </Container>
  );
};

export default Index;
