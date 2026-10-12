/**
 * ============================================================
 * CONFIGURAÇÃO DE AMBIENTE - Danissaura3d
 * ============================================================
 * 
 * Este arquivo centraliza todas as configurações do sistema.
 * Use variáveis de ambiente para facilitar o deploy em diferentes ambientes.
 * 
 * Para criar um arquivo .env local:
 * 1. Copie .env.example para .env
 * 2. Ajuste os valores conforme necessário
 * 
 * ============================================================
 */

// Configurações de ambiente com fallbacks
export const config = {
  // URL base das imagens
  imageBaseUrl: import.meta.env.VITE_IMAGE_BASE_URL || 
    'https://raw.githubusercontent.com/DaniloBorgesF/PetDanissaura3D/main/src/public/images',
  
  // WhatsApp
  whatsapp: {
    numero: import.meta.env.VITE_WHATSAPP_NUMBER || '5514981685016',
    numeroFormatado: '(14) 98168-5016',
    get linkBase() {
      return `https://wa.me/${this.numero}`;
    }
  },
  
  // Instagram
  instagram: {
    usuario: '@danissaura_3d',
    link: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/danissaura_3d'
  },
  
  // Dados do negócio
  negocio: {
    nome: import.meta.env.VITE_ATELIE_NAME || 'Danissaura3d',
    cidades: ['Bauru', 'Cerquilho'],
    estado: 'SP',
    envioNacional: true
  },
  
  // Ambiente
  env: import.meta.env.VITE_APP_ENV || 'development',
  
  // Feature flags (para futuras funcionalidades)
  features: {
    analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    imageOptimization: true,
    lazyLoading: true
  }
};

/**
 * Gera link do WhatsApp com mensagem
 */
export function gerarLinkWhatsApp(mensagem: string): string {
  return `${config.whatsapp.linkBase}?text=${encodeURIComponent(mensagem)}`;
}

/**
 * Mensagens pré-definidas para WhatsApp
 */
export const mensagensWhatsApp = {
  saudacao: 'Olá! Vim pelo site e gostaria de saber mais sobre os trabalhos.',
  orcamentoGeral: 'Olá! Vim pelo site e gostaria de um orçamento.',
  orcamentoQuadro: 'Olá! Vim pelo site e gostaria de um orçamento para um quadro do meu pet.',
  orcamentoArte: 'Olá! Vim pelo site e gostaria de um orçamento para eternizar meu pet em arte!',
  servicoPintura: 'Olá! Tenho interesse em uma pintura manual do meu pet. Gostaria de saber mais!',
  servicoEscultura: 'Olá! Tenho interesse em uma escultura do meu pet. Gostaria de saber mais!',
  servicoQuadro: 'Olá! Tenho interesse em um quadro personalizado do meu pet. Gostaria de saber mais!',
  galeriaSimilar: 'Olá! Vi essa arte no site e gostaria de solicitar algo similar para o meu pet!',
  comoFunciona: 'Olá! Gostaria de encomendar uma arte do meu pet. Como funciona?',
  duvida: 'Olá! Tenho uma dúvida sobre os trabalhos de vocês.'
};

/**
 * Dados do negócio (compatibilidade com código existente)
 */
export const dadosNegocio = config.negocio;

/**
 * Contato (compatibilidade com código existente)
 */
export const contato = {
  whatsapp: config.whatsapp,
  instagram: config.instagram
};
