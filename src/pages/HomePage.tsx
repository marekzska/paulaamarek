import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { WavyText } from "@/components/WavyText";
import { OneWave } from "@/components/OneWave";
import React from "react";
import { MainText } from "@/components/MainText";
import { WhatsHappening } from "@/components/WhatsHappening";
import { UsSection } from "@/components/UsSection";
import { Where } from "@/components/Where";
import { Footer } from "@/components/Footer";

export const HomePage: React.FC = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <WavyText text="We're getting married" emoji="❤︎" />
      <MainText />
      <WhatsHappening />
      <UsSection />
      <Where />
      <OneWave text="RSVP" emoji="☟" />
      <Footer />
    </>
  );
};
