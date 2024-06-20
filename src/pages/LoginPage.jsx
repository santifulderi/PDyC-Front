import { Box, Button, Input, Heading, VStack, FormControl, FormLabel, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = async () => {
    try {
      // Simulating an API call for login
      // Replace this with your actual API call
      await axios.post('/api/login', { email, password });
      navigate('/');
      toast({
        title: 'Login successful.',
        description: "Welcome back!",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Login failed:', error);
      toast({
        title: 'Login failed.',
        description: "Please check your email and password.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      bg="gray.900"
      px={4}
    >
      <Box
        maxW="md"
        w="full"
        bg="gray.800"
        p={8}
        borderRadius="md"
        boxShadow="lg"
      >
        <VStack spacing={6}>
          <Heading size="lg" color="white">Login</Heading>
          <FormControl id="email">
            <FormLabel color="gray.400">Email</FormLabel>
            <Input
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              bg="gray.700"
              borderColor="gray.600"
              _placeholder={{ color: 'gray.500' }}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel color="gray.400">Password</FormLabel>
            <Input
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              bg="gray.700"
              borderColor="gray.600"
              _placeholder={{ color: 'gray.500' }}
            />
          </FormControl>
          <Button
            variant="solid"
            colorScheme="blue"
            size="lg"
            width="full"
            onClick={handleLogin}
          >
            Login
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

export default LoginPage;
