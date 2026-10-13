/**
 * Componente de Carrossel de Imagens
 * Exibe imagens em formato de slider horizontal com navegação por setas
 */

import { useState, useRef, useEffect } from 'react';
import { carrosselImages } from '../config/imagens';
import ImagemSite from './ImagemSite';

export default function Carrossel() {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(null);
  const carrosselRef = useRef<HTMLDivElement>(null);

  const totalImagens = carrosselImages.length;

  // Navegação automática
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual((prev) => (prev + 1) % totalImagens);
    }, 5000);

    return () => clearInterval(intervalo);
  }, [totalImagens]);

  // Atualizar posição do carrossel
  useEffect(() => {
    if (carrosselRef.current) {
      const larguraItem = carrosselRef.current.scrollWidth / totalImagens;
      carrosselRef.current.scrollTo({
        left: larguraItem * indiceAtual,
        behavior: 'smooth',
      });
    }
  }, [indiceAtual, totalImagens]);

  const avancar = () => {
    setIndiceAtual((prev) => (prev + 1) % totalImagens);
  };

  const voltar = () => {
    setIndiceAtual((prev) => (prev - 1 + totalImagens) % totalImagens);
  };

  return (
    <section className="py-16 md:py-24 bg-beige-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-brown font-bold mb-4">
            Mais Trabalhos do Ateliê
          </h2>
          <p className="text-brown-light text-base md:text-lg max-w-2xl mx-auto">
            Explore nossa coleção completa de artes personalizadas para pets
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative overflow-hidden">
          {/* Container com padding para os botões */}
          <div className="px-12 md:px-16">
            {/* Botão voltar */}
            <button
              onClick={voltar}
              className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 bg-cream hover:bg-beige text-terracotta w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
              aria-label="Imagem anterior"
            >
              <i className="fas fa-chevron-left text-lg md:text-xl"></i>
            </button>

            {/* Botão avançar */}
            <button
              onClick={avancar}
              className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 bg-cream hover:bg-beige text-terracotta w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
              aria-label="Próxima imagem"
            >
              <i className="fas fa-chevron-right text-lg md:text-xl"></i>
            </button>

            {/* Container do carrossel */}
            <div
              ref={carrosselRef}
              className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth"
              style={{ 
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {carrosselImages.map((imagem, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] cursor-pointer"
                  style={{ scrollSnapAlign: 'start' }}
                  onClick={() => setImagemSelecionada(imagem.src)}
                >
                  <div className="overflow-hidden rounded-2xl shadow-lg bg-cream aspect-[4/5]">
                    <ImagemSite
                      src={imagem.src}
                      alt={imagem.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal de visualização */}
      {imagemSelecionada && (
        <div
          className="fixed inset-0 z-50 bg-brown/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setImagemSelecionada(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setImagemSelecionada(null)}
              className="absolute -top-12 right-0 text-white hover:text-terracotta transition-colors text-3xl"
              aria-label="Fechar"
            >
              <i className="fas fa-times"></i>
            </button>
            <img
              src={imagemSelecionada}
              alt="Visualização ampliada"
              className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border-4 border-cream/20"
            />
          </div>
        </div>
      )}
    </section>
  );
}
