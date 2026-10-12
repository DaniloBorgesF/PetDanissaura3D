/**
 * ============================================================
 * HOOK: useAutoUpdate - Sistema de Auto-Atualização
 * ============================================================
 *
 * Este hook gerencia:
 * - Verificação periódica de novas versões
 * - Notificações de atualização
 * - Cache de versão no localStorage
 * - Timestamps de última verificação
 *
 * Uso:
 *   const { versao, precisaAtualizar, verificarAgora } = useAutoUpdate();
 *
 * ============================================================
 */

import { useState, useEffect, useCallback } from 'react';
import {
  VERSAO_SITE,
  DATA_BUILD_FORMATADA,
  STORAGE_KEY_VERSAO,
  STORAGE_KEY_ULTIMA_VERIFICACAO,
  INTERVALO_VERIFICACAO,
  URL_VERIFICACAO,
  formatarDataRelativa,
} from '../config/versao';

interface UseAutoUpdateReturn {
  versaoAtual: string;
  versaoDisponivel: string | null;
  precisaAtualizar: boolean;
  ultimaVerificacao: string | null;
  ultimaVerificacaoRelativa: string | null;
  verificando: boolean;
  verificarAgora: () => Promise<void>;
  dataBuild: string;
}

/**
 * Hook para gerenciar atualizações automáticas do site
 */
export function useAutoUpdate(): UseAutoUpdateReturn {
  const [versaoDisponivel, setVersaoDisponivel] = useState<string | null>(null);
  const [ultimaVerificacao, setUltimaVerificacao] = useState<string | null>(null);
  const [verificando, setVerificando] = useState(false);

  /**
   * Verifica se há nova versão disponível
   */
  const verificarAtualizacao = useCallback(async () => {
    setVerificando(true);
    
    try {
      // Tenta buscar versão do GitHub
      const response = await fetch(URL_VERIFICACAO.github, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
        },
      });

      if (response.ok) {
        const data = await response.json();
        const versaoRemota = data.versao || data.version;
        
        // Compara versões
        if (versaoRemota && versaoRemota !== VERSAO_SITE) {
          setVersaoDisponivel(versaoRemota);
        } else {
          setVersaoDisponivel(null);
        }
      }
    } catch (error) {
      // Silencioso - não é crítico
      console.debug('Não foi possível verificar atualizações:', error);
    } finally {
      // Atualiza timestamp da verificação
      const agora = new Date().toISOString();
      setUltimaVerificacao(agora);
      localStorage.setItem(STORAGE_KEY_ULTIMA_VERIFICACAO, agora);
      setVerificando(false);
    }
  }, []);

  /**
   * Verifica agora (forçado pelo usuário)
   */
  const verificarAgora = useCallback(async () => {
    await verificarAtualizacao();
  }, [verificarAtualizacao]);

  /**
   * Efeito inicial: carrega dados do localStorage e verifica
   */
  useEffect(() => {
    // Carrega última verificação do localStorage
    const ultima = localStorage.getItem(STORAGE_KEY_ULTIMA_VERIFICACAO);
    if (ultima) {
      setUltimaVerificacao(ultima);
    }

    // Verifica se precisa fazer verificação periódica
    const verificarPeriodicamente = async () => {
      const agora = Date.now();
      const ultimaTimestamp = ultima ? new Date(ultima).getTime() : 0;
      const tempoDesdeUltima = agora - ultimaTimestamp;

      // Se passou mais tempo que o intervalo, verifica
      if (tempoDesdeUltima > INTERVALO_VERIFICACAO) {
        await verificarAtualizacao();
      }
    };

    verificarPeriodicamente();

    // Configura verificação periódica
    const intervalo = setInterval(verificarPeriodicamente, INTERVALO_VERIFICACAO);

    return () => clearInterval(intervalo);
  }, [verificarAtualizacao]);

  /**
   * Calcula se precisa atualizar
   */
  const precisaAtualizar = versaoDisponivel !== null && versaoDisponivel !== VERSAO_SITE;

  /**
   * Formata data relativa da última verificação
   */
  const ultimaVerificacaoRelativa = ultimaVerificacao
    ? formatarDataRelativa(ultimaVerificacao)
    : null;

  return {
    versaoAtual: VERSAO_SITE,
    versaoDisponivel,
    precisaAtualizar,
    ultimaVerificacao,
    ultimaVerificacaoRelativa,
    verificando,
    verificarAgora,
    dataBuild: DATA_BUILD_FORMATADA,
  };
}
