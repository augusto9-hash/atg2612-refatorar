import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, MapPin, Users, ShieldCheck, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Award,
      title: 'Mais de 9 Anos de Atuação',
      description: 'Tradição, confiabilidade e know-how comprovado no setor de transporte expresso em SP.',
    },
    {
      icon: Clock,
      title: 'Operação 24 Horas',
      description: 'Funcionamos de segunda a segunda, com agendamentos programados e hora marcada.',
    },
    {
      icon: MapPin,
      title: 'Capital e Região Metropolitana',
      description: 'Ampla cobertura em São Paulo (Capital), ABC e municípios da Grande São Paulo.',
    },
    {
      icon: Users,
      title: 'Equipe Qualificada',
      description: 'Profissionais de moto frete altamente treinados e comprometidos com a segurança do seu volume.',
    },
  ];

  return (
    <section id="quem-somos" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-blue-400 bg-blue-950/60 border border-blue-800/40 px-3.5 py-1.5 rounded-full">
            Quem Somos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Excelência e Agilidade no Transporte de Moto Frete
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Conheça a história e o compromisso da <strong className="text-white">Coopstar Express</strong> com a eficiência do seu negócio.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: About Text & Pillars */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-3">
                <ShieldCheck className="w-6 h-6 text-blue-400 shrink-0" />
                <span>Agilizando a logística da sua empresa com inteligência</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-base">
                A <strong>Coopstar Express</strong> é uma empresa especializada no serviço de entregas e coletas e já atua há <strong>mais de nove anos no mercado</strong>. Oferecemos serviços de alta performance e desempenhamos um papel estratégico para nossos clientes: agilizar os mais diversos fluxos logísticos e administrativos, consolidando-nos como referência em moto frete em São Paulo.
              </p>
              <p className="text-slate-300 leading-relaxed text-base">
                Atendemos toda a cidade de <strong>São Paulo (Capital) e Grande São Paulo</strong>, contando com uma equipe rigorosamente selecionada e treinada para suprir a necessidade diária de sua empresa e garantir o êxito de cada entrega.
              </p>

              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300 font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Atendimento avulso ou contrato</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Entregas em cartórios e aeroportos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Serviços bancários e malotes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Faturamento facilitado para empresas</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Highlights Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-950/80 hover:bg-slate-950 border border-slate-800 hover:border-blue-500/40 rounded-xl p-5 transition-all duration-300 shadow-md group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-blue-950/80 text-blue-400 border border-blue-800/50 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
