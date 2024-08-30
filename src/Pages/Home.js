import React from "react";
import {
  BannerSection,
  BeliefsSection,
  MissionStatement,
  SermonSection,
  WelcomeSection,
  ValuesSection,
  MinistriesSection,
  DonationSection,
  StoriesSection,
  FAQMainSection,
  LocationSection,
  ConnectSection,
  GallerySection,
} from "../components";

const HomePage = () => {
  return (
    <>
      <BannerSection />
      <MissionStatement />
      <WelcomeSection />
      <BeliefsSection />
      <ValuesSection />
      <SermonSection />
      <GallerySection />
      <MinistriesSection />
      <DonationSection />
      <StoriesSection />
      <FAQMainSection />
      <LocationSection />
      <ConnectSection/>
    </>
  );
};

export default HomePage;
