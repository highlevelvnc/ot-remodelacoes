import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageSquare, MapPin, Star, CheckCircle, ArrowRight, Menu, X, Globe, Hammer, Wrench, Lightbulb, Droplet, Sofa, Shield, Clock, Award } from 'lucide-react';

const HandymanCascais = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const titles = {
      en: 'Professional Handyman Services in Cascais | OT Remodelações',
      pt: 'Serviços Profissionais de Marido de Aluguel em Cascais | OT Remodelações'
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
    setFormStatus({ type: '', message: '' });

    try {
      const subject = encodeURIComponent(`Handyman Service Request from ${formData.name}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: Handyman Services in Cascais

Message:
${formData.message}
      `);
      
      window.location.href = `mailto:info@otremodelacoes.pt?subject=${subject}&body=${body}`;

      setFormStatus({
        type: 'success',
        message: currentLang === 'en' 
          ? 'Thank you! Your email client should open shortly.' 
          : 'Obrigado! O seu cliente de email deve abrir em breve.'
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setFormStatus({ type: '', message: '' }), 5000);
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: currentLang === 'en' 
          ? 'Something went wrong. Please call us directly.' 
          : 'Algo correu mal. Por favor ligue-nos directamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const t = {
    en: {
      nav: { home: 'Home', services: 'Services', why: 'Why Us', faq: 'FAQ', contact: 'Contact' },
      hero: {
        title: 'Professional Handyman Services in Cascais',
        subtitle: 'Expert repairs, installations & maintenance for your Cascais home',
        cta1: 'Get Free Quote',
        cta2: 'Call Now'
      },
      services: {
        title: 'Our Handyman Services in Cascais',
        subtitle: 'From minor repairs to complete installations',
        items: [
          { icon: Wrench, title: 'General Repairs', desc: 'Doors, windows, locks, handles, and all household fixtures' },
          { icon: Lightbulb, title: 'Electrical Work', desc: 'Light fixtures, switches, outlets, and minor electrical repairs' },
          { icon: Droplet, title: 'Plumbing Fixes', desc: 'Leaky faucets, toilets, drains, and basic plumbing work' },
          { icon: Sofa, title: 'Furniture Assembly', desc: 'IKEA furniture, shelving units, and custom installations' },
          { icon: Hammer, title: 'Wall Mounting', desc: 'TVs, shelves, mirrors, artwork, and heavy fixtures' },
          { icon: Shield, title: 'Property Maintenance', desc: 'Regular maintenance checks and preventive repairs' }
        ]
      },
      why: {
        title: 'Why Choose Our Handyman Services',
        items: [
          { icon: CheckCircle, title: 'Fast Response', desc: 'Same-day service available in Cascais' },
          { icon: Award, title: 'Expert Team', desc: '8+ years serving Cascais homeowners' },
          { icon: Clock, title: 'Flexible Schedule', desc: 'Evening and weekend appointments' },
          { icon: Shield, title: 'Guaranteed Work', desc: 'All work covered by our quality guarantee' }
        ]
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          { q: 'How much does a handyman cost in Cascais?', a: 'Our rates start from €35/hour depending on the job. We provide free quotes with transparent pricing.' },
          { q: 'What areas in Cascais do you cover?', a: 'We serve all of Cascais including Estoril, Carcavelos, Parede, and surrounding areas.' },
          { q: 'Do you provide same-day service?', a: 'Yes! We offer same-day emergency service for urgent repairs in Cascais.' },
          { q: 'Are you licensed and insured?', a: 'Absolutely. We are fully licensed and insured for all handyman work in Portugal.' },
          { q: 'What payment methods do you accept?', a: 'We accept cash, bank transfer, MBWay, and credit cards for your convenience.' },
          { q: 'Do you offer guarantees on your work?', a: 'Yes, all our work comes with a quality guarantee and we stand behind every job.' }
        ]
      },
      contact: {
        title: 'Need a Handyman in Cascais?',
        subtitle: 'Get your free quote today - fast, reliable service',
        name: 'Your Name',
        email: 'Email',
        phone: 'Phone',
        message: 'What do you need help with?',
        submit: 'Request Free Quote'
      }
    },
    pt: {
      nav: { home: 'Início', services: 'Serviços', why: 'Porquê Nós', faq: 'FAQ', contact: 'Contacto' },
      hero: {
        title: 'Serviços Profissionais de Marido de Aluguel em Cascais',
        subtitle: 'Reparações especializadas, instalações e manutenção para a sua casa em Cascais',
        cta1: 'Orçamento Grátis',
        cta2: 'Ligue Já'
      },
      services: {
        title: 'Nossos Serviços de Marido de Aluguel em Cascais',
        subtitle: 'Desde pequenas reparações até instalações completas',
        items: [
          { icon: Wrench, title: 'Reparações Gerais', desc: 'Portas, janelas, fechaduras, puxadores e todas as fixações domésticas' },
          { icon: Lightbulb, title: 'Trabalhos Elétricos', desc: 'Luminárias, interruptores, tomadas e pequenas reparações elétricas' },
          { icon: Droplet, title: 'Reparações de Canalização', desc: 'Torneiras com fugas, sanitas, ralos e trabalhos básicos de canalização' },
          { icon: Sofa, title: 'Montagem de Móveis', desc: 'Móveis IKEA, estantes e instalações personalizadas' },
          { icon: Hammer, title: 'Fixação em Paredes', desc: 'TVs, prateleiras, espelhos, obras de arte e fixações pesadas' },
          { icon: Shield, title: 'Manutenção de Propriedades', desc: 'Verificações regulares de manutenção e reparações preventivas' }
        ]
      },
      why: {
        title: 'Porquê Escolher os Nossos Serviços',
        items: [
          { icon: CheckCircle, title: 'Resposta Rápida', desc: 'Serviço no mesmo dia disponível em Cascais' },
          { icon: Award, title: 'Equipa Especializada', desc: '8+ anos ao serviço de Cascais' },
          { icon: Clock, title: 'Horário Flexível', desc: 'Marcações à noite e fim de semana' },
          { icon: Shield, title: 'Trabalho Garantido', desc: 'Todo o trabalho coberto pela nossa garantia de qualidade' }
        ]
      },
      faq: {
        title: 'Perguntas Frequentes',
        items: [
          { q: 'Quanto custa um marido de aluguel em Cascais?', a: 'As nossas tarifas começam a partir de €35/hora dependendo do trabalho. Fornecemos orçamentos gratuitos com preços transparentes.' },
          { q: 'Que áreas em Cascais cobrem?', a: 'Servimos todo Cascais incluindo Estoril, Carcavelos, Parede e áreas circundantes.' },
          { q: 'Fornecem serviço no mesmo dia?', a: 'Sim! Oferecemos serviço de emergência no mesmo dia para reparações urgentes em Cascais.' },
          { q: 'Estão licenciados e segurados?', a: 'Absolutamente. Estamos totalmente licenciados e segurados para todo o trabalho em Portugal.' },
          { q: 'Que métodos de pagamento aceitam?', a: 'Aceitamos dinheiro, transferência bancária, MBWay e cartões de crédito.' },
          { q: 'Oferecem garantias no vosso trabalho?', a: 'Sim, todo o nosso trabalho vem com garantia de qualidade e defendemos cada trabalho.' }
        ]
      },
      contact: {
        title: 'Precisa de um Marido de Aluguel em Cascais?',
        subtitle: 'Peça o seu orçamento grátis hoje - serviço rápido e confiável',
        name: 'O Seu Nome',
        email: 'Email',
        phone: 'Telefone',
        message: 'Com o que precisa de ajuda?',
        submit: 'Pedir Orçamento Grátis'
      }
    }
  }[currentLang];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <header className="bg-black text-white shadow-sm sticky top-0 z-40 backdrop-blur-md bg-opacity-95">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold transition-transform duration-300 hover:scale-105" style={{ fontFamily: "'Playfair Display', serif" }}>
              <a href="/"><span className="text-white">OT</span><span className="text-blue-500"> Remodelações</span></a>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              {Object.values(t.nav).map((label, idx) => (
                <a key={idx} href={`#${Object.keys(t.nav)[idx]}`} className="text-gray-300 hover:text-blue-500 transition-all duration-300 relative group">
                  {label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <div className="relative">
                <button onClick={() => setShowLangDropdown(!showLangDropdown)} className="flex items-center gap-1 text-gray-300 hover:text-blue-500 transition-all duration-300 px-3 py-1 rounded hover:bg-gray-900">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{currentLang.toUpperCase()}</span>
                </button>
                {showLangDropdown && (
                  <div className="absolute right-0 mt-2 bg-gray-900 rounded-lg shadow-xl border border-gray-700 py-2 min-w-[100px] z-50">
                    <button onClick={() => { setCurrentLang('pt'); setShowLangDropdown(false); }} className={`block w-full text-left px-4 py-2 hover:bg-gray-800 transition ${currentLang === 'pt' ? 'text-blue-500 bg-gray-800' : 'text-white'}`}>PT</button>
                    <button onClick={() => { setCurrentLang('en'); setShowLangDropdown(false); }} className={`block w-full text-left px-4 py-2 hover:bg-gray-800 transition ${currentLang === 'en' ? 'text-blue-500 bg-gray-800' : 'text-white'}`}>EN</button>
                  </div>
                )}
              </div>

              <a href="tel:+351919349310" className="hidden md:flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-all duration-300">
                <Phone className="w-4 h-4 animate-pulse" />
              </a>

              <button onClick={scrollToContact} className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
                {t.hero.cta1}
              </button>

              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white transition-transform duration-300 hover:scale-110">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-800 animate-[slideDown_0.3s_ease-out]">
              {Object.values(t.nav).map((label, idx) => (
                <a key={idx} href={`#${Object.keys(t.nav)[idx]}`} className="block py-2 text-gray-300 hover:text-blue-500 transition-all duration-300 hover:pl-2" onClick={() => setIsMenuOpen(false)}>{label}</a>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white py-20 overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-blue-900/80"></div>
        </div>
        
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse z-0"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse z-0" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-screen-xl mx-auto px-4 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex justify-center gap-4">
              <Hammer className="w-12 h-12 text-blue-500 animate-bounce" />
              <Wrench className="w-12 h-12 text-blue-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
              <Shield className="w-12 h-12 text-blue-500 animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={scrollToContact} className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center justify-center gap-2">
                  {t.hero.cta1}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <a href="tel:+351919349310" className="group bg-transparent hover:bg-white hover:text-black text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-medium text-center transition-all duration-300 hover:scale-105">
                <span className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  {t.hero.cta2}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{t.services.title}</h2>
            <p className="text-lg text-gray-600">{t.services.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{t.why.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.why.items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105">
                  <Icon className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{t.faq.title}</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {t.faq.items.map((item, idx) => {
              const [isOpen, setIsOpen] = useState(false);
              return (
                <div key={idx} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                  <button onClick={() => setIsOpen(!isOpen)} className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-300">
                    <span className="font-bold text-black pr-4">{item.q}</span>
                    <span className="text-2xl text-blue-600 flex-shrink-0">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{t.contact.title}</h2>
            <p className="text-lg text-gray-300">{t.contact.subtitle}</p>
          </div>

          <div className="max-w-xl mx-auto bg-white rounded-xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder={t.contact.name} required className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 outline-none text-black transition-all duration-300" />
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder={t.contact.email} required className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 outline-none text-black transition-all duration-300" />
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder={t.contact.phone} required className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 outline-none text-black transition-all duration-300" />
              <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder={t.contact.message} required className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 outline-none text-black h-32 transition-all duration-300"></textarea>
              
              {formStatus.message && (
                <div className={`p-4 rounded-lg ${formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {formStatus.message}
                </div>
              )}

              <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {isSubmitting ? (currentLang === 'en' ? 'Sending...' : 'Enviando...') : t.contact.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a href="https://wa.me/351919349310" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-40 transition-all duration-300 hover:scale-110 animate-bounce">
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
};

export default HandymanCascais;
