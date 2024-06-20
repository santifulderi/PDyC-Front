import { Box, Heading, List, ListItem, Text, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function SongsPage() {
  const [songs, setSongs] = useState([]);
  // const [songs, setSongs] = useState([
  //   { id: 1, name: 'Song 1', genre: 'Pop', author: 'Author 1' },
  //   { id: 2, name: 'Song 2', genre: 'Rock', author: 'Author 2' },
  //   { id: 3, name: 'Song 3', genre: 'Jazz', author: 'Author 3' },
  // ]);

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/songs',
      headers: { }
    };

    axios.request(config)
    .then((response) => {
      setSongs(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);


return (
    <Box p={8}>
      <Heading mb={4}>Songs</Heading>
      <List spacing={3}>
        {songs.map((song) => (
          <ListItem key={song.id} bg="gray.800" p={4} borderRadius="md" _hover={{ bg: 'gray.700' }}>
            <Stack spacing={1}>
              <Text fontWeight="bold">{song.name}</Text>
              <Text>Genre: {song.genre}</Text>
              <Text>Author: {song.author}</Text>
            </Stack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default SongsPage;
