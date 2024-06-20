import { Box, Heading, List, ListItem, Text, Stack, Button, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PlaylistsPage() {
  const navigate = useNavigate();

  const [playlists, setPlaylists] = useState([
    { id: 1, name: 'Playlist 1', songCount: 10 },
    { id: 2, name: 'Playlist 2', songCount: 8 },
    { id: 3, name: 'Playlist 3', songCount: 15 },
  ]);

//   useEffect(() => {
//     axios.get('/api/playlists').then(response => setPlaylists(response.data));
//   }, []);

const handleAddPlaylist = () => {
  // Aquí puedes agregar la lógica para añadir una nueva playlist
  console.log('Add new playlist');
};

const handleMyPlaylists = () => {
  // Aquí puedes agregar la lógica para acceder a tus playlists
  console.log('Go to my playlists');
  navigate('/my-playlists'); // Asegúrate de tener esta ruta configurada
};

return (
    <Box p={8}>
      <Heading mb={4}>Playlists</Heading>
      <Flex mb={6} justifyContent="space-between">
        <Button colorScheme="blue" onClick={handleAddPlaylist}>
          Add New Playlist
        </Button>
        <Button colorScheme="teal" onClick={handleMyPlaylists}>
          My Playlists
        </Button>
      </Flex>
      <List spacing={3}>
        {playlists.map((playlist) => (
          <ListItem key={playlist.id} bg="gray.800" p={4} borderRadius="md" _hover={{ bg: 'gray.700' }}>
            <Stack spacing={1}>
              <Text fontWeight="bold">{playlist.name}</Text>
              <Text>Number of songs: {playlist.songCount}</Text>
            </Stack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default PlaylistsPage;