import React from 'react';
import { motion } from 'framer-motion';
import { Bike, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import type { ServiceItem } from '../../types';

interface ServicesProps {
  onOpenPricingModal: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenPricingModal }) => {
  const services: ServiceItem[] = [
    {
      id: 'moto-frete',
      title: 'Serviços de Moto Frete Expresso',
      category: 'Entregas Rápidas',
      badge: 'Mais Solicitado',
      description:
        'Entregas urgentes de documentos, malotes e pequenos volumes de um ponto a outro da cidade de São Paulo com total agilidade e rastreabilidade.',
      image: '/service-moto-frete.png',
      features: [
        'Documentos, exames e contratos',
        'Serviços bancários e malotes corporativos',
        'Cartórios e autenticações com agilidade',
        'Despachos e retiradas em Aeroportos (Congonhas/Guarulhos)',
      ],
    },
    {
      id: 'delivery',
      title: 'Delivery Corporativo & Comercial',
      category: 'Logística para Empresas',
      badge: 'Custo-Benefício',
      description:
        'Implantação de equipe dedicada de motoboys para empresas com alto volume de encomendas leves ou atendimento recorrente a clientes.',
      image: '/service-delivery-corporativo.png',
      features: [
        'Farmácias, Drogarias e Laboratórios',
        'Restaurantes, Pizzarias e Lanchonetes',
        'Auto Peças, Autocenter e Distribuidores',
        'E-commerce e escritórios corporativos',
      ],
    },
    {
      id: 'fora-capital',
      title: 'Serviços Fora da Capital',
      category: 'Intermunicipal & Região Metropolitana',
      badge: 'Tabela Especial',
      description:
        'Atendimento especializado para municípios da Grande São Paulo, ABC Paulista e cidades do interior com tabela exclusiva e hora marcada.',
      image: '/service-intermunicipal.png',
      features: [
        'Santo André, São Bernardo, São Caetano e Diadema',
        'Osasco, Barueri, Alphaville e Guarulhos',
        'Cidades do Interior com agendamento',
        'Retiradas expressas em portos e terminais',
      ],
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-blue-400 bg-blue-950/80 border border-blue-800/40 px-4 py-1.5 rounded-full inline-flex items-center space-x-2">
            <Bike className="w-3.5 h-3.5" />
            <span>Nossas Soluções Logísticas</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Serviços de Moto Frete Sob Medida
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Selecione o serviço ideal para a necessidade da sua empresa e conte com a eficiência da equipe <strong className="text-white">Coopstar Express</strong>.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/40 transition-all duration-300 shadow-xl flex flex-col group hover:-translate-y-1"
            >
              {/* Image Banner */}
              <div className="relative h-56 overflow-hidden bg-slate-950">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                
                {service.badge && (
                  <span className="absolute top-4 right-4 bg-blue-600/90 text-white text-xs font-bold px-3 py-1 rounded-full border border-blue-400/40 backdrop-blur-md shadow-md">
                    {service.badge}
                  </span>
                )}
                
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA inside Card */}
                <div className="pt-4">
                  <a
                    href="https://wa.me/551150523563?text=Olá!%20Gostaria%20de%20solicitar%20informações%20sobre%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white font-semibold py-3 px-4 rounded-xl text-xs transition-all duration-200"
                  >
                    <span>Solicitar Este Serviço</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Banner Highlight Box */}
        <div className="mt-16 bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 border border-blue-800/50 rounded-3xl p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-400">
              <Sparkles className="w-4 h-4" />
              <span>Transparência de Valores & Regiões</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Quer consultar a Tabela de Preços e Regiões Atendidas?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Temos planos e valores competitivos para entregas avulsas ou contrato corporativo em toda a Grande São Paulo.
            </p>
          </div>
          <button
            onClick={onOpenPricingModal}
            className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-sm shadow-lg shadow-blue-900/40 transition-all transform hover:-translate-y-0.5 flex items-center space-x-2"
          >
            <span>Ver Tabela Completa</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
