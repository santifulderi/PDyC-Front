import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SongsPage from './pages/SongsPage';
import PlaylistsPage from './pages/PlaylistsPage';
import MyPlaylistsPage from './pages/MyPlaylistsPage';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/songs" element={<SongsPage />} />
        <Route path="/playlists" element={<PlaylistsPage />} />
        <Route path="/my-playlists" element={<MyPlaylistsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
