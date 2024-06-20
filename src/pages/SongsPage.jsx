import { Box, Heading, List, ListItem, Text, Stack, Input, Select, Flex, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function SongsPage() {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');

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
        setFilteredSongs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFilter = () => {
    let filtered = songs;

    if (genre) {
      filtered = filtered.filter(song => song.genre.toLowerCase().includes(genre.toLowerCase()));
    }

    if (author) {
      filtered = filtered.filter(song => song.author.toLowerCase().includes(author.toLowerCase()));
    }

    setFilteredSongs(filtered);
  };

  const handleClearFilters = () => {
    setGenre('');
    setAuthor('');
    setFilteredSongs(songs);
  };

  return (
    <Box p={8}>
      <Heading mb={4}>Songs</Heading>
      <Flex mb={4} justifyContent="space-between">
        <Flex>
          <Select
            placeholder="Select genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            mr={2}
            bg="gray.700"
            color="white"
            _hover={{ bg: 'gray.600' }}
            _focus={{ bg: 'gray.700', color: 'white' }}
          >
            <option style={{ backgroundColor: 'gray.700', color: 'black' }} value="Rock">Rock</option>
            <option style={{ backgroundColor: 'gray.700', color: 'black' }} value="Techno">Pop</option>
            <option style={{ backgroundColor: 'gray.700', color: 'black' }} value="Pop">Jazz</option>
            <option style={{ backgroundColor: 'gray.700', color: 'black' }} value="Jazz">Rock</option>
            <option style={{ backgroundColor: 'gray.700', color: 'black' }} value="Folk">Pop</option>
            <option style={{ backgroundColor: 'gray.700', color: 'black' }} value="Classical">Jazz</option>
          </Select>
          <Input 
            placeholder="Filter by author" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            mr={2}
            bg="gray.700"
            color="white"
            _hover={{ bg: 'gray.600' }}
          />
        </Flex>
        <Flex>
          <Button onClick={handleFilter} colorScheme="blue" mr={2}>Filter</Button>
          <Button onClick={handleClearFilters} colorScheme="gray">Clear Filters</Button>
        </Flex>
      </Flex>
      <List spacing={3}>
        {filteredSongs.map((song) => (
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
