import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { PricingModal } from './components/sections/PricingModal';
import { MessageCircle } from 'lucide-react';

export function App() {
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white flex flex-col font-sans">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenPricingModal={() => setIsPricingModalOpen(true)} />
        <About />
        <Services onOpenPricingModal={() => setIsPricingModalOpen(true)} />
        <Process />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Pricing & Regions Interactive Modal */}
      <PricingModal
        isOpen={isPricingModalOpen}
        onClose={() => setIsPricingModalOpen(false)}
      />

      {/* Floating Action Button (WhatsApp Direct) */}
      <a
        href="https://wa.me/551150523563?text=Olá!%20Gostaria%20de%20solicitar%20um%20serviço%20de%20moto%20frete."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-400 text-white p-4 rounded-full shadow-2xl shadow-emerald-900/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Falar pelo WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold pl-0 group-hover:pl-2">
          Pedir Moto Frete
        </span>
      </a>
    </div>
  );
}

export default App;
