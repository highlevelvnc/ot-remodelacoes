import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MessageSquare, MapPin, Star, CheckCircle, ArrowRight, Menu, X, Globe, Hammer, Home, Paintbrush, Award, Shield, Clock, Target, Zap, Heart, Sparkles, Image as ImageIcon, ExternalLink, Send } from 'lucide-react';

const OTRemodelacoes = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    // Update document title and create favicon
    const titles = {
      en: 'OT Remodelações - Premium Home Renovations in Cascais, Portugal | Kitchen & Bathroom Remodeling',
      pt: 'OT Remodelações - Remodelações Premium em Cascais, Portugal | Cozinhas e Casas de Banho'
    };
    document.title = titles[currentLang];

    // Create favicon
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    // Black background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 64, 64);
    
    // Blue text "OT"
    ctx.fillStyle = '#3B82F6';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('OT', 32, 32);
    
    // Set favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = canvas.toDataURL();
    document.getElementsByTagName('head')[0].appendChild(link);

    // Meta tags for SEO
    const metaDescription = currentLang === 'en' 
      ? 'Professional home renovation services in Cascais, Portugal. Expert kitchen remodeling, bathroom renovations, interior design. Licensed contractors with 8+ years experience. Free quotes available.'
      : 'Serviços profissionais de remodelação em Cascais, Portugal. Especialistas em cozinhas, casas de banho, design de interiores. Licenciados com 8+ anos de experiência. Orçamentos grátis.';
    
    let metaTag = document.querySelector('meta[name="description"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.name = 'description';
      document.head.appendChild(metaTag);
    }
    metaTag.content = metaDescription;

    // Google Fonts
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // Meta Pixel
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', '1917693765489352');
    window.fbq('track', 'PageView');

    // Google Tag Manager
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MML8GGLN');

    // Loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [currentLang]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`New Quote Request from ${formData.name}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

---
This inquiry was submitted via OT Remodelações website.
      `);
      
      // Open default email client
      window.location.href = `mailto:info@otremodelacoes.pt?subject=${subject}&body=${body}`;

      // Show success message
      setFormStatus({
        type: 'success',
        message: currentLang === 'en' 
          ? 'Thank you! Your email client should open shortly. We will contact you soon!' 
          : 'Obrigado! O seu cliente de email deve abrir em breve. Entraremos em contacto em breve!'
      });

      // Track conversion
      if (window.fbq) {
        window.fbq('track', 'Lead');
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      setTimeout(() => {
        setFormStatus({ type: '', message: '' });
      }, 5000);

    } catch (error) {
      setFormStatus({
        type: 'error',
        message: currentLang === 'en' 
          ? 'Something went wrong. Please try calling us directly.' 
          : 'Algo correu mal. Por favor ligue-nos directamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Portfolio data
  const portfolioProjects = [
    {
      id: 1,
      category: 'kitchen',
      title: { en: 'Modern Kitchen - Cascais', pt: 'Cozinha Moderna - Cascais' },
      description: { en: 'Complete kitchen renovation with custom cabinetry', pt: 'Remodelação completa de cozinha com armários personalizados' },
      image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80',
      location: 'Cascais Centro',
      year: '2024'
    },
    {
      id: 2,
      category: 'bathroom',
      title: { en: 'Luxury Bathroom - Estoril', pt: 'Casa de Banho Luxo - Estoril' },
      description: { en: 'High-end bathroom with marble finishes', pt: 'Casa de banho premium com acabamentos em mármore' },
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
      location: 'Estoril',
      year: '2024'
    },
    {
      id: 3,
      category: 'living',
      title: { en: 'Living Room Transformation', pt: 'Transformação de Sala' },
      description: { en: 'Modern open-concept living space', pt: 'Espaço de estar moderno em conceito aberto' },
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
      location: 'Carcavelos',
      year: '2024'
    },
    {
      id: 4,
      category: 'kitchen',
      title: { en: 'Contemporary Kitchen Design', pt: 'Design de Cozinha Contemporânea' },
      description: { en: 'Sleek design with integrated appliances', pt: 'Design elegante com eletrodomésticos integrados' },
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
      location: 'Parede',
      year: '2023'
    },
    {
      id: 5,
      category: 'bathroom',
      title: { en: 'Spa-Style Bathroom', pt: 'Casa de Banho Estilo Spa' },
      description: { en: 'Tranquil retreat with premium fixtures', pt: 'Refúgio tranquilo com acabamentos premium' },
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80',
      location: 'São João do Estoril',
      year: '2023'
    },
    {
      id: 6,
      category: 'commercial',
      title: { en: 'Office Renovation', pt: 'Remodelação de Escritório' },
      description: { en: 'Professional workspace transformation', pt: 'Transformação de espaço de trabalho profissional' },
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
      location: 'Cascais',
      year: '2023'
    },
    {
      id: 7,
      category: 'living',
      title: { en: 'Coastal Living Room', pt: 'Sala Costeira' },
      description: { en: 'Bright and airy coastal design', pt: 'Design costeiro claro e arejado' },
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
      location: 'Cascais',
      year: '2024'
    },
    {
      id: 8,
      category: 'kitchen',
      title: { en: 'Family Kitchen', pt: 'Cozinha Familiar' },
      description: { en: 'Functional and beautiful family space', pt: 'Espaço familiar funcional e bonito' },
      image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80',
      location: 'Estoril',
      year: '2023'
    },
    {
      id: 9,
      category: 'full',
      title: { en: 'Complete Home Renovation', pt: 'Remodelação Completa' },
      description: { en: 'Full house transformation', pt: 'Transformação completa da casa' },
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      location: 'Cascais',
      year: '2024'
    }
  ];

  const categories = {
    en: [
      { id: 'all', label: 'All Projects', icon: Home },
      { id: 'kitchen', label: 'Kitchens', icon: Hammer },
      { id: 'bathroom', label: 'Bathrooms', icon: Sparkles },
      { id: 'living', label: 'Living Spaces', icon: Heart },
      { id: 'commercial', label: 'Commercial', icon: Target },
      { id: 'full', label: 'Full Renovations', icon: Award }
    ],
    pt: [
      { id: 'all', label: 'Todos os Projetos', icon: Home },
      { id: 'kitchen', label: 'Cozinhas', icon: Hammer },
      { id: 'bathroom', label: 'Casas de Banho', icon: Sparkles },
      { id: 'living', label: 'Salas', icon: Heart },
      { id: 'commercial', label: 'Comercial', icon: Target },
      { id: 'full', label: 'Remodelações Completas', icon: Award }
    ]
  };

  const testimonials = {
    en: [
      { text: 'OT Remodelações transformed our kitchen into a modern masterpiece!', author: 'Maria Silva', location: 'Cascais Centro', project: 'Kitchen Renovation' },
      { text: 'Smooth process. Completed on time and within budget!', author: 'João Pereira', location: 'Estoril', project: 'Bathroom Renovation' },
      { text: 'Outstanding attention to detail. Our home looks incredible!', author: 'Patricia Rodrigues', location: 'Cascais', project: 'Full Home Renovation' },
      { text: 'Professional team, quality materials, excellent communication.', author: 'Carlos Mendes', location: 'Parede', project: 'Interior Design' },
      { text: 'Exceeded expectations! Worth every euro.', author: 'Ana Costa', location: 'Carcavelos', project: 'Kitchen & Bathroom' },
      { text: 'Everything was perfect. Respectful and professional.', author: 'Miguel Santos', location: 'São João do Estoril', project: 'Commercial Renovation' }
    ],
    pt: [
      { text: 'A OT Remodelações transformou a nossa cozinha numa obra-prima moderna!', author: 'Maria Silva', location: 'Cascais Centro', project: 'Remodelação de Cozinha' },
      { text: 'Processo tranquilo. Concluído no prazo e dentro do orçamento!', author: 'João Pereira', location: 'Estoril', project: 'Remodelação de Casa de Banho' },
      { text: 'Atenção excepcional aos detalhes. A nossa casa está incrível!', author: 'Patricia Rodrigues', location: 'Cascais', project: 'Remodelação Completa' },
      { text: 'Equipa profissional, materiais de qualidade, excelente comunicação.', author: 'Carlos Mendes', location: 'Parede', project: 'Design de Interiores' },
      { text: 'Superou as expectativas! Valeu cada euro.', author: 'Ana Costa', location: 'Carcavelos', project: 'Cozinha e Casa de Banho' },
      { text: 'Tudo perfeito. Respeitosos e profissionais.', author: 'Miguel Santos', location: 'São João do Estoril', project: 'Remodelação Comercial' }
    ]
  };

  const filteredProjects = selectedCategory === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory);

  const t = {
    en: {
      nav: { home: 'Home', services: 'Services', about: 'About', portfolio: 'Portfolio', contact: 'Contact' },
      hero: {
        title: 'Premium Home Renovations in Cascais, Portugal',
        subtitle: 'Transform your space with expert craftsmanship, transparent pricing, and guaranteed quality.',
        cta1: 'Get Your Free Quote',
        cta2: 'Call Us Today'
      },
      portfolio: {
        title: 'Our Work',
        subtitle: 'Explore our completed projects across Cascais',
        viewProject: 'View Project',
        noProjects: 'No projects found in this category'
      },
      stats: {
        title: 'Trusted by Cascais Homeowners',
        subtitle: 'Over 8 years of excellence in Cascais. Join hundreds of satisfied homeowners who trusted us.',
        years: 'Years of Excellence',
        projects: 'Completed Projects',
        satisfaction: 'Client Satisfaction',
        licensed: 'Licensed & Insured',
        team: 'Expert Team',
        growth: 'Annual Growth',
        thisMonth: 'This Month',
        completedWorks: 'Completed Works',
        reviews: '100+ Reviews',
        certifiedSince: 'Certified Since 2017'
      },
      whyUs: {
        title: 'Why Choose OT Remodelações',
        subtitle: 'What sets us apart from other renovation companies in Cascais',
        items: [
          { title: 'Premium Quality', desc: 'We use only the finest materials from trusted European suppliers and employ master craftsmen' },
          { title: 'Complete Transparency', desc: 'Clear, detailed quotes with no hidden fees. Regular updates throughout your project' },
          { title: 'On-Time Delivery', desc: 'Carefully planned timelines and efficient execution. We respect your schedule' },
          { title: 'Local Expertise', desc: 'Deep knowledge of Cascais properties and local building codes' },
          { title: 'Dedicated Support', desc: '24/7 project manager availability and post-completion support' },
          { title: 'Innovation', desc: 'Latest techniques and sustainable materials with smart home integration' }
        ]
      },
      process: {
        title: 'Our Simple Process',
        subtitle: 'From vision to reality in 4 simple steps',
        steps: [
          { title: 'Free Consultation', desc: 'We visit your property and discuss your vision' },
          { title: 'Detailed Quote', desc: 'Transparent pricing with no hidden costs' },
          { title: 'Expert Execution', desc: 'Daily updates and quality control' },
          { title: 'Final Handover', desc: 'Your satisfaction guaranteed' }
        ]
      },
      testimonials: {
        title: 'What Our Clients Say',
        subtitle: 'Real reviews from real projects'
      },
      contact: {
        title: 'Ready to Transform Your Cascais Home?',
        subtitle: 'Get your free quote today',
        namePlaceholder: 'Your Name',
        emailPlaceholder: 'Email',
        phonePlaceholder: 'Phone',
        messagePlaceholder: 'Tell us about your project',
        submit: 'Send Quote Request'
      },
      footer: {
        tagline: 'Premium renovations in Cascais, Portugal',
        services: 'Services',
        servicesList: [
          'Full Home Renovations',
          'Kitchen Remodeling',
          'Bathroom Renovations',
          'Interior Design',
          'Commercial Projects'
        ],
        company: 'Company',
        companyLinks: ['Home', 'About Us', 'Our Services', 'Portfolio', 'Contact'],
        contact: 'Contact',
        whatsapp: 'WhatsApp',
        rights: '© 2025 OT Remodelações. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        cookies: 'Cookie Policy'
      },
      cookie: {
        message: 'We use cookies to improve your experience.',
        accept: 'Accept',
        reject: 'Reject'
      },
      loading: {
        title: 'OT Remodelações',
        subtitle: 'Premium Renovations in Cascais'
      }
    },
    pt: {
      nav: { home: 'Início', services: 'Serviços', about: 'Sobre', portfolio: 'Portfólio', contact: 'Contacto' },
      hero: {
        title: 'Remodelações Premium em Cascais, Portugal',
        subtitle: 'Transforme o seu espaço com mestria artesanal, preços transparentes e qualidade garantida.',
        cta1: 'Peça o Seu Orçamento Grátis',
        cta2: 'Ligue Já'
      },
      portfolio: {
        title: 'O Nosso Trabalho',
        subtitle: 'Explore os nossos projetos concluídos em Cascais',
        viewProject: 'Ver Projeto',
        noProjects: 'Nenhum projeto encontrado nesta categoria'
      },
      stats: {
        title: 'A Confiança de Cascais',
        subtitle: 'Mais de 8 anos de excelência em Cascais. Junte-se a centenas de proprietários satisfeitos que confiaram em nós.',
        years: 'Anos de Excelência',
        projects: 'Projetos Concluídos',
        satisfaction: 'Satisfação do Cliente',
        licensed: 'Licenciados e Segurados',
        team: 'Equipa Especializada',
        growth: 'Crescimento Anual',
        thisMonth: 'Este Mês',
        completedWorks: 'Obras Realizadas',
        reviews: '100+ Avaliações',
        certifiedSince: 'Certificados desde 2017'
      },
      whyUs: {
        title: 'Porquê Escolher a OT Remodelações',
        subtitle: 'O que nos distingue das outras empresas de remodelação em Cascais',
        items: [
          { title: 'Qualidade Premium', desc: 'Usamos apenas os melhores materiais de fornecedores europeus de confiança e empregamos mestres artesãos' },
          { title: 'Transparência Total', desc: 'Orçamentos claros e detalhados sem taxas ocultas. Atualizações regulares durante o seu projeto' },
          { title: 'Entrega Pontual', desc: 'Cronogramas cuidadosamente planeados e execução eficiente. Respeitamos o seu horário' },
          { title: 'Especialização Local', desc: 'Conhecimento profundo das propriedades de Cascais e códigos de construção locais' },
          { title: 'Apoio Dedicado', desc: 'Disponibilidade 24/7 do gestor de projeto e suporte pós-conclusão' },
          { title: 'Inovação', desc: 'Técnicas mais recentes e materiais sustentáveis com integração de casa inteligente' }
        ]
      },
      process: {
        title: 'O Nosso Processo Simples',
        subtitle: 'Da visão à realidade em 4 passos simples',
        steps: [
          { title: 'Consulta Gratuita', desc: 'Visitamos a sua propriedade e discutimos a sua visão' },
          { title: 'Orçamento Detalhado', desc: 'Preços transparentes sem custos ocultos' },
          { title: 'Execução Especializada', desc: 'Atualizações diárias e controlo de qualidade' },
          { title: 'Entrega Final', desc: 'A sua satisfação garantida' }
        ]
      },
      testimonials: {
        title: 'O Que Dizem os Nossos Clientes',
        subtitle: 'Avaliações reais de projetos reais'
      },
      contact: {
        title: 'Pronto para Transformar a Sua Casa em Cascais?',
        subtitle: 'Peça o seu orçamento grátis hoje',
        namePlaceholder: 'O Seu Nome',
        emailPlaceholder: 'Email',
        phonePlaceholder: 'Telefone',
        messagePlaceholder: 'Fale-nos sobre o seu projeto',
        submit: 'Enviar Pedido de Orçamento'
      },
      footer: {
        tagline: 'Remodelações premium em Cascais, Portugal',
        services: 'Serviços',
        servicesList: [
          'Remodelações Completas',
          'Remodelação de Cozinhas',
          'Remodelação de Casas de Banho',
          'Design de Interiores',
          'Projetos Comerciais'
        ],
        company: 'Empresa',
        companyLinks: ['Início', 'Sobre Nós', 'Nossos Serviços', 'Portfólio', 'Contacto'],
        contact: 'Contacto',
        whatsapp: 'WhatsApp',
        rights: '© 2025 OT Remodelações. Todos os direitos reservados.',
        privacy: 'Política de Privacidade',
        terms: 'Termos de Serviço',
        cookies: 'Política de Cookies'
      },
      cookie: {
        message: 'Usamos cookies para melhorar a sua experiência.',
        accept: 'Aceitar',
        reject: 'Rejeitar'
      },
      loading: {
        title: 'OT Remodelações',
        subtitle: 'Remodelações Premium em Cascais'
      }
    }
  }[currentLang];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900 flex flex-col items-center justify-center z-50 overflow-hidden">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MML8GGLN" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        <noscript><img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1917693765489352&ev=PageView&noscript=1" alt="" /></noscript>
        
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="text-center z-10">
          <div className="relative w-40 h-40 mx-auto mb-8">
            <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-blue-400 border-b-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
            <div className="absolute inset-6 flex items-center justify-center">
              <Home className="w-20 h-20 text-blue-500 animate-pulse" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.loading.title}
          </h2>
          <p className="text-blue-400 text-lg mb-8">{t.loading.subtitle}</p>
          
          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ease-out"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <p className="text-blue-300 text-sm mt-4">{Math.floor(loadingProgress)}%</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MML8GGLN" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} title="GTM"></iframe></noscript>
      <noscript><img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1917693765489352&ev=PageView&noscript=1" alt="" /></noscript>

      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 shadow-2xl z-50 backdrop-blur-sm bg-opacity-95 animate-[slideUp_0.5s_ease-out]">
          <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm">{t.cookie.message}</p>
            <div className="flex gap-2">
              <button onClick={() => setShowCookieBanner(false)} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition-all duration-300 hover:scale-105">{t.cookie.accept}</button>
              <button onClick={() => setShowCookieBanner(false)} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm transition-all duration-300 hover:scale-105">{t.cookie.reject}</button>
            </div>
          </div>
        </div>
      )}

      <header className="bg-black text-white shadow-sm sticky top-0 z-40 backdrop-blur-md bg-opacity-95">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold transition-transform duration-300 hover:scale-105" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="text-white">OT</span>
              <span className="text-blue-500"> Remodelações</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              {[
                { key: 'home', label: t.nav.home },
                { key: 'services', label: t.nav.services },
                { key: 'about', label: t.nav.about },
                { key: 'portfolio', label: t.nav.portfolio },
                { key: 'contact', label: t.nav.contact }
              ].map((item) => (
                <a key={item.key} href={`#${item.key}`} className="text-gray-300 hover:text-blue-500 transition-all duration-300 relative group">
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <div className="relative">
                <button 
                  onClick={() => setShowLangDropdown(!showLangDropdown)} 
                  className="flex items-center gap-1 text-gray-300 hover:text-blue-500 transition-all duration-300 px-3 py-1 rounded hover:bg-gray-900"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{currentLang.toUpperCase()}</span>
                </button>
                {showLangDropdown && (
                  <div className="absolute right-0 mt-2 bg-gray-900 rounded-lg shadow-xl border border-gray-700 py-2 min-w-[100px] z-50">
                    <button 
                      onClick={() => { setCurrentLang('pt'); setShowLangDropdown(false); }} 
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-800 transition ${currentLang === 'pt' ? 'text-blue-500 bg-gray-800' : 'text-white'}`}
                    >
                      PT
                    </button>
                    <button 
                      onClick={() => { setCurrentLang('en'); setShowLangDropdown(false); }} 
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-800 transition ${currentLang === 'en' ? 'text-blue-500 bg-gray-800' : 'text-white'}`}
                    >
                      EN
                    </button>
                  </div>
                )}
              </div>

              <a href="tel:+351919349310" className="hidden md:flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-all duration-300">
                <Phone className="w-4 h-4 animate-pulse" />
              </a>

              <button onClick={scrollToContact} className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group">
                <span className="relative z-10">{t.hero.cta1}</span>
              </button>

              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white transition-transform duration-300 hover:scale-110">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-800 animate-[slideDown_0.3s_ease-out]">
              {[
                { key: 'home', label: t.nav.home },
                { key: 'services', label: t.nav.services },
                { key: 'about', label: t.nav.about },
                { key: 'portfolio', label: t.nav.portfolio },
                { key: 'contact', label: t.nav.contact }
              ].map((item) => (
                <a key={item.key} href={`#${item.key}`} className="block py-2 text-gray-300 hover:text-blue-500 transition-all duration-300 hover:pl-2" onClick={() => setIsMenuOpen(false)}>{item.label}</a>
              ))}
            </nav>
          )}
        </div>
      </header>

      <section id="home" className="relative bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white py-20 overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80" 
            alt="Modern Home Interior"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-blue-900/80"></div>
        </div>
        
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse z-0"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse z-0" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-screen-xl mx-auto px-4 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex justify-center gap-4">
              <Hammer className="w-12 h-12 text-blue-500 animate-bounce" />
              <Home className="w-12 h-12 text-blue-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
              <Paintbrush className="w-12 h-12 text-blue-500 animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={scrollToContact} className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
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

      <section className="py-16 bg-gradient-to-br from-gray-50 to-white border-y relative overflow-hidden" ref={statsRef}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
        
        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-2 flex items-center justify-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              <Sparkles className="w-8 h-8 text-blue-600 animate-pulse" />
              {t.stats.title}
            </h2>
          </div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t.stats.subtitle}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            <div className="bg-white p-5 lg:p-6 rounded-xl shadow-lg border-l-4 border-blue-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">8+</div>
              <div className="text-xs lg:text-sm text-gray-600 font-medium">{t.stats.years}</div>
            </div>

            <div className="bg-white p-5 lg:p-6 rounded-xl shadow-lg border-l-4 border-blue-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-xs lg:text-sm text-gray-600 font-medium">{t.stats.projects}</div>
            </div>

            <div className="bg-white p-5 lg:p-6 rounded-xl shadow-lg border-l-4 border-blue-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-xs lg:text-sm text-gray-600 font-medium">{t.stats.team}</div>
            </div>

            <div className="bg-white p-5 lg:p-6 rounded-xl shadow-lg border-l-4 border-blue-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">65%</div>
              <div className="text-xs lg:text-sm text-gray-600 font-medium">{t.stats.growth}</div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            <div className="group flex flex-col items-center gap-3 px-6 py-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-6 h-6 lg:w-7 lg:h-7 fill-yellow-400 text-yellow-400 group-hover:scale-125 transition-transform duration-300" 
                    style={{ transitionDelay: `${i * 50}ms` }} 
                  />
                ))}
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-800">{t.stats.satisfaction}</div>
                <div className="text-xs text-gray-600">{t.stats.reviews}</div>
              </div>
            </div>

            <div className="group flex flex-col items-center gap-3 px-6 py-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CheckCircle className="w-12 h-12 lg:w-14 lg:h-14 text-green-500 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              <div className="text-center">
                <div className="text-lg font-bold text-gray-800">{t.stats.licensed}</div>
                <div className="text-xs text-gray-600">{t.stats.certifiedSince}</div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-12 max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 lg:p-8 rounded-2xl shadow-2xl relative overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center">
                <p className="text-blue-200 text-xs lg:text-sm uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  {t.stats.thisMonth}
                </p>
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  4
                </div>
                <p className="text-white text-base lg:text-lg font-medium">{t.stats.completedWorks}</p>
                <div className="mt-4 flex justify-center gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{t.whyUs.title}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{t.whyUs.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.whyUs.items.map((item, idx) => {
              const icons = [Award, Shield, Clock, Target, Heart, Zap];
              const Icon = icons[idx];
              return (
                <div 
                  key={idx} 
                  className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-500 overflow-hidden hover:scale-105"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{t.process.title}</h2>
            <p className="text-lg text-gray-600">{t.process.subtitle}</p>
          </div>

          <div className="hidden lg:block">
            <div className="relative max-w-6xl mx-auto">
              <div className="flex items-center justify-between">
                {t.process.steps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex-1 flex flex-col items-center group">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 animate-pulse" style={{ animationDelay: `${idx * 0.2}s` }}>
                        {idx + 1}
                      </div>
                      <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-100 hover:border-blue-500 transition-all duration-300 w-full max-w-xs group-hover:shadow-2xl group-hover:-translate-y-2">
                        <h3 className="text-lg font-bold mb-2 text-black text-center">{step.title}</h3>
                        <p className="text-gray-600 text-sm text-center">{step.desc}</p>
                      </div>
                    </div>
                    {idx < 3 && (
                      <div className="flex-shrink-0 w-16 flex items-center justify-center -mt-20">
                        <ArrowRight className="w-8 h-8 text-blue-600 animate-pulse" style={{ animationDelay: `${idx * 0.2 + 0.1}s` }} />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <div className="max-w-md mx-auto space-y-6">
              {t.process.steps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-lg border-2 border-blue-100 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl">
                      <h3 className="text-lg font-bold mb-2 text-black">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                  {idx < 3 && (
                    <div className="flex justify-center my-4">
                      <ArrowRight className="w-6 h-6 text-blue-600 transform rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              <ImageIcon className="w-10 h-10 text-blue-500 animate-pulse" />
              {t.portfolio.title}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">{t.portfolio.subtitle}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories[currentLang].map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedImage(project)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title[currentLang]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex items-center gap-2 text-white">
                        <ExternalLink className="w-5 h-5" />
                        <span className="font-medium">{t.portfolio.viewProject}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title[currentLang]}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description[currentLang]}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 border-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <ImageIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">{t.portfolio.noProjects}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title[currentLang]}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="bg-gray-900 p-6 rounded-b-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title[currentLang]}</h3>
              <p className="text-gray-400 mb-4">{selectedImage.description[currentLang]}</p>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>{selectedImage.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>{selectedImage.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-30"></div>
        
        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{t.testimonials.title}</h2>
            <p className="text-gray-600">{t.testimonials.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials[currentLang].map((review, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-l-4 border-blue-600 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 fill-yellow-400 text-yellow-400 group-hover:scale-125 transition-transform duration-300" 
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 font-medium flex items-center gap-1">
                    <span className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">G</span>
                    Google
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed group-hover:text-gray-900 transition-colors duration-300">"{review.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-black">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                  <div className="mt-2 inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <CheckCircle className="w-3 h-3" />
                    {review.project}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{t.contact.title}</h2>
            <p className="text-lg text-gray-300">{t.contact.subtitle}</p>
          </div>

          <div className="max-w-xl mx-auto bg-white rounded-xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t.contact.namePlaceholder} 
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 outline-none text-black transition-all duration-300" 
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t.contact.emailPlaceholder} 
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 outline-none text-black transition-all duration-300" 
              />
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder={t.contact.phonePlaceholder} 
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 outline-none text-black transition-all duration-300" 
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t.contact.messagePlaceholder} 
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 outline-none text-black h-32 transition-all duration-300"
              ></textarea>
              
              {formStatus.message && (
                <div className={`p-4 rounded-lg ${formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {formStatus.message}
                </div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    {currentLang === 'en' ? 'Sending...' : 'Enviando...'}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t.contact.submit}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                <span className="text-white">OT</span>
                <span className="text-blue-500"> Remodelações</span>
              </h3>
              <p className="text-gray-400 text-sm mb-4">{t.footer.tagline}</p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <span className="text-sm">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <span className="text-sm">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <span className="text-sm">ig</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-blue-500">{t.footer.services}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {t.footer.servicesList.map((service, idx) => (
                  <li key={idx} className="hover:text-blue-500 cursor-pointer transition-all duration-300 hover:translate-x-1">{service}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-blue-500">{t.footer.company}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {t.footer.companyLinks.map((link, idx) => (
                  <li key={idx}><a href={`#${['home', 'about', 'services', 'portfolio', 'contact'][idx]}`} className="hover:text-blue-500 transition-all duration-300 hover:translate-x-1 inline-block">{link}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-blue-500">{t.footer.contact}</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="tel:+351919349310" className="flex items-center gap-2 hover:text-blue-500 transition-all duration-300 group">
                    <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" /> 
                    +351 919 349 310
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/351919349310" className="flex items-center gap-2 hover:text-blue-500 transition-all duration-300 group">
                    <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" /> 
                    {t.footer.whatsapp}
                  </a>
                </li>
                <li>
                  <a href="mailto:info@otremodelacoes.pt" className="flex items-center gap-2 hover:text-blue-500 transition-all duration-300 group">
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" /> 
                    info@otremodelacoes.pt
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> 
                  Cascais, Portugal
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">{t.footer.rights}</p>
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-blue-500 transition-colors duration-300">{t.footer.privacy}</a>
                <a href="#" className="hover:text-blue-500 transition-colors duration-300">{t.footer.terms}</a>
                <a href="#" className="hover:text-blue-500 transition-colors duration-300">{t.footer.cookies}</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/351919349310" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-40 transition-all duration-300 hover:scale-110 animate-bounce">
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
};

export default OTRemodelacoes;
