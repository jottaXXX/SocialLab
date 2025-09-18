import React from 'react';
import { MonitorSpeaker, Share2, ArrowRight } from 'lucide-react';
import { mockData } from '../data/mockData';

export const ServicesSection = () => {
  const { services } = mockData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'MonitorSpeaker':
        return <MonitorSpeaker className="h-8 w-8" />;
      case 'Share2':
        return <Share2 className="h-8 w-8" />;
      default:
        return <MonitorSpeaker className="h-8 w-8" />;
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-6">Nossos Serviços</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital e conquistar mais clientes
          </p>
        </div>

        <div className="portfolio-grid">
          {services.map((service, index) => (
            <div key={service.id} className={`grid-item stagger-item`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`project-card ${service.bgColor} h-full group cursor-pointer`}>
                {/* Service Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    service.bgColor === 'mid-blue' ? 'bg-white/20' : 'bg-black/10'
                  }`}>
                    {getIcon(service.icon)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="card-heading mb-4 group-hover:underline transition-all">
                    {service.title}
                  </h3>
                  <p className={`body-medium mb-6 ${
                    service.bgColor === 'mid-blue' ? 'text-white/80' : 'text-black/70'
                  }`}>
                    {service.description}
                  </p>
                </div>

                {/* Service Image */}
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-32 object-cover transition-transform group-hover:scale-105"
                  />
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className={`service-button ${service.id === 1 ? 'landing-pages' : 'social-media'}`}>
                    Saiba Mais
                  </span>
                  <ArrowRight className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${
                    service.bgColor === 'mid-blue' ? 'text-white' : 'text-black'
                  }`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MonitorSpeaker className="h-6 w-6 text-purple-600" />
            </div>
            <h4 className="font-semibold mb-2">SEO Otimizado</h4>
            <p className="text-sm text-gray-600">Páginas otimizadas para aparecer no Google</p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Share2 className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="font-semibold mb-2">Análise de Dados</h4>
            <p className="text-sm text-gray-600">Relatórios detalhados de performance</p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MonitorSpeaker className="h-6 w-6 text-green-600" />
            </div>
            <h4 className="font-semibold mb-2">Suporte 24/7</h4>
            <p className="text-sm text-gray-600">Atendimento especializado sempre disponível</p>
          </div>
        </div>
      </div>
    </section>
  );
};