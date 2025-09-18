import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const CTASection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    "Avaliação gratuita do seu projeto",
    "Proposta personalizada em 24h", 
    "Suporte técnico especializado",
    "Garantia de satisfação"
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="stagger-item">
            <span className="service-button social-media mb-6 inline-block">
              Comece Agora
            </span>
          </div>
          
          <div className="stagger-item">
            <h2 className="hero-heading mb-6">
              Quer transformar sua presença digital?
            </h2>
          </div>
          
          <div className="stagger-item">
            <p className="body-large text-gray-300 mb-8 max-w-2xl mx-auto">
              Descubra como a SocialLab pode ajudar seu negócio a crescer online com estratégias comprovadas e resultados mensuráveis.
            </p>
          </div>

          {/* Benefits List */}
          <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-left">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="body-medium text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="stagger-item flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={scrollToContact}
              className="cta-button large group bg-white text-black border-white hover:bg-gray-100"
            >
              Fale com a SocialLab
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            
            <div className="flex items-center text-gray-300">
              <span className="body-small">✨ Sem compromisso</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-400 mb-4">Confiado por empresas de todos os tamanhos</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-lg font-semibold">TechStart</div>
              <div className="text-lg font-semibold">EcoMundo</div>
              <div className="text-lg font-semibold">InnovaCorp</div>
              <div className="text-lg font-semibold">DigitalPro</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};