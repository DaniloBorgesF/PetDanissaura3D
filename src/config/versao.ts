/**
 * ============================================================
 * CONFIGURAÇÃO DE VERSÃO E ATUALIZAÇÃO - Danissaura3d
 * ============================================================
 *
 * Este arquivo gerencia:
 * - Versão do site
 * - Data de última atualização
 * - Timestamp de build
 * - Sistema de verificação de updates
 *
 * ATUALIZAÇÃO AUTOMÁTICA:
 * - O ano do copyright é atualizado automaticamente
 * - A data de build é gerada no momento do deploy
 * - O sistema verifica se há novas versões disponíveis
 *
 * ============================================================
 */

// Versão atual do site (atualize manualmente quando fizer mudanças grandes)
export const VERSAO_SITE = '1.2.0';

// Data de build (gerada automaticamente no momento do build)
export const DATA_BUILD = new Date().toISOString();

// Data formatada para exibição
export const DATA_BUILD_FORMATADA = new Date().toLocaleDateString('pt-BR', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});

// Ano atual (atualizado automaticamente)
export const ANO_ATUAL = new Date().getFullYear();

// Timestamp de verificação (para cache busting)
export const TIMESTAMP_VERIFICACAO = Date.now();

/**
 * Chave para armazenar versão no localStorage
 */
export const STORAGE_KEY_VERSAO = 'danissaura3d_versao';
export const STORAGE_KEY_ULTIMA_VERIFICACAO = 'danissaura3d_ultima_verificacao';

/**
 * Intervalo de verificação de updates (em milliseconds)
 * Padrão: 1 hora
 */
export const INTERVALO_VERIFICACAO = 60 * 60 * 1000; // 1 hora

/**
 * URLs para verificação de updates
 */
export const URL_VERIFICACAO = {
  // URL do arquivo de versão no GitHub
  github: 'https://raw.githubusercontent.com/DaniloBorgesF/PetDanissaura3D/main/src/config/versao.json',
  // URL alternativa (CDN)
  cdn: null, // Configure se necessário
};

/**
 * Mensagens do sistema de atualização
 */
export const MENSAGENS_UPDATE = {
  atualizado: 'Site está atualizado',
  novaVersao: 'Nova versão disponível!',
  verificando: 'Verificando atualizações...',
  erro: 'Não foi possível verificar atualizações',
  ultimaAtualizacao: (data: string) => `Última atualização: ${data}`,
};

/**
 * Interface para dados de versão
 */
export interface VersaoInfo {
  versao: string;
  dataBuild: string;
  dataBuildFormatada: string;
  timestamp: number;
}

/**
 * Obtém informações completas da versão atual
 */
export function obterInfoVersao(): VersaoInfo {
  return {
    versao: VERSAO_SITE,
    dataBuild: DATA_BUILD,
    dataBuildFormatada: DATA_BUILD_FORMATADA,
    timestamp: TIMESTAMP_VERIFICACAO,
  };
}

/**
 * Formata data relativa (há quanto tempo)
 */
export function formatarDataRelativa(data: string | Date): string {
  const date = typeof data === 'string' ? new Date(data) : data;
  const agora = new Date();
  const diffMs = agora.getTime() - date.getTime();
  
  const diffSegundos = Math.floor(diffMs / 1000);
  const diffMinutos = Math.floor(diffSegundos / 60);
  const diffHoras = Math.floor(diffMinutos / 60);
  const diffDias = Math.floor(diffHoras / 24);
  
  if (diffSegundos < 60) return 'agora mesmo';
  if (diffMinutos < 60) return `há ${diffMinutos} minuto${diffMinutos > 1 ? 's' : ''}`;
  if (diffHoras < 24) return `há ${diffHoras} hora${diffHoras > 1 ? 's' : ''}`;
  if (diffDias < 7) return `há ${diffDias} dia${diffDias > 1 ? 's' : ''}`;
  if (diffDias < 30) return `há ${Math.floor(diffDias / 7)} semana${Math.floor(diffDias / 7) > 1 ? 's' : ''}`;
  if (diffDias < 365) return `há ${Math.floor(diffDias / 30)} mês${Math.floor(diffDias / 30) > 1 ? 'es' : ''}`;
  return `há ${Math.floor(diffDias / 365)} ano${Math.floor(diffDias / 365) > 1 ? 's' : ''}`;
}
