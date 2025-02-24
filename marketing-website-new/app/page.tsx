"use client"

// page.tsx
import FAQSummaryAccordion from "@/components/custom/faq/FAQSummaryAccordion";
import { FeatureHighlights } from "@/components/custom/feature-section/FeatureHighlights";
import { InterfacePreview } from "@/components/custom/feature-section/InterfacePreview";
import FoundationsSection from "@/components/custom/foundation/FoundationsSection";
import HomeHeroSection from "@/components/custom/hero-section/HomeHeroSection";
import Reviews from "@/components/custom/stats/Review";
import StatsSection from "@/components/custom/stats/StatsSection";
import PageLayout from "@/layouts/PageLayout";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <PageLayout>
        <InterfacePreview />
        <StatsSection />
        <FeatureHighlights />
        <FoundationsSection />
        <Reviews />
        <FAQSummaryAccordion />
      </PageLayout>
    </>
  );
}