import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { mockData } from '../data/mockData';

export const HeroSection = () => {
  const { hero } = mockData;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section fade-in">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${hero.backgroundImage})`,
        }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay" />
      
      {/* Content */}
      <div className="hero-content text-center z-10 relative max-w-4xl mx-auto px-4">
        <div className="stagger-item">
          <span className="service-button social-media mb-6 inline-block">
            Digital Marketing
          </span>
        </div>
        
        <div className="stagger-item">
          <h1 className="hero-heading text-white mb-6">
            {hero.headline}
          </h1>
        </div>
        
        <div className="stagger-item">
          <p className="body-large text-gray-200 mb-8 max-w-2xl mx-auto">
            {hero.subheadline}
          </p>
        </div>
        
        <div className="stagger-item flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={scrollToContact}
            className="cta-button large group"
          >
            {hero.ctaText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button className="flex items-center text-white hover:text-blue-300 transition-colors">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3 hover:bg-white/30 transition-colors">
              <Play className="h-5 w-5 ml-1" />
            </div>
            <span className="body-medium">Ver nosso trabalho</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};