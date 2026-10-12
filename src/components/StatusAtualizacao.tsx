/**
 * ============================================================
 * COMPONENTE: StatusAtualizacao - Indicador de Atualização
 * ============================================================
 *
 * Mostra o status de atualização do site:
 * - Versão atual
 * - Data de build
 * - Indicador de nova versão disponível
 * - Botão para verificar agora
 *
 * Uso:
 *   <StatusAtualizacao />
 *
 * ============================================================
 */

import { useAutoUpdate } from '../hooks/useAutoUpdate';

export default function StatusAtualizacao() {
  const {
    versaoAtual,
    versaoDisponivel,
    precisaAtualizar,
    ultimaVerificacaoRelativa,
    verificando,
    verificarAgora,
    dataBuild,
  } = useAutoUpdate();

  return (
    <div className="bg-cream-dark border-t border-beige py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          {/* Informações da versão */}
          <div className="flex items-center gap-4 text-brown-light">
            <span className="flex items-center gap-2">
              <i className="fas fa-code-branch text-terracotta"></i>
              <span className="font-medium">v{versaoAtual}</span>
            </span>
            <span className="hidden sm:inline text-beige-dark">•</span>
            <span className="flex items-center gap-2">
              <i className="fas fa-calendar text-terracotta"></i>
              <span>{dataBuild}</span>
            </span>
            {ultimaVerificacaoRelativa && (
              <>
                <span className="hidden sm:inline text-beige-dark">•</span>
                <span className="flex items-center gap-2">
                  <i className="fas fa-clock text-terracotta"></i>
                  <span>Verificado {ultimaVerificacaoRelativa}</span>
                </span>
              </>
            )}
          </div>

          {/* Status de atualização */}
          <div className="flex items-center gap-3">
            {precisaAtualizar ? (
              <div className="flex items-center gap-2 text-orange-600">
                <i className="fas fa-exclamation-circle animate-pulse"></i>
                <span className="font-medium">Nova versão disponível: v{versaoDisponivel}</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-green-600">
                <i className="fas fa-check-circle"></i>
                <span>Site atualizado</span>
              </div>
            )}

            {/* Botão verificar agora */}
            <button
              onClick={verificarAgora}
              disabled={verificando}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cream hover:bg-beige transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Verificar atualizações"
            >
              <i className={`fas ${verificando ? 'fa-spinner fa-spin' : 'fa-sync-alt'} text-terracotta`}></i>
              <span className="hidden sm:inline text-xs font-medium text-brown-light">
                {verificando ? 'Verificando...' : 'Verificar'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
