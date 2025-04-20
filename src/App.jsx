

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUsPage from './pages/AboutUsPage';
import HomePage from "./pages/HomePage";
import ReservationPage from "./pages/ReservationPage";
import MenuPage from "./pages/MenuPage";
import OrderOnlinePage from "./pages/OrderOnlinePage";

function App() {

  return (
    <Router>
        <Routes>
            {/* ...existing routes... */}
            <Route path="/" element={<HomePage/>} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/orderonline" element={<OrderOnlinePage />} />
            <Route path="/reservation" element={<ReservationPage />} />
        </Routes>
    </Router>
  )
}

export default App
