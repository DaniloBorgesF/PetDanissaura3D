# 🎨 Danissaura3d - Site Oficial

> Site institucional para o ateliê de pintura manual, esculturas e quadros personalizados de pets.

[![React](https://img.shields.io/badge/React-18.2-blue)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)]()
[![Tailwind](https://img.shields.io/badge/Tailwind-4.0-blue)]()

---

## ✨ Sobre

O **Danissaura3d** eterniza a memória de pets através de arte manual. Este site foi desenvolvido para facilitar o contato com clientes e apresentar os trabalhos do ateliê.

### Características:
- 🎨 Design artesanal e afetivo
- 📱 Totalmente responsivo (mobile-first)
- ⚡ Performance otimizada
- 🔄 Auto-manutenção de imagens
- 💬 Integração direta com WhatsApp
- 🖼️ Carrossel de imagens com navegação

---

## 🚀 Instalação e Desenvolvimento

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/DaniloBorgesF/PetDanissaura3D.git
cd PetDanissaura3D

# Instalar dependências
npm install

# Copiar arquivo de ambiente
cp .env.example .env

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse: `http://localhost:3000`

### Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Produção
npm run build        # Build para produção
npm run preview      # Preview do build de produção

# Validação
npm run typecheck    # Verifica tipos TypeScript
```

---

## 📁 Estrutura do Projeto

```
PetDanissaura3D/
├── public/
│   └── favicon.svg             # Favicon personalizado (pet + arte)
├── src/
│   ├── components/
│   │   ├── Carrossel.tsx       # Carrossel de imagens
│   │   ├── ImagemSite.tsx      # Componente de imagem com fallback
│   │   └── StatusAtualizacao.tsx # Indicador de versão e updates
│   ├── config/
│   │   ├── env.ts              # Variáveis de ambiente
│   │   ├── imagens.ts          # URLs das imagens
│   │   └── versao.ts           # Configurações de versão
│   ├── hooks/
│   │   └── useAutoUpdate.ts    # Hook de auto-atualização
│   ├── App.tsx                 # Componente principal
│   ├── main.tsx                # Entry point
│   └── index.css               # Estilos globais
├── scripts/
│   └── update-build-date.js    # Atualiza data de build
├── .env.example                # Template de variáveis
├── AUTO_UPDATE.md              # Sistema de auto-atualização
├── DEPLOY.md                   # Guia de deploy
├── ICONES.md                   # Documentação de ícones
├── IMAGENS.md                  # Documentação de imagens
├── MANUTENCAO.md               # Guia de manutenção
├── README.md                   # Este arquivo
├── REVISAO_COMPLETA.md         # Relatório de revisão
└── TESTES.md                   # Política de testes
```

---

## 🛠️ Tecnologias

- **React 18** - Framework UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool
- **Tailwind CSS 4** - Estilização

---

## 📊 Performance

Otimizações implementadas:
- ✅ Lazy loading de imagens
- ✅ Code splitting automático
- ✅ Imagens em WebP
- ✅ Fallback para imagens quebradas
- ✅ CSS otimizado
- ✅ Mobile-first design

---

## 🔄 Auto-Atualização

O site possui um sistema inteligente de auto-atualização:

- ✅ **Ano do copyright** atualizado automaticamente
- ✅ **Data de build** gerada no momento do deploy
- ✅ **Versionamento** com changelog
- ✅ **Verificação periódica** de novas versões
- ✅ **Indicador visual** de status no rodapé
- ✅ **Notificações** quando há atualizações

Consulte [AUTO_UPDATE.md](AUTO_UPDATE.md) para detalhes.

---

## 🐛 Troubleshooting

### Imagem não carrega
- Verifique se o arquivo existe no GitHub
- Confirme o nome em `src/config/imagens.ts`
- Execute `npm run typecheck`

### Build falha
```bash
rm -rf node_modules dist
npm ci
npm run build
```

### WhatsApp não abre
- Verifique o número em `.env`
- Formato: código país + DDD + número (ex: `5514981685016`)

---

## 📞 Contato

- **WhatsApp:** (14) 98168-5016
- **Instagram:** [@danissaura_3d](https://instagram.com/danissaura_3d)
- **Localização:** Bauru – Cerquilho / SP

---

## 📝 Licença

Projeto privado. Todos os direitos reservados.

---

## 🙏 Créditos

Desenvolvido com ❤️ para eternizar momentos especiais com pets.

---

**Última atualização**: 2024-01-15  
**Versão**: 1.2.0
