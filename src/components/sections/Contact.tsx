import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import type { ContactFormData } from '../../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: 'Moto Frete Expresso',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service_type: formData.serviceType,
          subject: formData.subject || 'Contato via Site Coopstar Express',
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          serviceType: 'Moto Frete Expresso',
        });
      } else {
        setError(result.message || 'Ocorreu um erro ao enviar a mensagem. Tente novamente.');
      }
    } catch {
      setError('Erro de conexão ao enviar a mensagem. Por favor, tente novamente ou ligue diretamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-blue-400 bg-blue-950/80 border border-blue-800/40 px-4 py-1.5 rounded-full inline-block">
            Atendimento 24h & Localização
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Fale Com A Coopstar Express
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Solicite seu orçamento, agende uma coleta ou tire suas dúvidas com nossa equipe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Cards & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-lg space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3.5 rounded-xl bg-blue-600 text-white shadow-md">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Telefones 24h</h3>
                  <div className="text-xl font-bold text-white mt-0.5">
                    (11) 5052-3563 / 5051-4442
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400">
                Atendimento telefônico ininterrupto de segunda a segunda para emergências e agendamentos.
              </p>
            </div>

            {/* Address & Email Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-lg space-y-4">
              <div className="flex items-start space-x-4">
                <div className="p-3.5 rounded-xl bg-sky-600 text-white shadow-md shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-sky-400 uppercase tracking-wider">Endereço Principal</h3>
                  <p className="text-base font-bold text-white mt-0.5">
                    Av. Jurucê, 898 - Moema
                  </p>
                  <p className="text-xs text-slate-300">São Paulo - SP • CEP 04080-002</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href="mailto:coopstar_express@hotmail.com"
                  className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors"
                >
                  coopstar_express@hotmail.com
                </a>
              </div>
            </div>

            {/* Interactive Map Container */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-lg h-64 relative group">
              <iframe
                title="Mapa de Localização Coopstar Express Moema"
                src="https://maps.google.com/maps?q=Av.%20Juruc%C3%AA%20898,%20Moema,%20S%C3%A3o%20Paulo,%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-semibold text-white">
                📍 Sede Moema - São Paulo
              </div>
            </div>

          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="mb-6 space-y-1">
              <h3 className="text-2xl font-bold text-white">Envie uma Mensagem</h3>
              <p className="text-slate-300 text-sm">
                Preencha o formulário abaixo e retornaremos rapidamente.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-blue-950/60 border border-blue-800 rounded-2xl p-8 text-center space-y-4 my-8"
              >
                <CheckCircle2 className="w-12 h-12 text-blue-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">Mensagem Enviada com Sucesso!</h4>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Agradecemos o contato. Nossa equipe da Coopstar Express analisará sua solicitação e entrará em contato em breve.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-xs transition-colors"
                >
                  Enviar Nova Mensagem
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-4 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-300 text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome ou da empresa"
                      className="w-full bg-slate-900 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seuemail@empresa.com"
                      className="w-full bg-slate-900 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="w-full bg-slate-900 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Tipo de Serviço
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                    >
                      <option value="Moto Frete Expresso">Moto Frete Expresso</option>
                      <option value="Delivery Corporativo">Delivery Corporativo</option>
                      <option value="Fora da Capital / Intermunicipal">Fora da Capital / Intermunicipal</option>
                      <option value="Contrato de Mensalista">Contrato Mensalista para Empresa</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Ex: Cotação de entrega urgente para Moema"
                    className="w-full bg-slate-900 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva o serviço, pontos de coleta e entrega ou horário desejado..."
                    className="w-full bg-slate-900 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-xl text-base shadow-lg shadow-blue-900/30 transition-all"
                >
                  {loading ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Solicitação</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
