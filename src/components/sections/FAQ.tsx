import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import type { FAQItem } from '../../types';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: 'Atendimento',
      question: 'Como funciona o atendimento 24 horas da Coopstar Express?',
      answer:
        'Operamos de segunda a segunda-feira, 24 horas por dia. Para serviços fora do horário comercial (noites, madrugadas, sábados, domingos e feriados), realizamos o atendimento com agendamento prévio e hora marcada para garantir total segurança e pontualidade.',
    },
    {
      category: 'Regiões',
      question: 'Quais regiões são atendidas pelo serviço de moto frete?',
      answer:
        'Cobrimos 100% da cidade de São Paulo (Capital — com sede central em Moema), além da Região Metropolitana e Grande SP, incluindo o ABC Paulista (Santo André, São Bernardo, São Caetano), Osasco, Barueri, Alphaville, Guarulhos e municípios vizinhos.',
    },
    {
      category: 'Serviços',
      question: 'A empresa realiza serviços em cartórios, bancos e aeroportos?',
      answer:
        'Sim! Nossa equipe é especializada em serviços burocráticos: autenticações e reconhecimentos em cartórios, depósitos e despachos bancários de malotes, bem como despachos e retiradas urgentes nos Aeroportos de Congonhas (CGH) e Guarulhos (GRU).',
    },
    {
      category: 'Empresas',
      question: 'Como funciona o contrato e faturamento para empresas?',
      answer:
        'Oferecemos faturamento quinzenal ou mensal para clientes corporativos cadastrados. O serviço conta com relatório detalhado de todas as corridas executadas, além de tabela diferenciada para demandas de delivery (restaurantes, farmácias, auto peças e escritórios).',
    },
    {
      category: 'Agendamento',
      question: 'Como solicitar um motoboy imediatamente?',
      answer:
        'Você pode solicitar ligando diretamente para nossa central nos números (11) 5052-3563 / (11) 5051-4442, através de nosso WhatsApp oficial ou preenchendo o formulário de contato nesta página.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-slate-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-blue-400 bg-blue-950/80 border border-blue-800/40 px-4 py-1.5 rounded-full inline-flex items-center space-x-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Respostas para as principais dúvidas sobre nossos serviços de moto frete e logística.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center space-x-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white flex items-center space-x-3">
                    <span className="text-xs font-semibold text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded-md border border-blue-800/50">
                      {faq.category}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-400' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
