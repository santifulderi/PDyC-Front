import { Box, Heading, List, ListItem, Text, Stack, Button, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Input, useDisclosure, useToast, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AddIcon } from '@chakra-ui/icons';

function PlaylistsPage() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [playlists, setPlaylists] = useState([]);
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/playlists',
      headers: { 
        'Authorization': `${token}`,
      }
    };

    axios.request(config)
      .then((response) => {
        setPlaylists(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddPlaylist = () => {
    setIsLoading(true);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/playlists',
      headers: { 
        'Authorization': `${token}`,
      },
      data: {
        name: newPlaylistName
      }
    };

    axios.request(config)
      .then((response) => {
        if (response.status === 201 || response.status === 200) {
          setPlaylists([...playlists, response.data]);
          setNewPlaylistName('');
          setIsLoading(false);
          onClose();
          toast({
            title: "Playlist created.",
            description: "Your new playlist has been created successfully.",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top"
          });
        } else {
          throw new Error("Failed to create playlist");
        }
      })
      .catch((error) => {
        console.error("Error creating playlist:", error);
        setIsLoading(false);
        toast({
          title: "An error occurred.",
          description: "Unable to create playlist.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top"
        });
      });
  };

  const handleMyPlaylists = () => {
    navigate('/my-playlists');
  };

  return (
    <Box p={8}>
      <Heading mb={4}>Playlists</Heading>
      {token ? (
        <Flex mb={6} justifyContent="space-between">
          <Button colorScheme="blue" onClick={onOpen} leftIcon={<AddIcon />}>
            Add New Playlist
          </Button>
          <Button colorScheme="teal" onClick={handleMyPlaylists}>
            My Playlists
          </Button>
        </Flex>
      ) : null}
      <Box
        maxH="600px"
        overflowY="auto"
        p={2}
        borderRadius="md"
        border="1px solid"
        borderColor="gray.700"
        css={{
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#1A202C",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#4A5568",
            borderRadius: "24px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#2D3748",
          },
        }}
      >
        <List spacing={3}>
          {playlists.map((playlist) => (
            <ListItem
              key={playlist.id}
              bg="gray.800"
              p={4}
              borderRadius="md"
              _hover={{ bg: "gray.700" }}
            >
              <Stack spacing={1}>
                <Text fontWeight="bold">{playlist.name}</Text>
                <Text>Number of songs: {playlist.songCount}</Text>
              </Stack>
            </ListItem>
          ))}
        </List>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="gray.800" color="white">
          <ModalHeader>Add New Playlist</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Playlist name"
              value={newPlaylistName}
              onChange={(e) => setNewPlaylistName(e.target.value)}
              bg="gray.700" // Fondo oscuro
              color="white" // Texto blanco
              _hover={{ bg: "gray.600" }} // Fondo al pasar el ratón
            />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleAddPlaylist}
              isLoading={isLoading}
              loadingText="Saving"
              spinnerPlacement="start"
            >
              Save
            </Button>
            <Button
              variant="ghost"
              onClick={onClose}
              _hover={{ bg: "gray.700" }}
              bg="gray.600"
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default PlaylistsPage;
