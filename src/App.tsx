/**
 * ============================================================
 * COMPONENTE PRINCIPAL - Danissaura3d
 * ============================================================
 *
 * Landing page do ateliê Danissaura3d, especializada em
 * pintura manual, esculturas e quadros personalizados de pets.
 *
 * Estrutura das seções:
 *   1. Navbar (navegação fixa no topo)
 *   2. Hero (cabeçalho principal com CTA)
 *   3. Sobre (história do ateliê)
 *   4. Serviços (pintura, esculturas, quadros)
 *   5. Galeria (grade de trabalhos com modal)
 *   6. Como Funciona (passo a passo)
 *   7. Depoimentos (avaliações de clientes)
 *   8. FAQ (perguntas frequentes)
 *   9. CTA Final (chamada para ação)
 *  10. Rodapé (informações e links)
 *  + Botão flutuante do WhatsApp
 *
 * ============================================================
 */

import { useState, useEffect } from 'react';
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
} from './config/dados';

// ============================================================
// COMPONENTES AUXILIARES
// ============================================================

/**
 * Botão de WhatsApp reutilizável.
 * Abre o WhatsApp com uma mensagem pré-definida.
 *
 * @param mensagem - Texto enviado automaticamente ao WhatsApp
 * @param children - Conteúdo do botão (ícone + texto)
 * @param className - Classes CSS adicionais
 */
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
      className={`inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${className}`}
    >
      {children}
    </a>
  );
}

/**
 * Botão flutuante do WhatsApp.
 * Aparece após o usuário rolar a página (scroll > 300px).
 * Sempre visível no canto inferior direito.
 */
function BotaoFlutuanteWhatsApp() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const controlarScroll = () => {
      setVisivel(window.scrollY > 300);
    };
    window.addEventListener('scroll', controlarScroll);
    return () => window.removeEventListener('scroll', controlarScroll);
  }, []);

  return (
    <a
      href={gerarLinkWhatsApp(mensagensWhatsApp.saudacao)}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-whatsapp hover:bg-whatsapp-dark text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 ${visivel ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      aria-label="Contato pelo WhatsApp"
    >
      <i className="fab fa-whatsapp text-3xl"></i>
    </a>
  );
}

// ============================================================
// SEÇÃO: NAVEGAÇÃO (NAVBAR)
// ============================================================

/**
 * Barra de navegação fixa no topo.
 * - Muda de fundo transparente para opaco ao rolar a página.
 * - Possui menu mobile (hambúrguer) para telas pequenas.
 * - Links de âncora para cada seção do site.
 */
function Navbar() {
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const controlarScroll = () => setRolou(window.scrollY > 50);
    window.addEventListener('scroll', controlarScroll);
    return () => window.removeEventListener('scroll', controlarScroll);
  }, []);

  // Links de navegação (reutilizados no menu mobile)
  const linksNav = [
    { href: '#sobre', texto: 'Sobre' },
    { href: '#servicos', texto: 'Serviços' },
    { href: '#galeria', texto: 'Galeria' },
    { href: '#como-funciona', texto: 'Como Funciona' },
    { href: '#faq', texto: 'FAQ' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        rolou ? 'bg-cream/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo / Nome do ateliê */}
        <a href="#" className="font-script text-2xl sm:text-3xl text-terracotta font-bold">
          {dadosNegocio.nome}
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {linksNav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-brown-light hover:text-terracotta transition-colors text-sm font-medium"
            >
              {link.texto}
            </a>
          ))}
          <a
            href={gerarLinkWhatsApp(mensagensWhatsApp.orcamentoGeral)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-terracotta hover:bg-terracotta-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
          >
            <i className="fab fa-whatsapp mr-1"></i> Orçamento
          </a>
        </div>

        {/* Botão Menu Mobile */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden text-brown text-2xl"
          aria-label="Abrir menu de navegação"
        >
          <i className={`fas ${menuAberto ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Menu Mobile (aparece quando menuAberto === true) */}
      {menuAberto && (
        <div className="md:hidden bg-cream/98 backdrop-blur-md border-t border-beige mt-2 py-6 px-6 space-y-4 animate-fade-in-up">
          {linksNav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuAberto(false)}
              className="block text-brown-light hover:text-terracotta transition-colors font-medium"
            >
              {link.texto}
            </a>
          ))}
          <a
            href={gerarLinkWhatsApp(mensagensWhatsApp.orcamentoGeral)}
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

// ============================================================
// SEÇÃO: HERO (CABEÇALHO PRINCIPAL)
// ============================================================

/**
 * Seção de destaque com:
 * - Imagem de fundo (configurável em src/config/imagens.ts)
 * - Título principal e subtítulo
 * - Botão CTA para WhatsApp
 * - Botão secundário para rolar até a galeria
 */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          className="w-full h-full object-cover"
        />
        {/* Gradientes sobre a imagem para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/80 to-cream/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent"></div>
      </div>

      {/* Conteúdo textual */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32 md:py-0 w-full">
        <div className="max-w-2xl">
          <p className="font-script text-terracotta text-xl sm:text-2xl mb-4 animate-fade-in-up">
            Feito à mão, com amor
          </p>
          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brown font-bold leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Eternize a memória do seu pet em{' '}
            <span className="text-terracotta italic">arte</span>
          </h1>
          <p
            className="text-brown-light text-lg sm:text-xl mb-8 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Pintura manual, esculturas e quadros personalizados. Seu melhor amigo merece uma
            homenagem à altura. Envio para todo o Brasil.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <BotaoWhatsApp mensagem={mensagensWhatsApp.orcamentoQuadro}>
              <i className="fab fa-whatsapp text-xl"></i>
              Solicitar Orçamento
            </BotaoWhatsApp>
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

      {/* Indicador de rolagem (apenas desktop) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float hidden md:block">
        <i className="fas fa-chevron-down text-terracotta text-2xl opacity-60"></i>
      </div>
    </section>
  );
}

// ============================================================
// SEÇÃO: SOBRE O ATELIER
// ============================================================

/**
 * Seção "Sobre" com:
 * - Imagem do processo de pintura
 * - Texto sobre a história e valores do ateliê
 * - Estatísticas (pets eternizados, envio nacional)
 */
function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Imagem com moldura decorativa */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage.src}
                alt={aboutImage.alt}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            {/* Moldura decorativa offset */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-terracotta/30 rounded-2xl -z-10"></div>
            <div className="absolute -top-4 -left-4 bg-terracotta/10 w-24 h-24 rounded-full -z-10"></div>
          </div>

          {/* Texto descritivo */}
          <div>
            <p className="font-script text-terracotta text-xl mb-3">Sobre o Ateliê</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-brown font-bold mb-6">
              Cada traço conta uma história de amor
            </h2>
            <div className="space-y-4 text-brown-light leading-relaxed">
              <p>
                O <strong className="text-brown">{dadosNegocio.nome}</strong> nasceu da paixão por
                animais e pela arte. Cada peça é criada com dedicação e carinho, transformando fotos
                em verdadeiras obras de arte que eternizam momentos especiais com seu pet.
              </p>
              <p>
                Trabalhamos com pintura manual em tela, esculturas tridimensionais e quadros
                personalizados. Cada detalhe é pensado para capturar a essência e a personalidade do
                seu companheiro de quatro patas.
              </p>
              <p>
                Com ateliê em <strong className="text-brown">{dadosNegocio.cidades.join(' e ')}</strong> (
                {dadosNegocio.estado}), atendemos com amor clientes de todo o Brasil, levando arte e
                memórias até a sua casa.
              </p>
            </div>

            {/* Estatísticas */}
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

// ============================================================
// SEÇÃO: SERVIÇOS
// ============================================================

/**
 * Seção de serviços com 3 cards:
 * - Pintura Manual
 * - Esculturas
 * - Quadros Personalizados
 *
 * Cada card possui imagem, descrição e botão para WhatsApp
 * com mensagem específica do serviço.
 */
function Servicos() {
  // Dados dos serviços (textos e mensagens)
  const servicos = [
    {
      titulo: 'Pintura Manual',
      descricao:
        'Quadros pintados à mão com a foto do seu pet. Cada pincelada captura a personalidade e o charme do seu melhor amigo.',
      imagem: servicesImages.pinturaManual,
      mensagem: mensagensWhatsApp.servicoPintura,
    },
    {
      titulo: 'Esculturas',
      descricao:
        'Peças tridimensionais personalizadas que ganham vida e ocupam um lugar especial na sua casa.',
      imagem: servicesImages.esculturas,
      mensagem: mensagensWhatsApp.servicoEscultura,
    },
    {
      titulo: 'Quadros Personalizados',
      descricao:
        'Composições exclusivas e criativas para presentear quem você ama ou decorar seu lar com memórias afetivas.',
      imagem: servicesImages.quadrosPersonalizados,
      mensagem: mensagensWhatsApp.servicoQuadro,
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-28 bg-beige-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <p className="font-script text-terracotta text-xl mb-3">Nossos Serviços</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brown font-bold mb-4">
            Transforme uma foto em uma obra de arte
          </h2>
          <p className="text-brown-light max-w-2xl mx-auto">
            Escolha o estilo que mais combina com seu pet e nós cuidamos de cada detalhe com todo o
            carinho.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {servicos.map((servico, indice) => (
            <div
              key={indice}
              className="bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
            >
              {/* Imagem do serviço */}
              <div className="overflow-hidden h-64">
                <img
                  src={servico.imagem.src}
                  alt={servico.imagem.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              {/* Conteúdo do card */}
              <div className="p-6 sm:p-8">
                <h3 className="font-serif text-2xl text-brown font-bold mb-3">{servico.titulo}</h3>
                <p className="text-brown-light mb-6 leading-relaxed">{servico.descricao}</p>
                <BotaoWhatsApp mensagem={servico.mensagem} className="w-full justify-center text-sm">
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
// SEÇÃO: GALERIA DE TRABALHOS
// ============================================================

/**
 * Galeria com grade de imagens dos trabalhos.
 * - A primeira imagem ocupa 2x2 (destaque)
 * - Ao clicar, abre um modal com a imagem ampliada
 * - Modal possui botão para solicitar algo similar no WhatsApp
 *
 * As imagens são configuradas em src/config/imagens.ts
 */
function Galeria() {
  const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <p className="font-script text-terracotta text-xl mb-3">Galeria</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brown font-bold mb-4">
            Trabalhos que contam histórias
          </h2>
          <p className="text-brown-light max-w-2xl mx-auto">
            Cada peça é única, assim como o pet que a inspirou. Confira alguns dos nossos trabalhos.
          </p>
        </div>

        {/* Grade de imagens */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((imagem, indice) => (
            <div
              key={indice}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                indice === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              onClick={() => setImagemSelecionada(imagem.src)}
            >
              <img
                src={imagem.src}
                alt={imagem.alt}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                  indice === 0 ? 'h-full min-h-[300px] md:min-h-[400px]' : 'h-48 md:h-56'
                }`}
              />
              {/* Overlay ao passar o mouse */}
              <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <i className="fas fa-search-plus text-white text-2xl mb-2"></i>
                  <p className="text-white text-sm font-medium">{imagem.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de imagem ampliada */}
      {imagemSelecionada && (
        <div
          className="fixed inset-0 z-50 bg-brown/90 flex items-center justify-center p-4"
          onClick={() => setImagemSelecionada(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Botão fechar */}
            <button
              onClick={() => setImagemSelecionada(null)}
              className="absolute -top-12 right-0 text-white hover:text-terracotta transition-colors text-2xl"
              aria-label="Fechar imagem"
            >
              <i className="fas fa-times"></i>
            </button>
            {/* Imagem ampliada */}
            <img
              src={imagemSelecionada}
              alt="Trabalho ampliado"
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            {/* Botão CTA no modal */}
            <div className="mt-4 text-center">
              <BotaoWhatsApp mensagem={mensagensWhatsApp.galeriaSimilar}>
                <i className="fab fa-whatsapp"></i>
                Solicitar similar no WhatsApp
              </BotaoWhatsApp>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// ============================================================
// SEÇÃO: COMO FUNCIONA (PASSO A PASSO)
// ============================================================

/**
 * Seção explicativa com 4 etapas do processo:
 * 1. Enviar foto
 * 2. Definir estilo
 * 3. Produção artesanal
 * 4. Envio seguro
 */
function ComoFunciona() {
  const etapas = [
    {
      icone: 'fa-camera',
      titulo: 'Envie a foto',
      descricao: 'Você envia a foto do seu pet pelo WhatsApp. Quanto mais nítida, melhor o resultado!',
    },
    {
      icone: 'fa-palette',
      titulo: 'Definimos o estilo',
      descricao: 'Conversamos sobre o estilo, tamanho e detalhes da peça para ficar perfeita.',
    },
    {
      icone: 'fa-paint-brush',
      titulo: 'Produzimos com carinho',
      descricao: 'Criamos sua arte à mão, com todo cuidado e atenção aos detalhes.',
    },
    {
      icone: 'fa-box',
      titulo: 'Enviamos com segurança',
      descricao: 'Embalamos com todo cuidado e enviamos para todo o Brasil.',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-beige-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <p className="font-script text-terracotta text-xl mb-3">Como Funciona</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brown font-bold mb-4">
            Simples, rápido e com todo carinho
          </h2>
          <p className="text-brown-light max-w-2xl mx-auto">
            Em apenas 4 passos, transformamos a foto do seu pet em uma arte única.
          </p>
        </div>

        {/* Grid de etapas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {etapas.map((etapa, indice) => (
            <div key={indice} className="text-center relative">
              {/* Linha conectora (apenas desktop) */}
              {indice < etapas.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-terracotta/20"></div>
              )}

              {/* Círculo com ícone e número */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-cream border-2 border-terracotta/30 mb-6 shadow-lg">
                <i className={`fas ${etapa.icone} text-terracotta text-3xl`}></i>
                <span className="absolute -top-2 -right-2 bg-terracotta text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {indice + 1}
                </span>
              </div>

              <h3 className="font-serif text-xl text-brown font-bold mb-3">{etapa.titulo}</h3>
              <p className="text-brown-light text-sm leading-relaxed">{etapa.descricao}</p>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center mt-12">
          <BotaoWhatsApp mensagem={mensagensWhatsApp.comoFunciona}>
            <i className="fab fa-whatsapp text-xl"></i>
            Começar agora pelo WhatsApp
          </BotaoWhatsApp>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SEÇÃO: DEPOIMENTOS
// ============================================================

/**
 * Seção com depoimentos de clientes satisfeitos.
 * Cada depoimento inclui nome, pet e texto de avaliação.
 */
function Depoimentos() {
  const depoimentos = [
    {
      nome: 'Mariana S.',
      pet: 'Tutora da Luna (Golden)',
      texto:
        'Fiquei emocionada quando recebi o quadro! Capturou perfeitamente a essência da minha Luna. Cada detalhe ficou incrível, parece que ela vai pular da tela!',
      avaliacao: 5,
    },
    {
      nome: 'Carlos R.',
      pet: 'Tutor do Thor (Bulldog)',
      texto:
        'Presenteei minha esposa com a escultura do Thor e ela chorou de emoção! O trabalho é impecável, superou todas as expectativas. Recomendo demais!',
      avaliacao: 5,
    },
    {
      nome: 'Juliana M.',
      pet: 'Tutora da Mel (Shih Tzu)',
      texto:
        'Já é o segundo quadro que encomendo! O primeiro foi da Mel e agora fiz um do meu falecido Rex. Trabalho feito com muito amor e dedicação. Gratidão!',
      avaliacao: 5,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <p className="font-script text-terracotta text-xl mb-3">Depoimentos</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brown font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-brown-light max-w-2xl mx-auto">
            A satisfação de quem confia em nós para eternizar momentos especiais.
          </p>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, indice) => (
            <div
              key={indice}
              className="bg-beige-light rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Ícone de aspas */}
              <div className="absolute -top-4 left-6 bg-terracotta text-white w-8 h-8 rounded-full flex items-center justify-center">
                <i className="fas fa-quote-left text-xs"></i>
              </div>

              {/* Estrelas de avaliação */}
              <div className="flex gap-1 mb-4 mt-2">
                {Array.from({ length: depoimento.avaliacao }).map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-500 text-sm"></i>
                ))}
              </div>

              {/* Texto do depoimento */}
              <p className="text-brown-light italic leading-relaxed mb-6">
                "{depoimento.texto}"
              </p>

              {/* Nome e pet */}
              <div className="border-t border-beige pt-4">
                <p className="font-semibold text-brown">{depoimento.nome}</p>
                <p className="text-brown-medium text-sm">{depoimento.pet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SEÇÃO: PERGUNTAS FREQUENTES (FAQ)
// ============================================================

/**
 * Seção FAQ com accordion (expandir/recolher).
 * Cada pergunta pode ser expandida ao clicar.
 */
function FAQ() {
  const [indiceAberto, setIndiceAberto] = useState<number | null>(null);

  const perguntas = [
    {
      pergunta: 'Quanto tempo leva para produzir?',
      resposta:
        'O prazo varia de acordo com o tipo de peça e o nível de detalhe. Em média, pinturas levam de 7 a 15 dias úteis, e esculturas de 15 a 30 dias. Confirmamos o prazo exato no momento do orçamento.',
    },
    {
      pergunta: 'Qual o valor?',
      resposta:
        'O valor varia conforme o tamanho da peça, nível de detalhe e técnica utilizada. Para receber um orçamento personalizado, entre em contato pelo WhatsApp e enviaremos todos os detalhes!',
    },
    {
      pergunta: 'Vocês enviam para todo o Brasil?',
      resposta:
        'Sim! Fazemos envios para todo o território nacional com embalagem segura e especial para proteger a arte durante o transporte. O frete é calculado no momento do pedido.',
    },
    {
      pergunta: 'Como faço para encomendar?',
      resposta:
        'É super simples! Basta nos chamar no WhatsApp, enviar a foto do seu pet e conversar sobre o que deseja. Nós guiamos você em todo o processo, desde a escolha do estilo até a entrega.',
    },
    {
      pergunta: 'Posso pedir alterações durante a produção?',
      resposta:
        'Sim! Enviamos fotos do progresso para você acompanhar. Se houver algo que deseja ajustar, conversamos e fazemos as alterações necessárias antes da finalização.',
    },
    {
      pergunta: 'Que tipo de foto vocês precisam?',
      resposta:
        'Quanto mais nítida e bem iluminada a foto, melhor o resultado! Preferimos fotos de frente ou de 3/4, com boa resolução. Se tiver dúvidas, nos envie que ajudamos a escolher a melhor.',
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-beige-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <p className="font-script text-terracotta text-xl mb-3">Dúvidas Frequentes</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brown font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-brown-light">
            Tire suas dúvidas ou fale conosco diretamente pelo WhatsApp.
          </p>
        </div>

        {/* Lista de perguntas com accordion */}
        <div className="space-y-4">
          {perguntas.map((faq, indice) => (
            <div
              key={indice}
              className="bg-cream rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Botão para expandir/recolher */}
              <button
                onClick={() => setIndiceAberto(indiceAberto === indice ? null : indice)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                aria-expanded={indiceAberto === indice}
              >
                <span className="font-semibold text-brown pr-4">{faq.pergunta}</span>
                <i
                  className={`fas fa-chevron-down text-terracotta transition-transform duration-300 ${
                    indiceAberto === indice ? 'rotate-180' : ''
                  }`}
                ></i>
              </button>
              {/* Resposta (visível quando expandida) */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  indiceAberto === indice ? 'max-h-60 pb-5 px-5 sm:px-6' : 'max-h-0'
                }`}
              >
                <p className="text-brown-light leading-relaxed">{faq.resposta}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA para dúvidas não respondidas */}
        <div className="text-center mt-12">
          <p className="text-brown-light mb-4">Não encontrou sua dúvida?</p>
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
// SEÇÃO: CTA FINAL (CHAMADA PARA AÇÃO)
// ============================================================

/**
 * Seção de destaque com fundo terracota.
 * Objetivo: converter visitantes que rolaram toda a página.
 */
function CTAFinal() {
  return (
    <section className="py-20 md:py-28 bg-terracotta relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 border-2 border-white rounded-full"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-6">
          Seu melhor amigo merece uma homenagem à altura
        </h2>
        <p className="text-white/90 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          Transforme aquela foto especial em uma obra de arte única. Feito à mão, com amor, para
          durar para sempre.
        </p>
        <a
          href={gerarLinkWhatsApp(mensagensWhatsApp.orcamentoArte)}
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

// ============================================================
// SEÇÃO: RODAPÉ
// ============================================================

/**
 * Rodapé com:
 * - Nome e descrição do ateliê
 * - Links rápidos para seções do site
 * - Informações de contato (WhatsApp, Instagram, localização)
 * - Ícones de redes sociais
 * - Copyright
 */
function Rodape() {
  const linksRapidos = [
    { href: '#sobre', texto: 'Sobre' },
    { href: '#servicos', texto: 'Serviços' },
    { href: '#galeria', texto: 'Galeria' },
    { href: '#como-funciona', texto: 'Como Funciona' },
    { href: '#faq', texto: 'FAQ' },
  ];

  return (
    <footer className="bg-brown text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Coluna 1: Marca */}
          <div>
            <h3 className="font-script text-3xl text-terracotta-light mb-4">{dadosNegocio.nome}</h3>
            <p className="text-white/70 leading-relaxed">
              Eternizando momentos especiais com seu pet através da arte manual. Cada peça é feita
              com amor e dedicação.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {linksRapidos.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-terracotta-light transition-colors"
                  >
                    {link.texto}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70">
                <i className="fab fa-whatsapp text-terracotta-light"></i>
                <a
                  href={gerarLinkWhatsApp(mensagensWhatsApp.saudacao)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-terracotta-light transition-colors"
                >
                  {contato.whatsapp.numeroFormatado}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <i className="fab fa-instagram text-terracotta-light"></i>
                <a
                  href={contato.instagram.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-terracotta-light transition-colors"
                >
                  {contato.instagram.usuario}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <i className="fas fa-map-marker-alt text-terracotta-light"></i>
                <span>
                  {dadosNegocio.cidades.join(' – ')} / {dadosNegocio.estado}
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <i className="fas fa-truck text-terracotta-light"></i>
                <span>Envio para todo o Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória + Copyright + Redes Sociais */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © 2024 {dadosNegocio.nome}. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a
              href={contato.instagram.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-terracotta flex items-center justify-center transition-colors"
              aria-label="Seguir no Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href={gerarLinkWhatsApp(mensagensWhatsApp.saudacao)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-whatsapp flex items-center justify-center transition-colors"
              aria-label="Contato pelo WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// COMPONENTE PRINCIPAL (APP)
// ============================================================

/**
 * Componente raiz do site.
 * Renderiza todas as seções em ordem e o botão flutuante do WhatsApp.
 */
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
