import React, { useState } from 'react';
import { Phone, MessageSquare, Globe, Shield, Wrench, Zap, Droplet, Wind, Settings } from 'lucide-react';

const HomeMaintenanceCascais = () => {
  const [currentLang, setCurrentLang] = useState('en');

  const t = {
    en: {
      hero: { title: 'Professional Home Maintenance in Cascais', subtitle: 'Protect your coastal property with expert preventive care' },
      services: {
        title: 'Maintenance Services',
        items: [
          { icon: Shield, title: 'Preventive Maintenance', desc: 'Regular inspections to prevent costly repairs' },
          { icon: Zap, title: 'Electrical Maintenance', desc: 'Safety checks and system optimization' },
          { icon: Droplet, title: 'Plumbing Care', desc: 'Leak detection and preventive maintenance' },
          { icon: Wind, title: 'HVAC Service', desc: 'AC maintenance and filter changes' },
          { icon: Settings, title: 'General Upkeep', desc: 'Door, window, and hardware maintenance' },
          { icon: Wrench, title: 'Emergency Repairs', desc: '24/7 availability for urgent issues' }
        ]
      }
    },
    pt: {
      hero: { title: 'Manutenção Residencial Profissional em Cascais', subtitle: 'Proteja a sua propriedade costeira com cuidados preventivos' },
      services: {
        title: 'Serviços de Manutenção',
        items: [
          { icon: Shield, title: 'Manutenção Preventiva', desc: 'Inspeções regulares para prevenir reparações' },
          { icon: Zap, title: 'Manutenção Elétrica', desc: 'Verificações de segurança e otimização' },
          { icon: Droplet, title: 'Cuidados de Canalização', desc: 'Deteção de fugas e manutenção preventiva' },
          { icon: Wind, title: 'Serviço AVAC', desc: 'Manutenção AC e mudança de filtros' },
          { icon: Settings, title: 'Conservação Geral', desc: 'Manutenção de portas, janelas e ferragens' },
          { icon: Wrench, title: 'Reparações de Emergência', desc: 'Disponibilidade 24/7 para problemas urgentes' }
        ]
      }
    }
  }[currentLang];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <header className="bg-black text-white py-4">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            <a href="/"><span>OT</span><span className="text-blue-500"> Remodelações</span></a>
          </div>
          <button onClick={() => setCurrentLang(currentLang === 'en' ? 'pt' : 'en')}>
            <Globe className="w-4 h-4" /> {currentLang.toUpperCase()}
          </button>
        </div>
      </header>

      <section className="bg-gradient-to-br from-black to-blue-900 text-white py-20">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <Shield className="w-16 h-16 text-blue-500 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{t.hero.title}</h1>
          <p className="text-xl mb-8">{t.hero.subtitle}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>{t.services.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.services.items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-gray-50 p-8 rounded-xl">
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <a href="https://wa.me/351919349310" className="fixed bottom-6 right-6 bg-green-500 w-14 h-14 rounded-full flex items-center justify-center">
        <MessageSquare className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};

export default HomeMaintenanceCascais;
