/**
 * ============================================================
 * CONFIGURAÇÃO DO NEGÓCIO - Danissaura3d
 * ============================================================
 *
 * Este arquivo centraliza todas as informações de contato,
 * links e dados do negócio. Altere aqui para atualizar em
 * todo o site automaticamente.
 *
 * ============================================================
 */

// ------------------------------------------------------------
// DADOS DO NEGÓCIO
// ------------------------------------------------------------
export const dadosNegocio = {
  nome: 'Danissaura3d',
  slogan: 'Eternize a memória do seu pet em arte',
  descricao: 'Pintura manual, esculturas e quadros personalizados. Envio para todo o Brasil.',
  cidades: ['Bauru', 'Cerquilho'],
  estado: 'SP',
  envioNacional: true,
};

// ------------------------------------------------------------
// CONTATO E REDES SOCIAIS
// ------------------------------------------------------------
export const contato = {
  whatsapp: {
    numero: '5514981685016',
    numeroFormatado: '(14) 98168-5016',
    linkBase: 'https://wa.me/5514981685016',
  },
  instagram: {
    usuario: '@danissaura_3d',
    link: 'https://instagram.com/danissaura_3d',
  },
};

/**
 * Gera um link do WhatsApp com mensagem pré-definida.
 *
 * @param mensagem - Texto que será enviado automaticamente ao abrir o WhatsApp
 * @returns URL completa do WhatsApp com a mensagem codificada
 *
 * @example
 * gerarLinkWhatsApp('Olá! Gostaria de um orçamento.')
 * // => 'https://wa.me/5514981685016?text=Ol%C3%A1!...'
 */
export function gerarLinkWhatsApp(mensagem: string): string {
  return `${contato.whatsapp.linkBase}?text=${encodeURIComponent(mensagem)}`;
}

// ------------------------------------------------------------
// MENSAGENS PRÉ-DEFINIDAS PARA O WHATSAPP
// Centraliza todas as mensagens usadas nos botões do site.
// ------------------------------------------------------------
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
  duvida: 'Olá! Tenho uma dúvida sobre os trabalhos de vocês.',
};
