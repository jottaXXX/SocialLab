import React from 'react';
import { Star, Quote } from 'lucide-react';
import { mockData } from '../data/mockData';

export const TestimonialsSection = () => {
  const { testimonials } = mockData;

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-6">O que nossos clientes dizem</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Resultados reais de empresas que confiaram na SocialLab
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`stagger-item bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-blue-400" />
              </div>

              {/* Testimonial Text */}
              <blockquote className="body-medium text-gray-700 mb-6 leading-relaxed">
                "{testimonial.feedback}"
              </blockquote>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="stagger-item">
            <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-gray-600">Projetos Entregues</div>
          </div>
          <div className="stagger-item">
            <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-600">Clientes Satisfeitos</div>
          </div>
          <div className="stagger-item">
            <div className="text-4xl font-bold text-green-600 mb-2">3x</div>
            <div className="text-gray-600">Aumento Médio em Conversões</div>
          </div>
        </div>
      </div>
    </section>
  );
};