import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { mockData } from '../data/mockData';

export const Footer = () => {
  const { contact, socialMedia } = mockData;

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">SocialLab</h3>
            <p className="body-large text-gray-300 mb-6 max-w-md">
              Transformamos sua presença digital com landing pages otimizadas e gestão estratégica de redes sociais.
            </p>
            <div className="flex space-x-4">
              <a href={socialMedia.instagram} className="social-icon" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={socialMedia.linkedin} className="social-icon" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={socialMedia.facebook} className="social-icon" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <Link to="/" className="nav-link text-gray-300 hover:text-white block">
                Home
              </Link>
              <Link to="/sobre" className="nav-link text-gray-300 hover:text-white block">
                Sobre
              </Link>
              <Link to="/servicos" className="nav-link text-gray-300 hover:text-white block">
                Serviços
              </Link>
              <Link to="/contato" className="nav-link text-gray-300 hover:text-white block">
                Contato
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">{contact.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">{contact.phone}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <span className="text-gray-300 text-sm">{contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 SocialLab. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};