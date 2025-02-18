

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import MemoryGame from './pages/MemoryGame';  // Import MemoryGame component
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from '../context/userContext';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
      <NavBar />
      <Toaster position='bottom-right' toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login  />} />
       
        <Route path="/game" element={<MemoryGame />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;


