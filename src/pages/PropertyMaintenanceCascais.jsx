import React, { useState } from 'react';
import { Phone, MessageSquare, Globe, Building2, ClipboardCheck, Key, Users, Calendar, FileText } from 'lucide-react';

const PropertyMaintenanceCascais = () => {
  const [currentLang, setCurrentLang] = useState('en');

  const t = {
    en: {
      hero: { title: 'Professional Property Maintenance in Cascais', subtitle: 'Maximize rental income with expert property management' },
      services: {
        title: 'Property Management Services',
        items: [
          { icon: Building2, title: 'Multi-Property Care', desc: 'Portfolio management for landlords' },
          { icon: Key, title: 'Rental Properties', desc: 'Long-term and vacation rental maintenance' },
          { icon: ClipboardCheck, title: 'Property Inspections', desc: 'Detailed condition assessments' },
          { icon: Users, title: 'Tenant Coordination', desc: 'Professional communication and scheduling' },
          { icon: Calendar, title: 'Preventive Programs', desc: 'Customized maintenance schedules' },
          { icon: FileText, title: 'Reporting', desc: 'Comprehensive photo reports for owners' }
        ]
      }
    },
    pt: {
      hero: { title: 'Manutenção Profissional de Imóveis em Cascais', subtitle: 'Maximize rendimento com gestão especializada' },
      services: {
        title: 'Serviços de Gestão de Imóveis',
        items: [
          { icon: Building2, title: 'Gestão de Múltiplos Imóveis', desc: 'Gestão de carteira para proprietários' },
          { icon: Key, title: 'Propriedades de Arrendamento', desc: 'Manutenção de longo prazo e férias' },
          { icon: ClipboardCheck, title: 'Inspeções de Propriedades', desc: 'Avaliações detalhadas da condição' },
          { icon: Users, title: 'Coordenação com Inquilinos', desc: 'Comunicação e agendamento profissional' },
          { icon: Calendar, title: 'Programas Preventivos', desc: 'Cronogramas de manutenção personalizados' },
          { icon: FileText, title: 'Relatórios', desc: 'Relatórios fotográficos abrangentes' }
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
          <Building2 className="w-16 h-16 text-blue-500 mx-auto mb-6 animate-bounce" />
          <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{t.hero.title}</h1>
          <p className="text-xl mb-8">{t.hero.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>{t.services.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.services.items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-lg">
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

export default PropertyMaintenanceCascais;
