import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Bike } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-slate-900 p-2 rounded-xl border border-slate-800">
                <img
                  src="/logotipo.png"
                  alt="Coopstar Express Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Empresa especializada no serviço de entregas e coletas de moto frete há mais de 9 anos no mercado. Agilidade, segurança e eficiência 24 horas por dia em São Paulo e Grande SP.
            </p>
            <div className="text-xs text-slate-300 font-semibold flex items-center space-x-2">
              <Bike className="w-4 h-4 text-blue-400" />
              <span>Atendimento 24h de Segunda a Segunda</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-blue-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#quem-somos" className="hover:text-blue-400 transition-colors">Quem Somos</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-blue-400 transition-colors">Nossos Serviços</a>
              </li>
              <li>
                <a href="#processo" className="hover:text-blue-400 transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors">Perguntas Frequentes</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-blue-400 transition-colors">Contato & Localização</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Central de Atendimento
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>(11) 5052-3563 / (11) 5051-4442</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:coopstar_express@hotmail.com" className="hover:text-white transition-colors">
                  coopstar_express@hotmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Av. Jurucê, 898 - Moema - São Paulo - SP</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights & Studio Recognition */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div>
            © {new Date().getFullYear()} Coopstar Express — Todos os direitos reservados.
          </div>

          <div className="flex items-center space-x-6">
            <span>
              Desenvolvimento:{' '}
              <a
                href="http://www.estudiocriarte.com.br/promohotsite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-semibold"
              >
                Estúdio Criarte
              </a>
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
