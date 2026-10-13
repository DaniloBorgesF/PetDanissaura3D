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
  {
    src: getImagemUrl('829941205_18106232018217188_2467034419591609220_n.webp'),
    alt: 'Pintura artística de pet',
  },
];

// ------------------------------------------------------------
// CARROSSEL - IMAGENS EXTRAS
// ------------------------------------------------------------
export const carrosselImages = [
  {
    src: getImagemUrl('736198367_18092885996217188_7685981633171466786_n.webp'),
    alt: 'Trabalho artístico de pet',
  },
  {
    src: getImagemUrl('752371759_18095316212217188_2283122475251949681_n.webp'),
    alt: 'Pintura personalizada',
  },
  {
    src: getImagemUrl('774105761_18099707330217188_7520830553922356313_n.webp'),
    alt: 'Retrato artístico',
  },
  {
    src: getImagemUrl('774266102_18099460787217188_4612051421156722305_n.webp'),
    alt: 'Obra de arte de pet',
  },
  {
    src: getImagemUrl('777717137_18099461714217188_7768263720187438142_n.webp'),
    alt: 'Pintura artesanal',
  },
  {
    src: getImagemUrl('778074220_18099708356217188_8912821654687734539_n.webp'),
    alt: 'Quadro personalizado',
  },
  {
    src: getImagemUrl('778936633_18100013768217188_1294371572609158539_n.webp'),
    alt: 'Arte de pet',
  },
  {
    src: getImagemUrl('780607483_18100011434217188_2852763284233551800_n.webp'),
    alt: 'Pintura em tela',
  },
  {
    src: getImagemUrl('793122203_18102433493217188_3725114972466510672_n.webp'),
    alt: 'Trabalho artístico',
  },
  {
    src: getImagemUrl('794144793_18102436058217188_7568935267591749110_n.webp'),
    alt: 'Pintura de pet',
  },
  {
    src: getImagemUrl('795297044_18105170069217188_6747961995240899589_n.webp'),
    alt: 'Retrato personalizado',
  },
  {
    src: getImagemUrl('798415149_18102746471217188_6513836173064239227_n.webp'),
    alt: 'Obra personalizada',
  },
  {
    src: getImagemUrl('799869229_18105172001217188_7859655281573547554_n.webp'),
    alt: 'Arte exclusiva',
  },
  {
    src: getImagemUrl('802778490_18103156475217188_3076575547673869350_n.webp'),
    alt: 'Pintura artística',
  },
  {
    src: getImagemUrl('806035929_18103391744217188_3580312603230686076_n.webp'),
    alt: 'Quadro de pet',
  },
  {
    src: getImagemUrl('806299546_18103392692217188_1619556383478838105_n.webp'),
    alt: 'Trabalho manual',
  },
  {
    src: getImagemUrl('806299634_18103330373217188_8360010661236122833_n.webp'),
    alt: 'Pintura exclusiva',
  },
  {
    src: getImagemUrl('809235622_18105174329217188_688315462009790938_n.webp'),
    alt: 'Arte de animal',
  },
  {
    src: getImagemUrl('811102594_18105042287217188_4286015335672619561_n.webp'),
    alt: 'Retrato de pet',
  },
  {
    src: getImagemUrl('816030872_18105043100217188_6335858649824101501_n.webp'),
    alt: 'Pintura à mão',
  },
  {
    src: getImagemUrl('825269607_18105423797217188_7095471044695624693_n.webp'),
    alt: 'Quadro artístico',
  },
  {
    src: getImagemUrl('831616017_18106105841217188_6463940058159756359_n.webp'),
    alt: 'Obra de arte',
  },
  {
    src: getImagemUrl('831905903_18106234463217188_8573058707663143544_n.webp'),
    alt: 'Trabalho personalizado',
  },
];

// ------------------------------------------------------------
// TIPOS EXPORTADOS
// ------------------------------------------------------------
export interface ImagemSite {
  src: string;
  alt: string;
}
