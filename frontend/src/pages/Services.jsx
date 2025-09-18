import React from 'react';
import { Check, ArrowRight, MonitorSpeaker, Share2, BarChart3, Palette } from 'lucide-react';

export const Services = () => {
  const detailedServices = [
    {
      id: 1,
      title: "Landing Pages de Alta Conversão",
      description: "Desenvolvemos páginas otimizadas para converter visitantes em leads e clientes.",
      icon: <MonitorSpeaker className="h-12 w-12" />,
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
      bgColor: "light-pink",
      features: [
        "Design responsivo e moderno",
        "Otimização para SEO",
        "Formulários integrados",
        "Análise de performance",
        "Testes A/B inclusos",
        "Garantia de conversão"
      ],
      pricing: "A partir de R$ 2.500"
    },
    {
      id: 2,
      title: "Gestão Completa de Social Media",
      description: "Criamos e gerenciamos conteúdo estratégico para suas redes sociais.",
      icon: <Share2 className="h-12 w-12" />,
      image: "https://images.unsplash.com/photo-1683721003111-070bcc053d8b",
      bgColor: "mid-blue",
      features: [
        "Estratégia de conteúdo personalizada",
        "Criação de posts e stories",
        "Gerenciamento de comunidade",
        "Relatórios mensais detalhados",
        "Campanhas pagas (ads)",
        "Análise de concorrência"
      ],
      pricing: "A partir de R$ 1.800/mês"
    },
    {
      id: 3,
      title: "Consultoria em Marketing Digital",
      description: "Análise completa e estratégias personalizadas para seu negócio.",
      icon: <BarChart3 className="h-12 w-12" />,
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
      bgColor: "mid-purple",
      features: [
        "Auditoria digital completa",
        "Plano estratégico personalizado",
        "Análise de concorrência",
        "Definição de personas",
        "Métricas e KPIs",
        "Acompanhamento mensal"
      ],
      pricing: "A partir de R$ 3.500"
    },
    {
      id: 4,
      title: "Identidade Visual Digital",
      description: "Criação de marca forte e consistente para o ambiente digital.",
      icon: <Palette className="h-12 w-12" />,
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      bgColor: "light-yellow",
      features: [
        "Logo e identidade visual",
        "Paleta de cores digital",
        "Templates para redes sociais",
        "Manual de marca",
        "Aplicações em materiais",
        "Revisões incluídas"
      ],
      pricing: "A partir de R$ 2.000"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Descoberta",
      description: "Entendemos seu negócio, objetivos e desafios únicos"
    },
    {
      step: "02", 
      title: "Estratégia",
      description: "Criamos um plano personalizado baseado em dados e melhores práticas"
    },
    {
      step: "03",
      title: "Execução",
      description: "Implementamos as soluções com foco na qualidade e prazos"
    },
    {
      step: "04",
      title: "Otimização",
      description: "Monitoramos resultados e fazemos ajustes para máxima performance"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="service-button social-media mb-6 inline-block">
              Nossos Serviços
            </span>
            <h1 className="hero-heading mb-6">
              Soluções Completas para seu Crescimento Digital
            </h1>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Oferecemos um portfólio completo de serviços de marketing digital, 
              desde landing pages até estratégias completas de crescimento online.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {detailedServices.map((service, index) => (
              <div key={service.id} className={`stagger-item ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row items-center gap-16`}>
                <div className="flex-1">
                  <div className="mb-6">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${
                      service.bgColor === 'light-pink' ? 'bg-pink-100 text-pink-600' :
                      service.bgColor === 'mid-blue' ? 'bg-blue-100 text-blue-600' :
                      service.bgColor === 'mid-purple' ? 'bg-purple-100 text-purple-600' :
                      'bg-yellow-100 text-yellow-600'
                    }`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  <h2 className="section-heading mb-6">{service.title}</h2>
                  <p className="body-large text-gray-600 mb-8">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="body-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{service.pricing}</span>
                    </div>
                    <button className="cta-button group">
                      Solicitar Orçamento
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
                
                <div className="flex-1">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="rounded-2xl shadow-lg w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-6">Nosso Processo</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Uma metodologia comprovada para garantir resultados excepcionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center stagger-item relative" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="card-heading mb-4">{item.title}</h3>
                <p className="body-medium text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-heading mb-6">Perguntas Frequentes</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "Qual o prazo para entrega de uma landing page?",
                  a: "Normalmente entre 7 a 14 dias úteis, dependendo da complexidade do projeto."
                },
                {
                  q: "Vocês trabalham com empresas de todos os tamanhos?",
                  a: "Sim! Atendemos desde startups até grandes corporações, adaptando nossa abordagem para cada cliente."
                },
                {
                  q: "Como funciona o acompanhamento dos resultados?",
                  a: "Fornecemos relatórios mensais detalhados com métricas de performance e insights estratégicos."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-3">{faq.q}</h4>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-heading mb-6">Pronto para começar seu projeto?</h2>
          <p className="body-large text-gray-300 mb-8 max-w-2xl mx-auto">
            Solicite uma consulta gratuita e descubra como podemos impulsionar seu negócio
          </p>
          <button className="cta-button large bg-white text-black border-white hover:bg-gray-100">
            Solicitar Consulta Gratuita
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;