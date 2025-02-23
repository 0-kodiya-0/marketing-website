"use client"

import FeatureSummary from "./components/feature/FeatureSummary";
import FoundationsSection from "./components/foundation/FoundationsSection";
import HeroSection from "./components/hero/Hero";
import StatsSection from "./components/stats/StatsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeatureSummary />
      <FoundationsSection />
    </>
  );
}
