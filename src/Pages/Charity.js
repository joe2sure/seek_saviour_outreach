import React from 'react';
import { CharityBanner, CharityInfoSection, CharityPromotionSection } from '../components/charity/index.js';
// import { CharityBanner } from '../components/charity';



const CharityPage = () => {
    return (
      <div>
        <CharityBanner />
        <CharityInfoSection />
        <CharityPromotionSection/>
      </div>
    );
  };
  
  export default CharityPage;