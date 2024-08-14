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
