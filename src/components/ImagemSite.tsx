/**
 * ============================================================
 * COMPONENTE DE IMAGEM ROBUSTO - ImagemSite
 * ============================================================
 *
 * Componente de imagem otimizado para fotos de pets com:
 * - Fallback para imagens quebradas
 * - Placeholder durante carregamento
 * - Aspect ratios pré-definidos para melhor enquadramento
 * - object-fit: cover com object-position inteligente
 * - Tratamento de erros
 * - Lazy loading nativo
 * - Suporte a diferentes proporções
 *
 * Uso:
 *   <ImagemSite src="url" alt="descrição" variant="square" />
 *   <ImagemSite src="url" alt="descrição" aspectRatio="4/5" />
 *
 * ============================================================
 */

import { useState, useCallback } from 'react';

type ImageVariant = 'square' | 'portrait' | 'landscape' | 'hero' | 'gallery' | 'service';

interface ImagemSiteProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  loading?: 'lazy' | 'eager';
  aspectRatio?: string;
  variant?: ImageVariant;
  objectPosition?: string;
}

/**
 * Configurações de aspect ratio para cada variante
 */
const VARIANT_CONFIGS: Record<ImageVariant, { aspectRatio: string; objectPosition: string }> = {
  square: { aspectRatio: '1/1', objectPosition: 'center' },
  portrait: { aspectRatio: '3/4', objectPosition: 'center top' },
  landscape: { aspectRatio: '4/3', objectPosition: 'center' },
  hero: { aspectRatio: '16/9', objectPosition: 'center' },
  gallery: { aspectRatio: '1/1', objectPosition: 'center' },
  service: { aspectRatio: '4/5', objectPosition: 'center top' },
};

/**
 * SVG de fallback para imagens quebradas
 */
const FALLBACK_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23f5f0e8' width='400' height='400'/%3E%3Ctext x='50%25' y='45%25' font-family='Arial' font-size='48' fill='%238b6f5e' text-anchor='middle' dominant-baseline='middle'%3E🎨%3C/text%3E%3Ctext x='50%25' y='58%25' font-family='Arial' font-size='14' fill='%238b6f5e' text-anchor='middle' dominant-baseline='middle'%3EImagem em carregamento%3C/text%3E%3C/svg%3E`;

/**
 * Placeholder SVG com skeleton loading
 */
const PLACEHOLDER_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='shimmer' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:%23f5f0e8'/%3E%3Cstop offset='50%25' style='stop-color:%23e8ddd0'/%3E%3Cstop offset='100%25' style='stop-color:%23f5f0e8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23shimmer)' width='400' height='400'%3E%3Canimate attributeName='x' from='-400' to='400' dur='1.5s' repeatCount='indefinite'/%3E%3C/rect%3E%3C/svg%3E`;

export default function ImagemSite({
  src,
  alt,
  className = '',
  fallbackSrc = FALLBACK_SVG,
  loading = 'lazy',
  aspectRatio,
  variant,
  objectPosition,
}: ImagemSiteProps) {
  const [erro, setErro] = useState(false);
  const [carregando, setCarregando] = useState(true);

  const handleErro = useCallback(() => {
    setErro(true);
    setCarregando(false);
  }, []);

  const handleCarregado = useCallback(() => {
    setCarregando(false);
  }, []);

  const imagemSrc = erro ? fallbackSrc : src;

  // Determina aspect ratio e object position
  const config = variant ? VARIANT_CONFIGS[variant] : null;
  const finalAspectRatio = aspectRatio || config?.aspectRatio;
  const finalObjectPosition = objectPosition || config?.objectPosition || 'center';

  return (
    <div
      className={`relative overflow-hidden bg-beige-light ${className}`}
      style={finalAspectRatio ? { aspectRatio: finalAspectRatio } : undefined}
    >
      {/* Placeholder durante carregamento */}
      {carregando && !erro && (
        <img
          src={PLACEHOLDER_SVG}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
      )}

      {/* Imagem principal */}
      <img
        src={imagemSrc}
        alt={alt}
        loading={loading}
        onError={handleErro}
        onLoad={handleCarregado}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          carregando ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          objectFit: 'cover',
          objectPosition: finalObjectPosition,
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      />

      {/* Overlay de erro */}
      {erro && (
        <div className="absolute inset-0 flex items-center justify-center bg-beige-light/50">
          <div className="text-center p-4">
            <i className="fas fa-image text-terracotta/50 text-3xl mb-2"></i>
            <p className="text-brown-medium text-xs">Imagem indisponível</p>
          </div>
        </div>
      )}
    </div>
  );
}
