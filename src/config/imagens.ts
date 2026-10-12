/**
 * ============================================================
 * CONFIGURAÇÃO DE IMAGENS DO SITE - Danissaura3d
 * ============================================================
 *
 * Este arquivo centraliza todas as imagens utilizadas no site.
 * As URLs são construídas dinamicamente a partir da variável de ambiente.
 *
 * Para adicionar novas imagens:
 * 1. Faça upload para o repositório GitHub
 * 2. Adicione o nome do arquivo na lista abaixo
 * 3. O site atualizará automaticamente
 *
 * ============================================================
 */

import { config } from './env';

// URL base das imagens (do ambiente ou padrão)
const BASE_URL = config.imageBaseUrl;

/**
 * Lista de imagens disponíveis no repositório
 * Adicione novos nomes de arquivo aqui para disponibilizá-los no site
 */
export const imagensDisponiveis = [
  // Imagens grandes (webp) - trabalhos finais
  '798135059_18102741314217188_718285032764919498_n.webp',
  '828443378_18106260197217188_4650372766708068748_n.webp',
  '810962194_18105044990217188_1754108696374562218_n.webp',
  '831959158_18106247597217188_5081188161126538773_n.webp',
  '819882710_18105047648217188_4603862579207581834_n.jpg',
  '825269469_18105596426217188_2326124260290118986_n.webp',
  '806299554_18103417334217188_5356991221821189995_n.webp',
  '825270079_18105495944217188_1202846105606803976_n.webp',
  '804445874_18103329374217188_56787509317163949_n.webp',
  '805119830_18103153922217188_4898297114415455780_n.webp',
  '818075076_18105184760217188_4891189182109765668_n.webp',
  '828677545_18106233302217188_3709189679778970081_n.webp',
  '829356945_18106231076217188_4110392735769196189_n.webp',
];

/**
 * Gera URL completa da imagem
 */
export function getImagemUrl(nomeArquivo: string): string {
  return `${BASE_URL}/${nomeArquivo}`;
}

/**
 * Verifica se uma imagem existe (útil para validação)
 */
export async function verificarImagem(nomeArquivo: string): Promise<boolean> {
  try {
    const url = getImagemUrl(nomeArquivo);
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

// ------------------------------------------------------------
// IMAGEM DE DESTAQUE (HERO)
// ------------------------------------------------------------
export const heroImage = {
  src: getImagemUrl('798135059_18102741314217188_718285032764919498_n.webp'),
  alt: 'Pintura artística de pet feita à mão',
};

// ------------------------------------------------------------
// IMAGEM DA SEÇÃO "SOBRE"
// ------------------------------------------------------------
export const aboutImage = {
  src: getImagemUrl('828443378_18106260197217188_4650372766708068748_n.webp'),
  alt: 'Processo de pintura artesanal de pets',
};

// ------------------------------------------------------------
// IMAGENS DOS SERVIÇOS
// ------------------------------------------------------------
export const servicesImages = {
  pinturaManual: {
    src: getImagemUrl('810962194_18105044990217188_1754108696374562218_n.webp'),
    alt: 'Pintura manual de pet em tela',
  },
  esculturas: {
    src: getImagemUrl('831959158_18106247597217188_5081188161126538773_n.webp'),
    alt: 'Escultura artesanal de pet',
  },
  quadrosPersonalizados: {
    src: getImagemUrl('819882710_18105047648217188_4603862579207581834_n.jpg'),
    alt: 'Quadro personalizado de pet',
  },
};

// ------------------------------------------------------------
// GALERIA DE TRABALHOS
// ------------------------------------------------------------
export const galleryImages = [
  {
    src: getImagemUrl('825269469_18105596426217188_2326124260290118986_n.webp'),
    alt: 'Trabalho artístico de pet - destaque',
  },
  {
    src: getImagemUrl('806299554_18103417334217188_5356991221821189995_n.webp'),
    alt: 'Pintura personalizada de pet',
  },
  {
    src: getImagemUrl('825270079_18105495944217188_1202846105606803976_n.webp'),
    alt: 'Retrato artístico de pet',
  },
  {
    src: getImagemUrl('804445874_18103329374217188_56787509317163949_n.webp'),
    alt: 'Quadro pintado à mão',
  },
  {
    src: getImagemUrl('805119830_18103153922217188_4898297114415455780_n.webp'),
    alt: 'Arte personalizada de pet',
  },
  {
    src: getImagemUrl('818075076_18105184760217188_4891189182109765668_n.webp'),
    alt: 'Pintura artesanal de animal',
  },
  {
    src: getImagemUrl('828677545_18106233302217188_3709189679778970081_n.webp'),
    alt: 'Obra de arte de pet',
  },
  {
    src: getImagemUrl('829356945_18106231076217188_4110392735769196189_n.webp'),
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
