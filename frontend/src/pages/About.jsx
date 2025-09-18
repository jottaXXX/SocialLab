import React from 'react';
import { Award, Users, Target, Zap } from 'lucide-react';
import { mockData } from '../data/mockData';

export const About = () => {
  const { team } = mockData;

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Foco em Resultados",
      description: "Cada projeto é desenvolvido com métricas claras e objetivos mensuráveis"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Parceria Verdadeira", 
      description: "Trabalhamos como extensão da sua equipe, não apenas como fornecedores"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Inovação Constante",
      description: "Sempre atualizados com as últimas tendências e tecnologias do mercado"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Qualidade Garantida",
      description: "Processos rigorosos e controle de qualidade em cada etapa do projeto"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="service-button social-media mb-6 inline-block">
              Nossa História
            </span>
            <h1 className="hero-heading mb-6">
              Conheça a SocialLab
            </h1>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Somos uma startup focada em transformar a presença digital de empresas através de estratégias inovadoras e resultados comprovados.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-heading mb-6">Nossa Missão</h2>
              <p className="body-large text-gray-600 mb-6">
                Democratizar o acesso a estratégias de marketing digital de alta qualidade, 
                permitindo que empresas de todos os tamanhos alcancem seu potencial máximo online.
              </p>
              <p className="body-medium text-gray-600 mb-8">
                Acreditamos que toda empresa merece uma presença digital forte e eficiente. 
                Por isso, combinamos tecnologia, criatividade e dados para criar soluções 
                que realmente impactam o crescimento dos nossos clientes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2021</div>
                  <div className="text-sm text-gray-600">Fundação da empresa</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
                  <div className="text-sm text-gray-600">Projetos entregues</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                alt="Equipe trabalhando"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-6">Nossos Valores</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Os princípios que guiam cada decisão e projeto da SocialLab
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center stagger-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-blue-600">{value.icon}</div>
                </div>
                <h3 className="card-heading mb-4">{value.title}</h3>
                <p className="body-medium text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-6">Nossa Equipe</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Conheça os profissionais por trás dos resultados da SocialLab
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={member.id} className="text-center stagger-item" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative mb-6">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <span className="service-button landing-pages">{member.role.split(' ')[0]}</span>
                  </div>
                </div>
                <h3 className="card-heading mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="body-medium text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-heading mb-6">Pronto para começar?</h2>
          <p className="body-large text-gray-300 mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos ajudar sua empresa a crescer online
          </p>
          <button className="cta-button large bg-white text-black border-white hover:bg-gray-100">
            Fale Conosco
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;