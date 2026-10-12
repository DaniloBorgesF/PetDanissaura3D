import { useState, useEffect } from 'react';

// WhatsApp number
const WHATSAPP_NUMBER = '5514981685016';
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

function getWhatsAppLink(message: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

// ============ COMPONENTS ============

function WhatsAppButton({ message, children, className = '' }: { message: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${className}`}
    >
      {children}
    </a>
  );
}

function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={getWhatsAppLink('Olá! Vim pelo site e gostaria de saber mais sobre os trabalhos.')}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-whatsapp hover:bg-whatsapp-dark text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      aria-label="Contato pelo WhatsApp"
    >
      <i className="fab fa-whatsapp text-3xl"></i>
    </a>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-cream/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#" className="font-script text-2xl sm:text-3xl text-terracotta font-bold">
          Danissaura3d
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-brown-light hover:text-terracotta transition-colors text-sm font-medium">Sobre</a>
          <a href="#servicos" className="text-brown-light hover:text-terracotta transition-colors text-sm font-medium">Serviços</a>
          <a href="#galeria" className="text-brown-light hover:text-terracotta transition-colors text-sm font-medium">Galeria</a>
          <a href="#como-funciona" className="text-brown-light hover:text-terracotta transition-colors text-sm font-medium">Como Funciona</a>
          <a href="#faq" className="text-brown-light hover:text-terracotta transition-colors text-sm font-medium">FAQ</a>
          <a
            href={getWhatsAppLink('Olá! Vim pelo site e gostaria de um orçamento.')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-terracotta hover:bg-terracotta-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
          >
            <i className="fab fa-whatsapp mr-1"></i> Orçamento
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-brown text-2xl"
          aria-label="Menu"
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream/98 backdrop-blur-md border-t border-beige mt-2 py-6 px-6 space-y-4 animate-fade-in-up">
          <a href="#sobre" onClick={() => setMenuOpen(false)} className="block text-brown-light hover:text-terracotta transition-colors font-medium">Sobre</a>
          <a href="#servicos" onClick={() => setMenuOpen(false)} className="block text-brown-light hover:text-terracotta transition-colors font-medium">Serviços</a>
          <a href="#galeria" onClick={() => setMenuOpen(false)} className="block text-brown-light hover:text-terracotta transition-colors font-medium">Galeria</a>
          <a href="#como-funciona" onClick={() => setMenuOpen(false)} className="block text-brown-light hover:text-terracotta transition-colors font-medium">Como Funciona</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="block text-brown-light hover:text-terracotta transition-colors font-medium">FAQ</a>
          <a
            href={getWhatsAppLink('Olá! Vim pelo site e gostaria de um orçamento.')}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-whatsapp text-white text-center px-5 py-3 rounded-full font-semibold"
          >
            <i className="fab fa-whatsapp mr-2"></i> Solicitar Orçamento
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://image.qwenlm.ai/generated-images/06b00b4f-8881-4a43-9eb0-530db4a381a9/_result.png"
          alt="Pintura artística de pet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/80 to-cream/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32 md:py-0 w-full">
        <div className="max-w-2xl">
          <p className="font-script text-terracotta text-xl sm:text-2xl mb-4 animate-fade-in-up">
            Feito à mão, com amor
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brown font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Eternize a memória do seu pet em{' '}
            <span className="text-terracotta italic">arte</span>
          </h1>
          <p className="text-brown-light text-lg sm:text-xl mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Pintura manual, esculturas e quadros personalizados. Seu melhor amigo merece uma homenagem à altura. Envio para todo o Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <WhatsAppButton message="Olá! Vim pelo site e gostaria de um orçamento para um quadro do meu pet.">
              <i className="fab fa-whatsapp text-xl"></i>
              Solicitar Orçamento
            </WhatsAppButton>
            <a
              href="#galeria"
              className="inline-flex items-center justify-center gap-2 border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
            >
              Ver Trabalhos
              <i className="fas fa-arrow-down text-sm"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float hidden md:block">
        <i className="fas fa-chevron-down text-terracotta text-2xl opacity-60"></i>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://image.qwenlm.ai/generated-images/e97d4384-1cbf-4ab4-b7d3-ea5e4e7da8ef/_result.png"
                alt="Processo de pintura artesanal"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-terracotta/30 rounded-2xl -z-10"></div>
            <div className="absolute -top-4 -left-4 bg-terracotta/10 w-24 h-24 rounded-full -z-10"></div>
          </div>

          {/* Text */}
          <div>
            <p className="font-script text-terracotta text-xl mb-3">Sobre o Ateliê</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-brown font-bold mb-6">
              Cada traço conta uma história de amor
            </h2>
            <div className="space-y-4 text-brown-light leading-relaxed">
              <p>
                O <strong className="text-brown">Danissaura3d</strong> nasceu da paixão por animais e pela arte. Cada peça é criada com dedicação e carinho, transformando fotos em verdadeiras obras de arte que eternizam momentos especiais com seu pet.
              </p>
              <p>
                Trabalhamos com pintura manual em tela, esculturas tridimensionais e quadros personalizados. Cada detalhe é pensado para capturar a essência e a personalidade do seu companheiro de quatro patas.
              </p>
              <p>
                Com ateliê em <strong className="text-brown">Bauru e Cerquilho (SP)</strong>, atendemos com amor clientes de todo o Brasil, levando arte e memórias até a sua casa.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-terracotta">500+</p>
                <p className="text-brown-light text-sm">Pets eternizados</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-terracotta">100%</p>
                <p className="text-brown-light text-sm">Feito à mão</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-terracotta">🇧🇷</p>
                <p className="text-brown-light text-sm">Envio nacional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: 'Pintura Manual',
      description: 'Quadros pintados à mão com a foto do seu pet. Cada pincelada captura a personalidade e o charme do seu melhor amigo.',
      image: 'https://image.qwenlm.ai/generated-images/0a3cd3dd-360b-4fe8-b587-807f20f69542/_result.png',
      message: 'Olá! Tenho interesse em uma pintura manual do meu pet. Gostaria de saber mais!',
    },
    {
      title: 'Esculturas',
      description: 'Peças tridimensionais personalizadas que ganham vida e ocupam um lugar especial na sua casa.',
      image: 'https://image.qwenlm.ai/generated-images/3e9e23aa-f625-4bf6-b890-a97f9a022869/_result.png',
      message: 'Olá! Tenho interesse em uma escultura do meu pet. Gostaria de saber mais!',
    },
    {
      title: 'Quadros Personalizados',
      description: 'Composições exclusivas e criativas para presentear quem você ama ou decorar seu lar com memórias afetivas.',
      image: 'https://image.qwenlm.ai/generated-images/be6e06e2-4ecf-41a8-aeec-67d5c2ba977f/_result.png',
      message: 'Olá! Tenho interesse em um quadro personalizado do meu pet. Gostaria de saber mais!',
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-28 bg-beige-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="font-script text-terracotta text-xl mb-3">Nossos Serviços</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brown font-bold mb-4">
            Transforme uma foto em uma obra de arte
          </h2>
          <p className="text-brown-light max-w-2xl mx-auto">
            Escolha o estilo que mais combina com seu pet e nós cuidamos de cada detalhe com todo o carinho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="overflow-hidden h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-serif text-2xl text-brown font-bold mb-3">{service.title}</h3>
                <p className="text-brown-light mb-6 leading-relaxed">{service.description}</p>
                <WhatsAppButton message={service.message} className="w-full justify-center text-sm">
                  <i className="fab fa-whatsapp"></i>
                  Quero este
                </WhatsAppButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: 'https://image.qwenlm.ai/generated-images/06b00b4f-8881-4a43-9eb0-530db4a381a9/_result.png', alt: 'Pintura de Golden Retriever' },
    { src: 'https://image.qwenlm.ai/generated-images/0a3cd3dd-360b-4fe8-b587-807f20f69542/_result.png', alt: 'Pintura de gato' },
    { src: 'https://image.qwenlm.ai/generated-images/3e9e23aa-f625-4bf6-b890-a97f9a022869/_result.png', alt: 'Escultura de poodle' },
    { src: 'https://image.qwenlm.ai/generated-images/be6e06e2-4ecf-41a8-aeec-67d5c2ba977f/_result.png', alt: 'Quadro de Labrador' },
    { src: 'https://image.qwenlm.ai/generated-images/2cb9042e-2604-4d8f-86c2-257e3d203770/_result.png', alt: 'Retrato de Bulldog' },
    { src: 'https://image.qwenlm.ai/generated-images/e97d4384-1cbf-4ab4-b7d3-ea5e4e7da8ef/_result.png', alt: 'Processo de pintura' },
    { src: 'https://image.qwenlm.ai/generated-images/35246ea9-74dc-4274-aa9f-5b4c37a782f8/_result.png', alt: 'Coleção de miniaturas' },
    { src: 'https://image.qwenlm.ai/generated-images/972d0e44-570a-4986-ad65-988835628eab/_result.png', alt: 'Pintura de Husky' },
  ];

  return (
    <section id="galeria" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="font-script text-terracotta text-xl mb-3">Galeria</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brown font-bold mb-4">
            Trabalhos que contam histórias
          </h2>
          <p className="text-brown-light max-w-2xl mx-auto">
            Cada peça é única, assim como o pet que a inspirou. Confira alguns dos nossos trabalhos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${index === 0 ? 'h-full min-h-[300px] md:min-h-[400px]' : 'h-48 md:h-56'}`}
              />
              <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <i className="fas fa-search-plus text-white text-2xl mb-2"></i>
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-brown/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-terracotta transition-colors text-2xl"
            >
              <i className="fas fa-times"></i>
            </button>
            <img
              src={selectedImage}
              alt="Trabalho ampliado"
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <div className="mt-4 text-center">
              <WhatsAppButton message="Olá! Vi essa arte no site e gostaria de solicitar algo similar para o meu pet!">
                <i className="fab fa-whatsapp"></i>
                Solicitar similar no WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: 'fa-camera',
      title: 'Envie a foto',
      description: 'Você envia a foto do seu pet pelo WhatsApp. Quanto mais nítida, melhor o resultado!',
    },
    {
      icon: 'fa-palette',
      title: 'Definimos o estilo',
      description: 'Conversamos sobre o estilo, tamanho e detalhes da peça para ficar perfeita.',
    },
    {
      icon: 'fa-paint-brush',
      title: 'Produzimos com carinho',
      description: 'Criamos sua arte à mão, com todo cuidado e atenção aos detalhes.',
    },
    {
      icon: 'fa-box',
      title: 'Enviamos com segurança',
      description: 'Embalamos com todo cuidado e enviamos para todo o Brasil.',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-beige-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="font-script text-terracotta text-xl mb-3">Como Funciona</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brown font-bold mb-4">
            Simples, rápido e com todo carinho
          </h2>
          <p className="text-brown-light max-w-2xl mx-auto">
            Em apenas 4 passos, transformamos a foto do seu pet em uma arte única.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-terracotta/20"></div>
              )}
              
              {/* Number circle */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-cream border-2 border-terracotta/30 mb-6 shadow-lg">
                <i className={`fas ${step.icon} text-terracotta text-3xl`}></i>
                <span className="absolute -top-2 -right-2 bg-terracotta text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
              </div>
              
              <h3 className="font-serif text-xl text-brown font-bold mb-3">{step.title}</h3>
              <p className="text-brown-light text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <WhatsAppButton message="Olá! Gostaria de encomendar uma arte do meu pet. Como funciona?">
            <i className="fab fa-whatsapp text-xl"></i>
            Começar agora pelo WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: 'Mariana S.',
      pet: 'Tutora da Luna (Golden)',
      text: 'Fiquei emocionada quando recebi o quadro! Capturou perfeitamente a essência da minha Luna. Cada detalhe ficou incrível, parece que ela vai pular da tela!',
      rating: 5,
    },
    {
      name: 'Carlos R.',
      pet: 'Tutor do Thor (Bulldog)',
      text: 'Presenteei minha esposa com a escultura do Thor e ela chorou de emoção! O trabalho é impecável, superou todas as expectativas. Recomendo demais!',
      rating: 5,
    },
    {
      name: 'Juliana M.',
      pet: 'Tutora da Mel (Shih Tzu)',
      text: 'Já é o segundo quadro que encomendo! O primeiro foi da Mel e agora fiz um do meu falecido Rex. Trabalho feito com muito amor e dedicação. Gratidão!',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="font-script text-terracotta text-xl mb-3">Depoimentos</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brown font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-brown-light max-w-2xl mx-auto">
            A satisfação de quem confia em nós para eternizar momentos especiais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-beige-light rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-6 bg-terracotta text-white w-8 h-8 rounded-full flex items-center justify-center">
                <i className="fas fa-quote-left text-xs"></i>
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-500 text-sm"></i>
                ))}
              </div>
              
              <p className="text-brown-light italic leading-relaxed mb-6">"{testimonial.text}"</p>
              
              <div className="border-t border-beige pt-4">
                <p className="font-semibold text-brown">{testimonial.name}</p>
                <p className="text-brown-medium text-sm">{testimonial.pet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Quanto tempo leva para produzir?',
      answer: 'O prazo varia de acordo com o tipo de peça e o nível de detalhe. Em média, pinturas levam de 7 a 15 dias úteis, e esculturas de 15 a 30 dias. Confirmamos o prazo exato no momento do orçamento.',
    },
    {
      question: 'Qual o valor?',
      answer: 'O valor varia conforme o tamanho da peça, nível de detalhe e técnica utilizada. Para receber um orçamento personalizado, entre em contato pelo WhatsApp e enviaremos todos os detalhes!',
    },
    {
      question: 'Vocês enviam para todo o Brasil?',
      answer: 'Sim! Fazemos envios para todo o território nacional com embalagem segura e especial para proteger a arte durante o transporte. O frete é calculado no momento do pedido.',
    },
    {
      question: 'Como faço para encomendar?',
      answer: 'É super simples! Basta nos chamar no WhatsApp, enviar a foto do seu pet e conversar sobre o que deseja. Nós guiamos você em todo o processo, desde a escolha do estilo até a entrega.',
    },
    {
      question: 'Posso pedir alterações durante a produção?',
      answer: 'Sim! Enviamos fotos do progresso para você acompanhar. Se houver algo que deseja ajustar, conversamos e fazemos as alterações necessárias antes da finalização.',
    },
    {
      question: 'Que tipo de foto vocês precisam?',
      answer: 'Quanto mais nítida e bem iluminada a foto, melhor o resultado! Preferimos fotos de frente ou de 3/4, com boa resolução. Se tiver dúvidas, nos envie que ajudamos a escolher a melhor.',
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-beige-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="font-script text-terracotta text-xl mb-3">Dúvidas Frequentes</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brown font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-brown-light">
            Tire suas dúvidas ou fale conosco diretamente pelo WhatsApp.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-cream rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              >
                <span className="font-semibold text-brown pr-4">{faq.question}</span>
                <i className={`fas fa-chevron-down text-terracotta transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}></i>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-60 pb-5 px-5 sm:px-6' : 'max-h-0'}`}>
                <p className="text-brown-light leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-brown-light mb-4">Não encontrou sua dúvida?</p>
          <WhatsAppButton message="Olá! Tenho uma dúvida sobre os trabalhos de vocês.">
            <i className="fab fa-whatsapp text-xl"></i>
            Falar no WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-terracotta relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 border-2 border-white rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-6">
          Seu melhor amigo merece uma homenagem à altura
        </h2>
        <p className="text-white/90 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          Transforme aquela foto especial em uma obra de arte única. Feito à mão, com amor, para durar para sempre.
        </p>
        <a
          href={getWhatsAppLink('Olá! Vim pelo site e gostaria de um orçamento para eternizar meu pet em arte!')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-terracotta hover:bg-cream font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl text-lg"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
          Solicitar Orçamento Agora
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brown text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-script text-3xl text-terracotta-light mb-4">Danissaura3d</h3>
            <p className="text-white/70 leading-relaxed">
              Eternizando momentos especiais com seu pet através da arte manual. Cada peça é feita com amor e dedicação.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#sobre" className="text-white/70 hover:text-terracotta-light transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="text-white/70 hover:text-terracotta-light transition-colors">Serviços</a></li>
              <li><a href="#galeria" className="text-white/70 hover:text-terracotta-light transition-colors">Galeria</a></li>
              <li><a href="#como-funciona" className="text-white/70 hover:text-terracotta-light transition-colors">Como Funciona</a></li>
              <li><a href="#faq" className="text-white/70 hover:text-terracotta-light transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70">
                <i className="fab fa-whatsapp text-terracotta-light"></i>
                <a href={getWhatsAppLink('Olá! Vim pelo site.')} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta-light transition-colors">
                  (14) 98168-5016
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <i className="fab fa-instagram text-terracotta-light"></i>
                <a href="https://instagram.com/danissaura_3d" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta-light transition-colors">
                  @danissaura_3d
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <i className="fas fa-map-marker-alt text-terracotta-light"></i>
                <span>Bauru – Cerquilho / SP</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <i className="fas fa-truck text-terracotta-light"></i>
                <span>Envio para todo o Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social + Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © 2024 Danissaura3d. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/danissaura_3d"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-terracotta flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href={getWhatsAppLink('Olá! Vim pelo site.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-whatsapp flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============ MAIN APP ============

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
