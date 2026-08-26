import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Clock, MapPin, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Quem Somos', href: '#quem-somos' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Como Funciona', href: '#processo' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-blue-800/50 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>Atendimento 24 Horas (Segunda a Segunda)</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Av. Jurucê, 898 - Moema - São Paulo/SP</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="tel:1150523563" 
              className="text-blue-400 hover:text-white transition-colors flex items-center space-x-1 font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(11) 5052-3563</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href="tel:1150514442" 
              className="text-slate-300 hover:text-white transition-colors"
            >
              (11) 5051-4442
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3'
            : 'bg-slate-950/70 backdrop-blur-sm py-4 border-b border-slate-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center space-x-3 group">
            <div className="bg-slate-900/80 p-2 rounded-xl border border-slate-700/50 group-hover:border-blue-500/50 transition-all shadow-md">
              <img
                src="/logotipo.png"
                alt="Coopstar Express Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-blue-400 text-sm font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/551150523563?text=Olá!%20Gostaria%20de%20solicitar%20um%20serviço%20de%20moto%20frete."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-blue-900/30 hover:shadow-blue-600/40 transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>Pedir Moto Frete</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none"
              aria-label="Abrir menu principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-slate-900/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-lg text-slate-200 hover:bg-slate-800 hover:text-blue-400 font-medium text-base transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <a
                  href="tel:1150523563"
                  className="flex items-center justify-center space-x-2 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold shadow-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Ligar Agora: (11) 5052-3563</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
