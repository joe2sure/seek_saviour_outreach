import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
// import SermonsPage from './pages/SermonsPage';
// import CampaignsPage from './pages/CampaignsPage';
// import MinistriesPage from './pages/MinistriesPage';
import './styles/index.css';
import HomePage from './Pages/Home';
import CharityPage from './Pages/Charity';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/sermons" element={<SermonsPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} /> */}
          <Route path="/charity" element={<CharityPage />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;