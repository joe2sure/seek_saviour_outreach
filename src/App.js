import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
// import SermonsPage from './pages/SermonsPage';
// import CampaignsPage from './pages/CampaignsPage';
// import MinistriesPage from './pages/MinistriesPage';
import './styles/index.css';
import HomePage from './Pages/Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/seek_saviour_outreach" element={<HomePage />} />
          {/* <Route path="/sermons" element={<SermonsPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/ministries" element={<MinistriesPage />} /> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;