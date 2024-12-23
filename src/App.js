import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import './styles/index.css';
import LoadingSpinner from './utils/spinner/LoadingSpinner';

// Lazy load page components
const HomePage = React.lazy(() => import('./Pages/Home'));
const CharityPage = React.lazy(() => import('./Pages/Charity'));
const AboutUs = React.lazy(() => import('./Pages/AboutUs'));

// Lazy load heavy components from HomePage
const LazyBannerSection = React.lazy(() => import('./components/BannerSection'));
const LazyGallerySection = React.lazy(() => import('./components/GallerySection'));
const LazyMinistriesSection = React.lazy(() => import('./components/MinistriesSection'));
const LazySermonSection = React.lazy(() => import('./components/SermonSection'));

// Lazy load heavy components from CharityPage
const LazyCharitySliderSection = React.lazy(() => import('./components/charity/CharitySliderSection'));
const LazyCharityTestimonialSection = React.lazy(() => import('./components/charity/CharityTestimonialSection'));

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  BannerSection={LazyBannerSection}
                  GallerySection={LazyGallerySection}
                  MinistriesSection={LazyMinistriesSection}
                  SermonSection={LazySermonSection}
                />
              } 
            />
            <Route 
              path="/charity" 
              element={
                <CharityPage 
                  CharitySliderSection={LazyCharitySliderSection}
                  CharityTestimonialSection={LazyCharityTestimonialSection}
                />
              } 
            />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </Suspense>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;



// import React from 'react';
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import { Footer, Navbar } from './components';
// // import SermonsPage from './pages/SermonsPage';
// // import CampaignsPage from './pages/CampaignsPage';
// // import MinistriesPage from './pages/MinistriesPage';
// import './styles/index.css';
// import HomePage from './Pages/Home';
// import CharityPage from './Pages/Charity';
// import AboutUs from './Pages/AboutUs';

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           {/* <Route path="/sermons" element={<SermonsPage />} />
//           <Route path="/campaigns" element={<CampaignsPage />} /> */}
//           <Route path="/charity" element={<CharityPage />} />
//           <Route path="/about-us" element={<AboutUs />} />
//         </Routes>
//         <Footer/>
//       </div>
//     </Router>
//   );
// }

// export default App;