/**
 * ============================================================
 * CONFIGURAÇÃO DE IMAGENS DO SITE - Danissaura3d
 * ============================================================
 *
 * Este arquivo centraliza todas as imagens utilizadas no site.
 * Para substituir uma imagem, basta trocar a URL ou caminho.
 * Para adicionar novas imagens, inclua um novo objeto no array.
 *
 * Como usar imagens locais:
 *   1. Coloque a imagem na pasta `public/images/`
 *   2. Use o caminho relativo: '/images/nome-da-imagem.jpg'
 *
 * Como usar imagens externas (URL):
 *   1. Cole a URL completa no campo `src`
 *
 * Exemplo de adição:
 *   { src: '/images/meu-novo-trabalho.jpg', alt: 'Descrição do trabalho' }
 *
 * ============================================================
 */

// ------------------------------------------------------------
// IMAGEM DE DESTAQUE (HERO)
// Usada na seção principal do site (cabeçalho)
// ------------------------------------------------------------
export const heroImage = {
  src: 'https://image.qwenlm.ai/generated-images/06b00b4f-8881-4a43-9eb0-530db4a381a9/_result.png',
  alt: 'Pintura artística de pet feita à mão',
};

// ------------------------------------------------------------
// IMAGEM DA SEÇÃO "SOBRE"
// Usada na seção que conta a história do ateliê
// ------------------------------------------------------------
export const aboutImage = {
  src: 'https://image.qwenlm.ai/generated-images/e97d4384-1cbf-4ab4-b7d3-ea5e4e7da8ef/_result.png',
  alt: 'Processo de pintura artesanal de pets',
};

// ------------------------------------------------------------
// IMAGENS DOS SERVIÇOS
// Cada serviço possui uma imagem de capa para o card.
// Para adicionar um novo serviço, inclua um novo objeto.
// ------------------------------------------------------------
export const servicesImages = {
  pinturaManual: {
    src: 'https://image.qwenlm.ai/generated-images/0a3cd3dd-360b-4fe8-b587-807f20f69542/_result.png',
    alt: 'Pintura manual de gato em tela',
  },
  esculturas: {
    src: 'https://image.qwenlm.ai/generated-images/3e9e23aa-f625-4bf6-b890-a97f9a022869/_result.png',
    alt: 'Escultura artesanal de poodle',
  },
  quadrosPersonalizados: {
    src: 'https://image.qwenlm.ai/generated-images/be6e06e2-4ecf-41a8-aeec-67d5c2ba977f/_result.png',
    alt: 'Quadro personalizado de Labrador',
  },
};

// ------------------------------------------------------------
// GALERIA DE TRABALHOS
// Array de imagens exibidas na galeria.
// Para adicionar uma nova imagem, basta incluir um novo objeto.
// Para remover, exclua o objeto correspondente.
// ------------------------------------------------------------
export const galleryImages = [
  {
    src: 'https://image.qwenlm.ai/generated-images/06b00b4f-8881-4a43-9eb0-530db4a381a9/_result.png',
    alt: 'Pintura de Golden Retriever',
  },
  {
    src: 'https://image.qwenlm.ai/generated-images/0a3cd3dd-360b-4fe8-b587-807f20f69542/_result.png',
    alt: 'Pintura de gato',
  },
  {
    src: 'https://image.qwenlm.ai/generated-images/3e9e23aa-f625-4bf6-b890-a97f9a022869/_result.png',
    alt: 'Escultura de poodle',
  },
  {
    src: 'https://image.qwenlm.ai/generated-images/be6e06e2-4ecf-41a8-aeec-67d5c2ba977f/_result.png',
    alt: 'Quadro de Labrador',
  },
  {
    src: 'https://image.qwenlm.ai/generated-images/2cb9042e-2604-4d8f-86c2-257e3d203770/_result.png',
    alt: 'Retrato de Bulldog Francês',
  },
  {
    src: 'https://image.qwenlm.ai/generated-images/e97d4384-1cbf-4ab4-b7d3-ea5e4e7da8ef/_result.png',
    alt: 'Processo de pintura artesanal',
  },
  {
    src: 'https://image.qwenlm.ai/generated-images/35246ea9-74dc-4274-aa9f-5b4c37a782f8/_result.png',
    alt: 'Coleção de miniaturas de pets',
  },
  {
    src: 'https://image.qwenlm.ai/generated-images/972d0e44-570a-4986-ad65-988835628eab/_result.png',
    alt: 'Pintura de Husky',
  },
];

// ------------------------------------------------------------
// TIPOS EXPORTADOS (para uso em componentes)
// ------------------------------------------------------------
export interface ImagemSite {
  src: string;
  alt: string;
}
