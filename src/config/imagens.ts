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
 * NOTA: As imagens abaixo estão hospedadas no GitHub (raw).
 * Para produção, recomenda-se copiar as imagens para `public/images/`
 * e usar caminhos locais para melhor performance.
 *
 * ============================================================
 */

// ------------------------------------------------------------
// URL BASE DAS IMAGENS (GitHub Raw)
// Para trocar o host, altere esta constante.
// ------------------------------------------------------------
const BASE_URL = 'https://raw.githubusercontent.com/DaniloBorgesF/PetDanissaura3D/main/src/public/images';

// ------------------------------------------------------------
// IMAGEM DE DESTAQUE (HERO)
// Usada na seção principal do site (cabeçalho)
// Selecionada: maior imagem disponível (165KB)
// ------------------------------------------------------------
export const heroImage = {
  src: `${BASE_URL}/798135059_18102741314217188_718285032764919498_n.webp`,
  alt: 'Pintura artística de pet feita à mão',
};

// ------------------------------------------------------------
// IMAGEM DA SEÇÃO "SOBRE"
// Usada na seção que conta a história do ateliê
// ------------------------------------------------------------
export const aboutImage = {
  src: `${BASE_URL}/828443378_18106260197217188_4650372766708068748_n.webp`,
  alt: 'Processo de pintura artesanal de pets',
};

// ------------------------------------------------------------
// IMAGENS DOS SERVIÇOS
// Cada serviço possui uma imagem de capa para o card.
// Para adicionar um novo serviço, inclua um novo objeto.
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
// Array de imagens exibidas na galeria.
// Para adicionar uma nova imagem, basta incluir um novo objeto.
// Para remover, exclua o objeto correspondente.
//
// A primeira imagem da lista ocupa posição de destaque (2x2).
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
// IMAGENS EXTRAS (disponíveis no repositório para uso futuro)
// Descomente e utilize conforme necessário.
// ------------------------------------------------------------
export const imagensExtras = [
  `${BASE_URL}/795297044_18105170069217188_6747961995240899589_n.webp`,
  `${BASE_URL}/802778490_18103156475217188_3076575547673869350_n.webp`,
  `${BASE_URL}/816030872_18105043100217188_6335858649824101501_n.webp`,
  `${BASE_URL}/811102594_18105042287217188_4286015335672619561_n.webp`,
  `${BASE_URL}/806035929_18103391744217188_3580312603230686076_n.webp`,
  `${BASE_URL}/806299546_18103392692217188_1619556383478838105_n.webp`,
  `${BASE_URL}/806299634_18103330373217188_8360010661236122833_n.webp`,
  `${BASE_URL}/809235622_18105174329217188_688315462009790938_n.webp`,
  `${BASE_URL}/799869229_18105172001217188_7859655281573547554_n.webp`,
  `${BASE_URL}/829941205_18106232018217188_2467034419591609220_n.webp`,
  `${BASE_URL}/831616017_18106105841217188_6463940058159756359_n.webp`,
  `${BASE_URL}/831905903_18106234463217188_8573058707663143544_n.webp`,
  `${BASE_URL}/798415149_18102746471217188_6513836173064239227_n.webp`,
  `${BASE_URL}/794144793_18102436058217188_7568935267591749110_n.webp`,
  `${BASE_URL}/793122203_18102433493217188_3725114972466510672_n.webp`,
  `${BASE_URL}/780607483_18100011434217188_2852763284233551800_n.webp`,
  `${BASE_URL}/778936633_18100013768217188_1294371572609158539_n.webp`,
  `${BASE_URL}/778074220_18099708356217188_8912821654687734539_n.webp`,
  `${BASE_URL}/777717137_18099461714217188_7768263720187438142_n.webp`,
  `${BASE_URL}/774266102_18099460787217188_4612051421156722305_n.webp`,
  `${BASE_URL}/774105761_18099707330217188_7520830553922356313_n.webp`,
  `${BASE_URL}/752371759_18095316212217188_2283122475251949681_n.webp`,
  `${BASE_URL}/736198367_18092885996217188_7685981633171466786_n.webp`,
  `${BASE_URL}/825269607_18105423797217188_7095471044695624693_n.webp`,
];

// ------------------------------------------------------------
// IMAGENS PEQUENAS (thumbnails do Instagram)
// Podem ser usadas para previews ou detalhes.
// ------------------------------------------------------------
export const thumbnails = [
  `${BASE_URL}/722859115_999500129239051_8483825110700203525_n.jpg`,
  `${BASE_URL}/731113761_18605861068021703_5732115207080791863_n.jpg`,
  `${BASE_URL}/757374080_1794130084908493_5994822834376743145_n.jpg`,
  `${BASE_URL}/759676759_27745354095121243_6161542037400080185_n.jpg`,
  `${BASE_URL}/762867049_18618625123028626_5785051481890540351_n.jpg`,
  `${BASE_URL}/771984119_18339514567266580_7174414440626373501_n.jpg`,
  `${BASE_URL}/805763053_1045648071596989_3677287667562949491_n.jpg`,
  `${BASE_URL}/825326659_18103927391347224_7501825210230792614_n.jpg`,
];

// ------------------------------------------------------------
// TIPOS EXPORTADOS (para uso em componentes)
// ------------------------------------------------------------
export interface ImagemSite {
  src: string;
  alt: string;
}
