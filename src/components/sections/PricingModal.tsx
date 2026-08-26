import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageSquare } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose }) => {
  const [selectedZone, setSelectedZone] = useState<'capital' | 'grandeSp' | 'contrato'>('capital');

  if (!isOpen) return null;

  const capitalFeatures = [
    { title: 'Zona Sul / Moema / Vila Mariana', price: 'Consulte valor por Ponto', time: 'Até 45 min' },
    { title: 'Centro / Avenida Paulista / Jardins', price: 'Consulte valor por Ponto', time: 'Até 60 min' },
    { title: 'Zona Oeste / Pinheiros / Itaim', price: 'Consulte valor por Ponto', time: 'Até 60 min' },
    { title: 'Zona Norte & Zona Leste', price: 'Consulte valor por Ponto', time: 'Sob Consulta' },
    { title: 'Serviço de Cartório / Autenticações', price: 'Taxa fixa por espera', time: 'Horário comercial' },
    { title: 'Retiradas em Aeroportos (CGH/GRU)', price: 'Valor especial por volume', time: 'Atendimento 24h' },
  ];

  const grandeSpFeatures = [
    { title: 'ABC Paulista (Santo André, SBC, São Caetano)', price: 'Sob Tabela Especial', time: 'Programado' },
    { title: 'Osasco, Barueri, Alphaville & Carapicuíba', price: 'Sob Tabela Especial', time: 'Programado' },
    { title: 'Guarulhos & Arujá', price: 'Sob Tabela Especial', time: 'Programado' },
    { title: 'Cotia, Taboão da Serra & Embu das Artes', price: 'Sob Tabela Especial', time: 'Programado' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-slate-900 p-6 sm:p-8 border-b border-slate-800 flex justify-between items-start">
            <div className="space-y-1">
              <span className="text-xs uppercase font-extrabold tracking-widest text-blue-400">
                Tabela de Serviços & Cobertura
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Valores & Regiões Atendidas
              </h3>
              <p className="text-slate-300 text-sm">
                Consulte nossa tabela para São Paulo Capital, Grande SP e modalidades para empresas.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Tabs Navigation */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
              <button
                onClick={() => setSelectedZone('capital')}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  selectedZone === 'capital'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                São Paulo (Capital)
              </button>
              <button
                onClick={() => setSelectedZone('grandeSp')}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  selectedZone === 'grandeSp'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Grande SP & ABC
              </button>
              <button
                onClick={() => setSelectedZone('contrato')}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  selectedZone === 'contrato'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Planos para Empresas
              </button>
            </div>

            {/* Tab Content */}
            {selectedZone === 'capital' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {capitalFeatures.map((item, idx) => (
                    <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                      <div className="flex justify-between items-start">
                        <span className="text-sm font-bold text-white">{item.title}</span>
                        <span className="text-xs bg-blue-950 text-blue-300 px-2 py-0.5 rounded font-semibold">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedZone === 'grandeSp' && (
              <div className="space-y-4">
                <p className="text-sm text-slate-300">
                  Para entregas intermunicipais, trabalhamos com quilometragem e pontos de entrega programados.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {grandeSpFeatures.map((item, idx) => (
                    <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                      <div className="flex justify-between items-start">
                        <span className="text-sm font-bold text-white">{item.title}</span>
                        <span className="text-xs bg-blue-950 text-blue-300 px-2 py-0.5 rounded font-semibold">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedZone === 'contrato' && (
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                <h4 className="text-lg font-bold text-white">Contrato Mensal Corporativo de Moto Frete</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Oferecemos soluções sob medida com faturamento mensal para farmácias, escritórios de advocacia, laboratórios, autopeças e comércio em geral.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>Faturamento faturado via boleto</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>Relatório detalhado de pontos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>Motoboys treinados e uniformizados</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>Prioridade em chamadas 24h</span>
                  </li>
                </ul>
              </div>
            )}

            {/* Quick Action Footer in Modal */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-white">Precisa de um orçamento exato agora?</div>
                <div className="text-xs text-slate-400">Fale com um de nossos atendentes pela nossa central 24h</div>
              </div>
              <a
                href="https://wa.me/551150523563?text=Olá!%20Quero%20solicitar%20uma%20cotacao%20de%20moto%20frete."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Cotar via WhatsApp</span>
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
