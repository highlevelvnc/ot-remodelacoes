import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageSquare, MapPin, Star, CheckCircle, ArrowRight, Menu, X, Globe, Home, Paintbrush, Bath, UtensilsCrossed, Sofa, Building2, Sparkles, Award } from 'lucide-react';

const RenovationsCascais = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const titles = {
      en: 'Expert Home Renovations in Cascais | Complete Remodeling Services',
      pt: 'Remodelações Especializadas em Cascais | Serviços Completos'
    };
    document.title = titles[currentLang];
  }, [currentLang]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const subject = encodeURIComponent(`Renovation Quote Request from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: Home Renovations in Cascais\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:info@otremodelacoes.pt?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const t = {
    en: {
      nav: { home: 'Home', services: 'Services', why: 'Why Us', faq: 'FAQ', contact: 'Contact' },
      hero: { title: 'Expert Home Renovations in Cascais', subtitle: 'Transform your property with complete renovation services', cta1: 'Get Free Quote', cta2: 'Call Now' },
      services: {
        title: 'Our Renovation Services',
        items: [
          { icon: Home, title: 'Complete Renovations', desc: 'Full home transformations from concept to completion' },
          { icon: UtensilsCrossed, title: 'Kitchen Remodeling', desc: 'Modern kitchens with premium materials and smart layouts' },
          { icon: Bath, title: 'Bathroom Renovations', desc: 'Luxurious bathrooms with quality fixtures and elegant design' },
          { icon: Sofa, title: 'Living Spaces', desc: 'Open-concept designs and modern living room transformations' },
          { icon: Building2, title: 'Commercial Projects', desc: 'Professional renovation services for offices and businesses' },
          { icon: Paintbrush, title: 'Interior Design', desc: 'Custom design solutions tailored to your unique vision' }
        ]
      },
      why: {
        title: 'Why Choose OT Remodelações',
        items: [
          { icon: Award, title: '8+ Years Experience', desc: 'Proven track record in Cascais' },
          { icon: CheckCircle, title: 'Premium Quality', desc: 'European materials, expert craftsmen' },
          { icon: Sparkles, title: 'Complete Transparency', desc: 'Clear quotes, regular updates' },
          { icon: Home, title: 'On-Time Delivery', desc: 'Efficient execution, respect your schedule' }
        ]
      },
      faq: {
        title: 'Renovation FAQs',
        items: [
          { q: 'How much does a renovation cost in Cascais?', a: 'Kitchen renovations: €8,000-€25,000. Bathrooms: €5,000-€15,000. Complete homes: €30,000-€100,000+. We provide detailed itemized quotes.' },
          { q: 'How long does a renovation take?', a: 'Bathrooms: 2-4 weeks. Kitchens: 3-6 weeks. Complete homes: 2-6 months. We provide realistic schedules upfront.' },
          { q: 'Do you handle permits?', a: 'Yes, we manage all necessary permits and legal documentation required by Cascais municipality.' }
        ]
      },
      contact: { title: 'Ready to Transform Your Home?', subtitle: 'Get your free renovation consultation', name: 'Your Name', email: 'Email', phone: 'Phone', message: 'Tell us about your project', submit: 'Request Free Consultation' }
    },
    pt: {
      nav: { home: 'Início', services: 'Serviços', why: 'Porquê Nós', faq: 'FAQ', contact: 'Contacto' },
      hero: { title: 'Remodelações Especializadas em Cascais', subtitle: 'Transforme a sua propriedade com serviços completos de remodelação', cta1: 'Orçamento Grátis', cta2: 'Ligue Já' },
      services: {
        title: 'Nossos Serviços de Remodelação',
        items: [
          { icon: Home, title: 'Remodelações Completas', desc: 'Transformações completas do conceito à conclusão' },
          { icon: UtensilsCrossed, title: 'Remodelação de Cozinhas', desc: 'Cozinhas modernas com materiais premium e layouts inteligentes' },
          { icon: Bath, title: 'Remodelação de Casas de Banho', desc: 'Casas de banho luxuosas com acabamentos de qualidade' },
          { icon: Sofa, title: 'Espaços de Estar', desc: 'Designs em conceito aberto e transformações modernas' },
          { icon: Building2, title: 'Projetos Comerciais', desc: 'Serviços profissionais para escritórios e negócios' },
          { icon: Paintbrush, title: 'Design de Interiores', desc: 'Soluções personalizadas adaptadas à sua visão' }
        ]
      },
      why: {
        title: 'Porquê Escolher a OT Remodelações',
        items: [
          { icon: Award, title: '8+ Anos de Experiência', desc: 'Histórico comprovado em Cascais' },
          { icon: CheckCircle, title: 'Qualidade Premium', desc: 'Materiais europeus, artesãos especializados' },
          { icon: Sparkles, title: 'Transparência Total', desc: 'Orçamentos claros, atualizações regulares' },
          { icon: Home, title: 'Entrega Pontual', desc: 'Execução eficiente, respeitamos prazos' }
        ]
      },
      faq: {
        title: 'Perguntas sobre Remodelações',
        items: [
          { q: 'Quanto custa uma remodelação em Cascais?', a: 'Cozinhas: €8.000-€25.000. Casas de banho: €5.000-€15.000. Casas completas: €30.000-€100.000+. Fornecemos orçamentos detalhados.' },
          { q: 'Quanto tempo demora uma remodelação?', a: 'Casas de banho: 2-4 semanas. Cozinhas: 3-6 semanas. Casas completas: 2-6 meses. Fornecemos cronogramas realistas.' },
          { q: 'Tratam de licenças?', a: 'Sim, gerimos todas as licenças e documentação legal necessárias pela câmara de Cascais.' }
        ]
      },
      contact: { title: 'Pronto para Transformar a Sua Casa?', subtitle: 'Peça a sua consulta gratuita', name: 'O Seu Nome', email: 'Email', phone: 'Telefone', message: 'Fale-nos sobre o seu projeto', submit: 'Pedir Consulta Grátis' }
    }
  }[currentLang];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <header className="bg-black text-white shadow-sm sticky top-0 z-40 backdrop-blur-md bg-opacity-95">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              <a href="/"><span className="text-white">OT</span><span className="text-blue-500"> Remodelações</span></a>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              {Object.values(t.nav).map((label, idx) => (
                <a key={idx} href={`#${Object.keys(t.nav)[idx]}`} className="text-gray-300 hover:text-blue-500 transition-all">{label}</a>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <button onClick={() => setShowLangDropdown(!showLangDropdown)} className="flex items-center gap-1 text-gray-300 hover:text-blue-500">
                <Globe className="w-4 h-4" />
                {currentLang.toUpperCase()}
              </button>
              {showLangDropdown && (
                <div className="absolute right-0 mt-2 bg-gray-900 rounded-lg shadow-xl">
                  <button onClick={() => { setCurrentLang('pt'); setShowLangDropdown(false); }} className="block px-4 py-2 text-white hover:bg-gray-800">PT</button>
                  <button onClick={() => { setCurrentLang('en'); setShowLangDropdown(false); }} className="block px-4 py-2 text-white hover:bg-gray-800">EN</button>
                </div>
              )}
              <button onClick={scrollToContact} className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">{t.hero.cta1}</button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden"><Menu className="w-6 h-6" /></button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white py-20">
        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex justify-center gap-4">
              <Home className="w-12 h-12 text-blue-500 animate-bounce" />
              <Paintbrush className="w-12 h-12 text-blue-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
            <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{t.hero.title}</h1>
            <p className="text-xl text-gray-300 mb-8">{t.hero.subtitle}</p>
            <div className="flex gap-4 justify-center">
              <button onClick={scrollToContact} className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg">{t.hero.cta1}</button>
              <a href="tel:+351919349310" className="border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-black">{t.hero.cta2}</a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>{t.services.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl hover:shadow-2xl transition-all hover:-translate-y-2">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="why" className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>{t.why.title}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {t.why.items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-gray-800 p-6 rounded-xl">
                  <Icon className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>{t.faq.title}</h2>
          {t.faq.items.map((item, idx) => (
            <details key={idx} className="bg-gray-50 rounded-xl p-6 mb-4">
              <summary className="font-bold cursor-pointer">{item.q}</summary>
              <p className="text-gray-600 mt-4">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{t.contact.title}</h2>
          <p className="text-center mb-12">{t.contact.subtitle}</p>
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 space-y-4">
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder={t.contact.name} required className="w-full px-4 py-3 rounded-lg border-2 text-black" />
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder={t.contact.email} required className="w-full px-4 py-3 rounded-lg border-2 text-black" />
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder={t.contact.phone} required className="w-full px-4 py-3 rounded-lg border-2 text-black" />
            <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder={t.contact.message} required className="w-full px-4 py-3 rounded-lg border-2 text-black h-32"></textarea>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold">{t.contact.submit}</button>
          </form>
        </div>
      </section>

      <a href="https://wa.me/351919349310" className="fixed bottom-6 right-6 bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-bounce">
        <MessageSquare className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};

export default RenovationsCascais;
