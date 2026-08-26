import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Navigation, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: PhoneCall,
      title: 'Solicitação do Serviço',
      description: 'Ligue para nossa central (11 5052-3563) ou solicite online informando os dados da coleta e entrega.',
    },
    {
      step: '02',
      icon: Navigation,
      title: 'Despacho Imediato',
      description: 'Acionamos o motoboy mais próximo na Capital ou Grande SP para efetuar a coleta com agilidade.',
    },
    {
      step: '03',
      icon: ShieldCheck,
      title: 'Transporte Seguro',
      description: 'Seu malote ou encomenda é acondicionado em compartimento lacrado com total proteção e cuidado.',
    },
    {
      step: '04',
      icon: CheckCircle2,
      title: 'Entrega & Confirmação',
      description: 'Finalização do serviço no destino com protocolo assinado e confirmação imediata para sua empresa.',
    },
  ];

  return (
    <section id="processo" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-blue-400 bg-blue-950/80 border border-blue-800/40 px-4 py-1.5 rounded-full inline-block">
            Fluxo de Atendimento
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Como Funciona Nosso Processo
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Eficiência e simplicidade do primeiro contato até a confirmação final da sua entrega.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-slate-950 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 relative group transition-all duration-300 shadow-lg flex flex-col justify-between"
              >
                {/* Step Number Tag */}
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-700 group-hover:text-blue-500/40 transition-colors">
                    {item.step}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-900 flex items-center text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                  <span>Passo {item.step} de 04</span>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 ml-auto hidden lg:block text-slate-700 group-hover:text-blue-400" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
