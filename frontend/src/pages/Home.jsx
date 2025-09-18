import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CTASection } from '../components/CTASection';

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;