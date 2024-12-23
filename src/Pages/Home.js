
import React, { Suspense } from "react";
import {
  MissionStatement,
  WelcomeSection,
  ValuesSection,
  DonationSection,
  StoriesSection,
  FAQMainSection,
  LocationSection,
  ConnectSection,
  MissionVisionSection,
} from "../components";
import LoadingSpinner from "../utils/spinner/LoadingSpinner";
import TestimonialSection from "../components/HomeTestimonialSection";


const HomePage = ({ 
  BannerSection, 
  GallerySection, 
  MinistriesSection, 
  SermonSection 
}) => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <BannerSection />
      </Suspense>
      <MissionStatement />
      <MissionVisionSection/>
      <WelcomeSection />
      <Suspense fallback={<LoadingSpinner />}>
        <SermonSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <GallerySection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <MinistriesSection />
      </Suspense>
      <DonationSection />
      <StoriesSection />
      <TestimonialSection />
      <FAQMainSection />
      <LocationSection />
      <ConnectSection/>
    </>
  );
};

export default HomePage;

// import React from "react";
// import {
//   BannerSection,
//   BeliefsSection,
//   MissionStatement,
//   SermonSection,
//   WelcomeSection,
//   ValuesSection,
//   MinistriesSection,
//   DonationSection,
//   StoriesSection,
//   FAQMainSection,
//   LocationSection,
//   ConnectSection,
//   GallerySection,
//   MissionVisionSection,
// } from "../components";

// const HomePage = () => {
//   return (
//     <>
//       <BannerSection />
//       <MissionStatement />
//       <MissionVisionSection/>
//       <WelcomeSection />
//       <BeliefsSection />
//       <ValuesSection />
//       <SermonSection />
//       <GallerySection />
//       <MinistriesSection />
//       <DonationSection />
//       <StoriesSection />
//       <FAQMainSection />
//       <LocationSection />
//       <ConnectSection/>
//     </>
//   );
// };

// export default HomePage;
