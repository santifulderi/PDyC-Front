import { Box, Flex, Heading, Button, Link, Icon } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
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
          <Button
            colorScheme="blue"
            ml={4}
            onClick={handleLogout}
            leftIcon={<Icon as={MdLogout} />}
          >
            Logout
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
