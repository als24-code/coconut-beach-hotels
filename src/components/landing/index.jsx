"use client";

import { HeroSection } from "./HeroSection";
import {
  experience_section,
  explore_section,
  hero_section,
  hotels_section,
} from "@/data/landing";
import HotelsSection from "./HotelsSection";
import ExploreSection from "./ExploreSection";
import ExperienceSection from "./ExperiencesSection";
import { useLayoutEffect, useRef } from "react";
import { animateSection } from "@/animations/motion/section";

export const LandingPage = () => {
  const sectionRef = useRef(null);
  useLayoutEffect(() => {
    animateSection(sectionRef.current);
  }, []);
  return (
    <div data-scroll-container>
      <HeroSection data={hero_section} />
      <HotelsSection ref={sectionRef} data={hotels_section} />
      <ExploreSection data={explore_section} />
      <ExperienceSection data={experience_section} />
    </div>
  );
};
