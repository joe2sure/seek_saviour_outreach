import React, { Suspense } from 'react';
import { 
  CharityBanner, 
  CharityDonationCTA, 
  CharityEventsSection, 
  CharityFunFactSection, 
  CharityInfoSection, 
  CharityPartnersSection, 
  CharityPromotionSection, 
  CharityServicesSection,
} from '../components/charity/index.js';
import '../styles/components/charity/Charity.css';
import LoadingSpinner from '../utils/spinner/LoadingSpinner.js';



const CharityPage = ({ 
  CharitySliderSection, 
  CharityTestimonialSection 
}) => {
  return (
    <div className="charity-page">
      <CharityBanner />
      <main className="charity-main-content">
        <CharityInfoSection />
        <CharityPromotionSection/>
        <CharityServicesSection />
        <CharityDonationCTA/>
        <CharityEventsSection/>
        <CharityFunFactSection />
        <Suspense fallback={<LoadingSpinner />}>
          <CharitySliderSection/>
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <CharityTestimonialSection />
        </Suspense>
        <CharityPartnersSection/>
      </main>
    </div>
  );
};

export default CharityPage;



// import React from 'react';
// import { 
//   CharityBanner, 
//   CharityDonationCTA, 
//   CharityEventsSection, 
//   CharityFunFactSection, 
//   CharityInfoSection, 
//   CharityPartnersSection, 
//   CharityPromotionSection, 
//   CharityServicesSection, 
//   CharitySliderSection, 
//   CharityTestimonialSection 
// } from '../components/charity/index.js';
// import '../styles/components/charity/Charity.css';
// import '../styles/components/charity/Charity.css';

// const CharityPage = () => {
//   return (
//     <div className="charity-page">
//       <CharityBanner />
//       <main className="charity-main-content">
//         <CharityInfoSection />
//         <CharityPromotionSection/>
//         <CharityServicesSection />
//         <CharityDonationCTA/>
//         <CharityEventsSection/>
//         <CharityFunFactSection />
//         <CharitySliderSection/>
//         <CharityTestimonialSection />
//         <CharityPartnersSection/>
//       </main>
//     </div>
//   );
// };

// export default CharityPage;