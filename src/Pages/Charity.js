import React from 'react';
import { CharityBanner, CharityDonationCTA, CharityInfoSection, CharityPromotionSection, CharityServicesSection } from '../components/charity/index.js';




const CharityPage = () => {
    return (
      <div>
        <CharityBanner />
        <CharityInfoSection />
        <CharityPromotionSection/>
        <CharityServicesSection />
        <CharityDonationCTA/>
      </div>
    );
  };
  
  export default CharityPage;