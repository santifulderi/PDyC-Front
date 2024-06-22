import { Box, Flex, Heading, Button, Link, Icon } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import AuthButton from './Auth/AuthButton';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login');
  };

  return (
    <Box bg="gray.800" px={4} py={3} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading size="md" color="white">
          My Music App
        </Heading>
        <Flex alignItems="center">
          <Link
            as={RouterLink}
            to="/songs"
            px={2}
            color="white"
            _hover={{ textDecoration: "underline", color: "blue.300" }}
          >
            Songs
          </Link>
          <Link
            as={RouterLink}
            to="/playlists"
            px={2}
            color="white"
            _hover={{ textDecoration: "underline", color: "blue.300" }}
          >
            Playlists
          </Link>
          <AuthButton />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
