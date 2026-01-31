import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Globe, Home, Paintbrush, Palette, Brush, Droplets, Building } from 'lucide-react';

const PaintingCascais = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const t = {
    en: {
      hero: { title: 'Professional Painting Services in Cascais', subtitle: 'Expert interior & exterior painting for coastal properties' },
      services: {
        title: 'Our Painting Services',
        items: [
          { icon: Home, title: 'Interior Painting', desc: 'Walls, ceilings, detailed finishing work' },
          { icon: Building, title: 'Exterior Painting', desc: 'Weather-resistant coating for coastal homes' },
          { icon: Palette, title: 'Decorative Finishes', desc: 'Textures, faux finishes, accent walls' },
          { icon: Brush, title: 'Wood Staining', desc: 'Doors, decks, furniture treatment' },
          { icon: Droplets, title: 'Anti-Mold Solutions', desc: 'Humidity-resistant paints for Cascais climate' },
          { icon: Paintbrush, title: 'Color Consultation', desc: 'Expert advice on colors and finishes' }
        ]
      }
    },
    pt: {
      hero: { title: 'Serviços Profissionais de Pintura em Cascais', subtitle: 'Pintura interior e exterior especializada para propriedades costeiras' },
      services: {
        title: 'Nossos Serviços de Pintura',
        items: [
          { icon: Home, title: 'Pintura Interior', desc: 'Paredes, tetos, trabalhos de acabamento' },
          { icon: Building, title: 'Pintura Exterior', desc: 'Revestimento resistente para casas costeiras' },
          { icon: Palette, title: 'Acabamentos Decorativos', desc: 'Texturas, acabamentos falsos, paredes destaque' },
          { icon: Brush, title: 'Tingimento de Madeira', desc: 'Tratamento de portas, decks, móveis' },
          { icon: Droplets, title: 'Soluções Anti-Mofo', desc: 'Tintas resistentes à humidade para Cascais' },
          { icon: Paintbrush, title: 'Consultoria de Cores', desc: 'Aconselhamento especializado em cores' }
        ]
      }
    }
  }[currentLang];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <header className="bg-black text-white py-4">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            <a href="/"><span className="text-white">OT</span><span className="text-blue-500"> Remodelações</span></a>
          </div>
          <button onClick={() => setCurrentLang(currentLang === 'en' ? 'pt' : 'en')} className="flex items-center gap-2">
            <Globe className="w-4 h-4" /> {currentLang.toUpperCase()}
          </button>
        </div>
      </header>

      <section className="bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white py-20">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <Paintbrush className="w-16 h-16 text-blue-500 mx-auto mb-6 animate-bounce" />
          <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{t.hero.title}</h1>
          <p className="text-xl mb-8">{t.hero.subtitle}</p>
          <a href="tel:+351919349310" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg inline-block">Get Quote</a>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>{t.services.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.services.items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-all">
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <a href="https://wa.me/351919349310" className="fixed bottom-6 right-6 bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
        <MessageSquare className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};

export default PaintingCascais;
