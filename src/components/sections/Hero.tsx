import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenPricingModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPricingModal }) => {
  return (
    <section id="inicio" className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-slate-950">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Headline & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-950/80 border border-blue-700/40 px-4 py-2 rounded-full text-blue-400 text-xs sm:text-sm font-semibold shadow-inner">
              <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
              <span>Líder em Moto Frete em São Paulo e Grande SP</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Moto Frete <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">24h de Excelência</span> & Agilidade Garantida
            </h1>

            {/* Paragraph Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Há mais de <strong className="text-white font-semibold">9 anos no mercado</strong>, a Coopstar Express é sua parceira ideal para transporte rápido de documentos, serviços bancários, cartórios e delivery corporativo com hora marcada.
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span>Atendimento 24/7 de Segunda a Segunda</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span>Agendamento com Hora Marcada</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span>Cobertura Capital e Grande São Paulo</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span>Planos para Empresas & Avulso</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contato"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-xl text-base shadow-xl shadow-blue-900/40 hover:shadow-blue-600/50 transition-all transform hover:-translate-y-0.5"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Solicitar Coleta Agora</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <button
                onClick={onOpenPricingModal}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-600 font-semibold px-6 py-4 rounded-xl text-base transition-all"
              >
                <span>Consultar Regiões & Preços</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column - Hero Visual Card / Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-sky-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-100 transition duration-1000"></div>

              {/* Main Visual Container */}
              <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
                
                {/* Visual Header Image Preview */}
                <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-800 border border-slate-700/60 group">
                  <img
                    src="/hero-motoboy.png"
                    alt="Serviços Moto Frete Coopstar Express"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <span className="text-xs uppercase font-bold tracking-wider text-blue-400">Coopstar Express</span>
                      <h3 className="text-lg font-bold text-white">Moema • Capital • SP</h3>
                    </div>
                    <span className="bg-blue-600/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-blue-400/40">
                      Disponível 24h
                    </span>
                  </div>
                </div>

                {/* Key Metrics Stats Grid */}
                <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                  <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                    <div className="text-2xl font-extrabold text-blue-400">9+</div>
                    <div className="text-[11px] text-slate-400 mt-1 uppercase font-semibold tracking-wider">Anos no Mercado</div>
                  </div>
                  <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                    <div className="text-2xl font-extrabold text-sky-400">24h</div>
                    <div className="text-[11px] text-slate-400 mt-1 uppercase font-semibold tracking-wider">Atendimento</div>
                  </div>
                  <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                    <div className="text-2xl font-extrabold text-emerald-400">100%</div>
                    <div className="text-[11px] text-slate-400 mt-1 uppercase font-semibold tracking-wider">Pontualidade</div>
                  </div>
                </div>

                {/* Direct Phone Highlight Card */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-blue-950/40 border border-blue-800/40">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-blue-600 text-white shadow-md">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-300 font-medium">Central de Chamadas 24h</div>
                      <div className="text-base font-bold text-white">(11) 5052-3563</div>
                    </div>
                  </div>
                  <a
                    href="tel:1150523563"
                    className="text-xs font-semibold text-blue-400 hover:text-white underline underline-offset-4"
                  >
                    Ligar
                  </a>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
