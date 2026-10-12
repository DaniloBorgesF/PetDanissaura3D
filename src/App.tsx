/**
 * ============================================================
 * COMPONENTE PRINCIPAL - Danissaura3d
 * ============================================================
 *
 * Landing page do ateliê Danissaura3d.
 *
 * MANUTENÇÃO:
 * - Para trocar imagens: edite src/config/imagens.ts
 * - Para trocar contatos: edite src/config/env.ts ou .env
 * - Para adicionar seções: crie novos componentes em src/components/
 * - Para deploy: consulte DEPLOY.md
 *
 * ============================================================
 */

import { useState, useEffect } from 'react';
import ImagemSite from './components/ImagemSite';
import {
  heroImage,
  aboutImage,
  servicesImages,
  galleryImages,
} from './config/imagens';
import {
  dadosNegocio,
  contato,
  gerarLinkWhatsApp,
  mensagensWhatsApp,
} from './config/env';

// ============================================================
// COMPONENTES AUXILIARES
// ============================================================

function BotaoWhatsApp({
  mensagem,
  children,
  className = '',
}: {
  mensagem: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={gerarLinkWhatsApp(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-shine inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold py-3.5 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95 shrink-0 ${className}`}
    >
      {children}
    </a>
  );
}

function BotaoFlutuanteWhatsApp() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const controlarScroll = () => setVisivel(window.scrollY > 300);
    window.addEventListener('scroll', controlarScroll, { passive: true });
    return () => window.removeEventListener('scroll', controlarScroll);
  }, []);

  return (
    <a
      href={gerarLinkWhatsApp(mensagensWhatsApp.saudacao)}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-whatsapp hover:bg-whatsapp-dark text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 ${
        visivel ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
      aria-label="Contato pelo WhatsApp"
    >
      <i className="fab fa-whatsapp text-2xl md:text-3xl"></i>
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-20"></span>
    </a>
  );
}

// ============================================================
// NAVBAR
// ============================================================

function Navbar() {
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const controlarScroll = () => setRolou(window.scrollY > 50);
    window.addEventListener('scroll', controlarScroll, { passive: true });
    return () => window.removeEventListener('scroll', controlarScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuAberto]);

  const linksNav = [
    { href: '#sobre', texto: 'Sobre' },
    { href: '#servicos', texto: 'Serviços' },
    { href: '#galeria', texto: 'Galeria' },
    { href: '#como-funciona', texto: 'Como Funciona' },
    { href: '#faq', texto: 'FAQ' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${rolou ? 'bg-cream/95 backdrop-blur-md shadow-md py-2 md:py-3' : 'bg-transparent py-4 md:py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#" className="font-script text-2xl md:text-3xl text-terracotta font-bold shrink-0">
          {dadosNegocio.nome}
        </a>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {linksNav.map((link) => (
            <a key={link.href} href={link.href} className="text-brown-light hover:text-terracotta transition-colors text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-terracotta after:transition-all hover:after:w-full whitespace-nowrap">
              {link.texto}
            </a>
          ))}
          <a href={gerarLinkWhatsApp(mensagensWhatsApp.orcamentoGeral)} target="_blank" rel="noopener noreferrer" className="btn-shine bg-terracotta hover:bg-terracotta-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 whitespace-nowrap">
            <i className="fab fa-whatsapp mr-1"></i> Orçamento
          </a>
        </div>

        <button onClick={() => setMenuAberto(!menuAberto)} className="md:hidden text-brown text-2xl p-2" aria-label="Menu">
          <i className={`fas ${menuAberto ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {menuAberto && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-cream/98 backdrop-blur-md z-30 animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
            {linksNav.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuAberto(false)} className="text-brown text-xl font-medium hover:text-terracotta transition-colors">
                {link.texto}
              </a>
            ))}
            <div className="w-16 h-[1px] bg-terracotta/30 my-2"></div>
            <a href={gerarLinkWhatsApp(mensagensWhatsApp.orcamentoGeral)} target="_blank" rel="noopener noreferrer" onClick={() => setMenuAberto(false)} className="bg-whatsapp text-white text-center px-8 py-4 rounded-full font-semibold text-lg w-full max-w-xs">
              <i className="fab fa-whatsapp mr-2"></i> Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ============================================================
// HERO
// ============================================================

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <ImagemSite
          src={heroImage.src}
          alt={heroImage.alt}
          className="w-full h-full"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/80 to-cream/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-24 pb-16 md:pt-0 md:pb-0">
        <div className="max-w-2xl">
          <p className="font-script text-terracotta text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 animate-fade-in-up">
            ✨ Feito à mão, com amor
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brown font-bold leading-[1.1] mb-4 md:mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Eternize a memória do seu pet em{' '}
            <span className="gradient-text italic">arte</span>
          </h1>
          <p className="text-brown-light text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Pintura manual, esculturas e quadros personalizados. Seu melhor amigo merece uma homenagem à altura.
          </p>

          <div className="flex items-center gap-2 mb-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <span className="inline-flex items-center gap-1.5 bg-terracotta/10 text-terracotta px-3 py-1.5 rounded-full text-sm font-medium">
              <i className="fas fa-truck text-xs"></i>
              Envio para todo o Brasil
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <BotaoWhatsApp mensagem={mensagensWhatsApp.orcamentoQuadro} className="text-base sm:text-lg">
              <i className="fab fa-whatsapp text-xl"></i>
              Solicitar Orçamento
            </BotaoWhatsApp>
            <a href="#galeria" className="inline-flex items-center justify-center gap-2 border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-white font-semibold py-3.5 px-6 rounded-full transition-all duration-300">
              Ver Trabalhos
              <i className="fas fa-arrow-down text-sm"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hidden md:block">
        <div className="w-6 h-10 border-2 border-terracotta/40 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-terracotta/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SOBRE
// ============================================================

function Sobre() {
  return (
    <section id="sobre" className="py-16 md:py-24 lg:py-28 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-terracotta/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImagemSite
                src={aboutImage.src}
                alt={aboutImage.alt}
                className="w-full"
                aspectRatio="4/5"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-full h-full border-2 border-terracotta/30 rounded-2xl -z-10"></div>
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 bg-terracotta/10 w-16 h-16 md:w-24 md:h-24 rounded-full -z-10"></div>
          </div>

          <div className="order-1 md:order-2">
            <p className="font-script text-terracotta text-lg md:text-xl mb-2 md:mb-3">Sobre o Ateliê</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brown font-bold mb-4 md:mb-6 leading-tight">
              Cada traço conta uma história de amor
            </h2>
            <div className="space-y-3 md:space-y-4 text-brown-light leading-relaxed text-sm sm:text-base">
              <p>O <strong className="text-brown">{dadosNegocio.nome}</strong> nasceu da paixão por animais e pela arte. Cada peça é criada com dedicação e carinho, transformando fotos em verdadeiras obras de arte.</p>
              <p>Trabalhamos com pintura manual em tela, esculturas tridimensionais e quadros personalizados. Cada detalhe é pensado para capturar a essência do seu companheiro de quatro patas.</p>
              <p>Com ateliê em <strong className="text-brown">{dadosNegocio.cidades.join(' e ')}</strong> ({dadosNegocio.estado}), atendemos com amor clientes de todo o Brasil.</p>
            </div>

            <div className="mt-6 md:mt-8 flex flex-wrap gap-3 sm:gap-4">
              {[
                { valor: '500+', label: 'Pets eternizados' },
                { valor: '100%', label: 'Feito à mão' },
                { valor: '🇧🇷', label: 'Todo Brasil' },
              ].map((stat) => (
                <div key={stat.label} className="text-center bg-beige-light rounded-xl px-4 py-3 flex-1 min-w-[90px]">
                  <p className="font-serif text-2xl sm:text-3xl font-bold gradient-text">{stat.valor}</p>
                  <p className="text-brown-light text-xs sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SERVIÇOS
// ============================================================

function Servicos() {
  const servicos = [
    {
      titulo: 'Pintura Manual',
      descricao: 'Quadros pintados à mão com a foto do seu pet. Cada pincelada captura a personalidade do seu melhor amigo.',
      imagem: servicesImages.pinturaManual,
      mensagem: mensagensWhatsApp.servicoPintura,
      icone: 'fa-paint-brush',
    },
    {
      titulo: 'Esculturas',
      descricao: 'Peças tridimensionais personalizadas que ganham vida e ocupam um lugar especial na sua casa.',
      imagem: servicesImages.esculturas,
      mensagem: mensagensWhatsApp.servicoEscultura,
      icone: 'fa-cube',
    },
    {
      titulo: 'Quadros Personalizados',
      descricao: 'Composições exclusivas para presentear quem você ama ou decorar seu lar com memórias afetivas.',
      imagem: servicesImages.quadrosPersonalizados,
      mensagem: mensagensWhatsApp.servicoQuadro,
      icone: 'fa-image',
    },
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 lg:py-28 bg-beige-light relative">
      <div className="absolute top-10 left-10 w-20 h-20 border border-terracotta/10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-terracotta/10 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-script text-terracotta text-lg md:text-xl mb-2 md:mb-3">Nossos Serviços</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brown font-bold mb-3 md:mb-4">
            Transforme uma foto em uma obra de arte
          </h2>
          <p className="text-brown-light max-w-2xl mx-auto text-sm sm:text-base">
            Escolha o estilo que mais combina com seu pet e nós cuidamos de cada detalhe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicos.map((servico, indice) => (
            <div key={indice} className="card-hover bg-cream rounded-2xl overflow-hidden shadow-lg group">
              <div className="relative h-56 sm:h-64">
                <ImagemSite
                  src={servico.imagem.src}
                  alt={servico.imagem.alt}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/60 to-transparent flex items-end p-5">
                  <div className="bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center">
                    <i className={`fas ${servico.icone} text-terracotta text-lg`}></i>
                  </div>
                </div>
              </div>
              <div className="p-5 sm:p-6 md:p-8">
                <h3 className="font-serif text-xl sm:text-2xl text-brown font-bold mb-2 md:mb-3">{servico.titulo}</h3>
                <p className="text-brown-light mb-5 md:mb-6 leading-relaxed text-sm sm:text-base">{servico.descricao}</p>
                <BotaoWhatsApp mensagem={servico.mensagem} className="w-full text-sm">
                  <i className="fab fa-whatsapp"></i>
                  Quero este
                </BotaoWhatsApp>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// GALERIA
// ============================================================

function Galeria() {
  const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setImagemSelecionada(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = imagemSelecionada ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [imagemSelecionada]);

  return (
    <section id="galeria" className="py-16 md:py-24 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <p className="font-script text-terracotta text-lg md:text-xl mb-2 md:mb-3">Galeria</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brown font-bold mb-3 md:mb-4">
            Trabalhos que contam histórias
          </h2>
          <p className="text-brown-light max-w-2xl mx-auto text-sm sm:text-base">
            Cada peça é única, assim como o pet que a inspirou.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {galleryImages.map((imagem, indice) => (
            <div
              key={indice}
              className={`relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer group ${indice === 0 ? 'col-span-2 row-span-2' : ''}`}
              onClick={() => setImagemSelecionada(imagem.src)}
            >
              <ImagemSite
                src={imagem.src}
                alt={imagem.alt}
                className={`w-full ${indice === 0 ? 'h-full min-h-[200px] sm:min-h-[300px] md:min-h-[400px]' : 'h-36 sm:h-48 md:h-56'}`}
              />
              <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75 text-center">
                  <div className="bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <i className="fas fa-search-plus text-terracotta text-lg"></i>
                  </div>
                  <p className="text-white text-xs sm:text-sm font-medium px-2">{imagem.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {imagemSelecionada && (
        <div className="fixed inset-0 z-50 bg-brown/95 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-fade-in" onClick={() => setImagemSelecionada(null)}>
          <div className="relative max-w-4xl w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setImagemSelecionada(null)} className="absolute -top-12 right-0 text-white hover:text-terracotta transition-colors text-2xl p-2" aria-label="Fechar">
              <i className="fas fa-times"></i>
            </button>
            <ImagemSite src={imagemSelecionada} alt="Trabalho ampliado" className="w-full max-h-[70vh] sm:max-h-[80vh] rounded-xl" loading="eager" />
            <div className="mt-4 text-center">
              <BotaoWhatsApp mensagem={mensagensWhatsApp.galeriaSimilar}>
                <i className="fab fa-whatsapp"></i>
                Solicitar similar
              </BotaoWhatsApp>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// ============================================================
// COMO FUNCIONA
// ============================================================

function ComoFunciona() {
  const etapas = [
    { icone: 'fa-camera', titulo: 'Envie a foto', descricao: 'Envie a foto do seu pet pelo WhatsApp.' },
    { icone: 'fa-palette', titulo: 'Definimos o estilo', descricao: 'Conversamos sobre estilo e detalhes.' },
    { icone: 'fa-paint-brush', titulo: 'Produzimos com carinho', descricao: 'Criamos sua arte à mão.' },
    { icone: 'fa-shipping-fast', titulo: 'Enviamos com segurança', descricao: 'Embalagem especial para todo Brasil.' },
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-24 lg:py-28 bg-beige-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-script text-terracotta text-lg md:text-xl mb-2 md:mb-3">Como Funciona</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brown font-bold mb-3 md:mb-4">
            Simples, rápido e com carinho
          </h2>
          <p className="text-brown-light max-w-2xl mx-auto text-sm sm:text-base">
            Em apenas 4 passos, transformamos a foto do seu pet em uma arte única.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {etapas.map((etapa, indice) => (
            <div key={indice} className="text-center relative group">
              {indice < etapas.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px]">
                  <div className="h-full bg-gradient-to-r from-terracotta/30 to-terracotta/10"></div>
                </div>
              )}
              <div className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-cream border-2 border-terracotta/30 mb-4 md:mb-6 shadow-lg group-hover:border-terracotta group-hover:shadow-xl transition-all duration-300">
                <i className={`fas ${etapa.icone} text-terracotta text-xl sm:text-2xl md:text-3xl`}></i>
                <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-terracotta text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shadow-md">
                  {indice + 1}
                </span>
              </div>
              <h3 className="font-serif text-base sm:text-lg md:text-xl text-brown font-bold mb-1 md:mb-2">{etapa.titulo}</h3>
              <p className="text-brown-light text-xs sm:text-sm leading-relaxed">{etapa.descricao}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <BotaoWhatsApp mensagem={mensagensWhatsApp.comoFunciona}>
            <i className="fab fa-whatsapp text-xl"></i>
            Começar agora
          </BotaoWhatsApp>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// DEPOIMENTOS
// ============================================================

function Depoimentos() {
  const depoimentos = [
    { nome: 'Mariana S.', pet: 'Tutora da Luna (Golden)', texto: 'Fiquei emocionada quando recebi o quadro! Capturou perfeitamente a essência da minha Luna.', avaliacao: 5 },
    { nome: 'Carlos R.', pet: 'Tutor do Thor (Bulldog)', texto: 'Presenteei minha esposa com a escultura do Thor e ela chorou de emoção! Trabalho impecável!', avaliacao: 5 },
    { nome: 'Juliana M.', pet: 'Tutora da Mel (Shih Tzu)', texto: 'Já é o segundo quadro que encomendo! Trabalho feito com muito amor e dedicação.', avaliacao: 5 },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <p className="font-script text-terracotta text-lg md:text-xl mb-2 md:mb-3">Depoimentos</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brown font-bold mb-3 md:mb-4">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {depoimentos.map((d, i) => (
            <div key={i} className="card-hover bg-beige-light rounded-2xl p-5 sm:p-6 md:p-8 shadow-md relative">
              <div className="absolute -top-3 left-5 sm:left-6 bg-terracotta text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-md">
                <i className="fas fa-quote-left text-xs"></i>
              </div>
              <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4 mt-1">
                {Array.from({ length: d.avaliacao }).map((_, j) => (
                  <i key={j} className="fas fa-star text-yellow-500 text-xs sm:text-sm"></i>
                ))}
              </div>
              <p className="text-brown-light italic leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">"{d.texto}"</p>
              <div className="border-t border-beige pt-3 sm:pt-4">
                <p className="font-semibold text-brown text-sm sm:text-base">{d.nome}</p>
                <p className="text-brown-medium text-xs sm:text-sm">{d.pet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FAQ
// ============================================================

function FAQ() {
  const [indiceAberto, setIndiceAberto] = useState<number | null>(null);

  const perguntas = [
    { pergunta: 'Quanto tempo leva para produzir?', resposta: 'Pinturas levam de 7 a 15 dias úteis, esculturas de 15 a 30 dias.' },
    { pergunta: 'Qual o valor?', resposta: 'Varia conforme tamanho e técnica. Entre em contato pelo WhatsApp para orçamento!' },
    { pergunta: 'Enviam para todo o Brasil?', resposta: 'Sim! Enviamos para todo o Brasil com embalagem especial.' },
    { pergunta: 'Como faço para encomendar?', resposta: 'Chame no WhatsApp, envie a foto do seu pet e conversamos sobre o que deseja.' },
    { pergunta: 'Posso pedir alterações?', resposta: 'Sim! Enviamos fotos do progresso e fazemos ajustes antes da finalização.' },
    { pergunta: 'Que tipo de foto precisam?', resposta: 'Quanto mais nítida e bem iluminada, melhor! Fotos de frente ou 3/4.' },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 lg:py-28 bg-beige-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <p className="font-script text-terracotta text-lg md:text-xl mb-2 md:mb-3">Dúvidas Frequentes</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brown font-bold mb-3 md:mb-4">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {perguntas.map((faq, i) => (
            <div key={i} className="bg-cream rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <button onClick={() => setIndiceAberto(indiceAberto === i ? null : i)} className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left gap-3" aria-expanded={indiceAberto === i}>
                <span className="font-semibold text-brown text-sm sm:text-base pr-2">{faq.pergunta}</span>
                <i className={`fas fa-chevron-down text-terracotta transition-transform duration-300 shrink-0 ${indiceAberto === i ? 'rotate-180' : ''}`}></i>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${indiceAberto === i ? 'max-h-60 pb-4 sm:pb-5 px-4 sm:px-5 md:px-6' : 'max-h-0'}`}>
                <p className="text-brown-light leading-relaxed text-sm sm:text-base">{faq.resposta}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <p className="text-brown-light mb-4 text-sm sm:text-base">Não encontrou sua dúvida?</p>
          <BotaoWhatsApp mensagem={mensagensWhatsApp.duvida}>
            <i className="fab fa-whatsapp text-xl"></i>
            Falar no WhatsApp
          </BotaoWhatsApp>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CTA FINAL
// ============================================================

function CTAFinal() {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-gradient-to-br from-terracotta via-terracotta-dark to-brown relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-60 sm:h-60 border-2 border-white rounded-full"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4 md:mb-6 leading-tight">
          Seu melhor amigo merece uma <span className="italic">homenagem à altura</span>
        </h2>
        <p className="text-white/90 text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
          Transforme aquela foto especial em uma obra de arte única.
        </p>
        <a href={gerarLinkWhatsApp(mensagensWhatsApp.orcamentoArte)} target="_blank" rel="noopener noreferrer" className="btn-shine inline-flex items-center gap-2 sm:gap-3 bg-white text-terracotta hover:bg-cream font-bold py-3.5 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl text-base sm:text-lg">
          <i className="fab fa-whatsapp text-xl sm:text-2xl"></i>
          Solicitar Orçamento Agora
        </a>
      </div>
    </section>
  );
}

// ============================================================
// RODAPÉ
// ============================================================

function Rodape() {
  const linksRapidos = [
    { href: '#sobre', texto: 'Sobre' },
    { href: '#servicos', texto: 'Serviços' },
    { href: '#galeria', texto: 'Galeria' },
    { href: '#como-funciona', texto: 'Como Funciona' },
    { href: '#faq', texto: 'FAQ' },
  ];

  return (
    <footer className="bg-brown text-white py-10 md:py-16 safe-area-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mb-8 md:mb-10">
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-script text-2xl sm:text-3xl text-terracotta-light mb-3 md:mb-4">{dadosNegocio.nome}</h3>
            <p className="text-white/70 leading-relaxed text-sm sm:text-base">Eternizando momentos especiais com seu pet através da arte manual.</p>
          </div>
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 md:mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {linksRapidos.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/70 hover:text-terracotta-light transition-colors text-sm sm:text-base inline-block py-1">{link.texto}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="font-semibold text-base sm:text-lg mb-3 md:mb-4">Contato</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              <li><a href={gerarLinkWhatsApp(mensagensWhatsApp.saudacao)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-terracotta-light transition-colors text-sm sm:text-base"><i className="fab fa-whatsapp text-terracotta-light"></i>{contato.whatsapp.numeroFormatado}</a></li>
              <li><a href={contato.instagram.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-terracotta-light transition-colors text-sm sm:text-base"><i className="fab fa-instagram text-terracotta-light"></i>{contato.instagram.usuario}</a></li>
              <li className="flex items-center gap-3 text-white/70 text-sm sm:text-base"><i className="fas fa-map-marker-alt text-terracotta-light"></i><span>{dadosNegocio.cidades.join(' – ')} / {dadosNegocio.estado}</span></li>
              <li className="flex items-center gap-3 text-white/70 text-sm sm:text-base"><i className="fas fa-truck text-terracotta-light"></i><span>Envio para todo o Brasil</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs sm:text-sm text-center sm:text-left">© 2024 {dadosNegocio.nome}. Todos os direitos reservados.</p>
          <div className="flex gap-3 sm:gap-4">
            <a href={contato.instagram.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-terracotta flex items-center justify-center transition-colors" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href={gerarLinkWhatsApp(mensagensWhatsApp.saudacao)} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-whatsapp flex items-center justify-center transition-colors" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// APP
// ============================================================

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Galeria />
      <ComoFunciona />
      <Depoimentos />
      <FAQ />
      <CTAFinal />
      <Rodape />
      <BotaoFlutuanteWhatsApp />
    </div>
  );
}
