import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ReservationPage from './pages/ReservationPage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import OrderOnlinePage from './pages/OrderOnlineViewPage';

import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Box bg="gray.900" minH="100vh">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reservations" element={<ReservationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/order-online" element={<OrderOnlinePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
