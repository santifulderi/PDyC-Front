import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Icon } from '@chakra-ui/react';
import { MdLogout, MdLogin } from 'react-icons/md';

function AuthButton() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token'); // Verifica si hay un token

  const handleLogout = () => {
    localStorage.removeItem('token'); // Elimina el token
    navigate('/login'); // Redirige al login
  };

  const handleLogin = () => {
    navigate('/login'); // Redirige al login
  };

  return (
    <Button
      colorScheme="blue"
      ml={4}
      onClick={isLoggedIn ? handleLogout : handleLogin}
      leftIcon={<Icon as={isLoggedIn ? MdLogout : MdLogin} />}
    >
      {isLoggedIn ? 'Logout' : 'Login'}
    </Button>
  );
}

export default AuthButton;
