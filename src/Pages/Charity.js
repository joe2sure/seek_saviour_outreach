import React from 'react';
import { CharityBanner, CharityDonationCTA, CharityEventsSection, CharityFunFactSection, CharityInfoSection, CharityPartnersSection, CharityPromotionSection, CharityServicesSection, CharitySliderSection, CharityTestimonialSection } from '../components/charity/index.js';




const CharityPage = () => {
    return (
      <div>
        <CharityBanner />
        <CharityInfoSection />
        <CharityPromotionSection/>
        <CharityServicesSection />
        <CharityDonationCTA/>
        <CharityEventsSection/>
        <CharityFunFactSection />
        <CharitySliderSection/>
        <CharityTestimonialSection />
        <CharityPartnersSection/>
      </div>
    );
  };
  
  export default CharityPage;