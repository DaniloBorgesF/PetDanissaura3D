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
// URL BASE DAS IMAGENS (GitHub Raw)
// ------------------------------------------------------------
const BASE_URL = 'https://raw.githubusercontent.com/DaniloBorgesF/PetDanissaura3D/main/src/public/images';

// ------------------------------------------------------------
// IMAGEM DE DESTAQUE (HERO)
// ------------------------------------------------------------
export const heroImage = {
  src: `${BASE_URL}/798135059_18102741314217188_718285032764919498_n.webp`,
  alt: 'Pintura artística de pet feita à mão',
};

// ------------------------------------------------------------
// IMAGEM DA SEÇÃO "SOBRE"
// ------------------------------------------------------------
export const aboutImage = {
  src: `${BASE_URL}/828443378_18106260197217188_4650372766708068748_n.webp`,
  alt: 'Processo de pintura artesanal de pets',
};

// ------------------------------------------------------------
// IMAGENS DOS SERVIÇOS
// ------------------------------------------------------------
export const servicesImages = {
  pinturaManual: {
    src: `${BASE_URL}/810962194_18105044990217188_1754108696374562218_n.webp`,
    alt: 'Pintura manual de pet em tela',
  },
  esculturas: {
    src: `${BASE_URL}/831959158_18106247597217188_5081188161126538773_n.webp`,
    alt: 'Escultura artesanal de pet',
  },
  quadrosPersonalizados: {
    src: `${BASE_URL}/819882710_18105047648217188_4603862579207581834_n.jpg`,
    alt: 'Quadro personalizado de pet',
  },
};

// ------------------------------------------------------------
// GALERIA DE TRABALHOS
// A primeira imagem ocupa posição de destaque (2x2).
// ------------------------------------------------------------
export const galleryImages = [
  {
    src: `${BASE_URL}/825269469_18105596426217188_2326124260290118986_n.webp`,
    alt: 'Trabalho artístico de pet - destaque',
  },
  {
    src: `${BASE_URL}/806299554_18103417334217188_5356991221821189995_n.webp`,
    alt: 'Pintura personalizada de pet',
  },
  {
    src: `${BASE_URL}/825270079_18105495944217188_1202846105606803976_n.webp`,
    alt: 'Retrato artístico de pet',
  },
  {
    src: `${BASE_URL}/804445874_18103329374217188_56787509317163949_n.webp`,
    alt: 'Quadro pintado à mão',
  },
  {
    src: `${BASE_URL}/805119830_18103153922217188_4898297114415455780_n.webp`,
    alt: 'Arte personalizada de pet',
  },
  {
    src: `${BASE_URL}/818075076_18105184760217188_4891189182109765668_n.webp`,
    alt: 'Pintura artesanal de animal',
  },
  {
    src: `${BASE_URL}/828677545_18106233302217188_3709189679778970081_n.webp`,
    alt: 'Obra de arte de pet',
  },
  {
    src: `${BASE_URL}/829356945_18106231076217188_4110392735769196189_n.webp`,
    alt: 'Trabalho artístico personalizado',
  },
];

// ------------------------------------------------------------
// TIPOS EXPORTADOS
// ------------------------------------------------------------
export interface ImagemSite {
  src: string;
  alt: string;
}
