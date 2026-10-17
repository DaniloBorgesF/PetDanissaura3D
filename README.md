# 🎨 Danissaura3d - Site Oficial

> Site institucional para o ateliê de pintura manual, esculturas e quadros personalizados de pets.

[![Deploy](https://img.shields.io/badge/deploy-GitHub_Pages-blue)](https://daniloborgesf.github.io/PetDanissaura3D/)
[![License](https://img.shields.io/badge/license-private-red)]()
[![React](https://img.shields.io/badge/React-18.2-blue)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)]()

---

## ✨ Sobre

O **Danissaura3d** eterniza a memória de pets através de arte manual. Este site foi desenvolvido para facilitar o contato com clientes e apresentar os trabalhos do ateliê.

### Características:
- 🎨 Design artesanal e afetivo
- 📱 Totalmente responsivo (mobile-first)
- ⚡ Performance otimizada
- 🔄 Auto-manutenção de imagens
- 💬 Integração direta com WhatsApp
- 🚀 Deploy automático no GitHub Pages

---

## 🌐 Site Online

**Acesse o site em:** [https://daniloborgesf.github.io/PetDanissaura3D/](https://daniloborgesf.github.io/PetDanissaura3D/)

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
npm run validate     # Valida imagens, TypeScript e build
npm run typecheck    # Verifica tipos TypeScript
```

---

## 🚀 Deploy no GitHub Pages

O site está configurado para deploy automático no GitHub Pages!

### Configuração Automática

1. **Push para branch `main`**
   ```bash
   git add .
   git commit -m "chore: atualizações"
   git push origin main
   ```

2. **GitHub Actions roda automaticamente**
   - Build do projeto
   - Deploy para GitHub Pages
   - Site atualizado em minutos!

3. **Acesse o site**
   - URL: `https://daniloborgesf.github.io/PetDanissaura3D/`

### Configuração Manual (Primeira Vez)

1. **Ativar GitHub Pages no repositório**
   - Vá em **Settings** → **Pages**
   - Em **Source**, selecione **GitHub Actions**
   - Salve as configurações

2. **Verificar workflow**
   - Vá em **Actions**
   - O workflow "Deploy para GitHub Pages" deve estar presente
   - Se não estiver, o arquivo `.github/workflows/deploy.yml` será criado automaticamente

3. **Fazer push para main**
   ```bash
   git push origin main
   ```

4. **Aguardar deploy**
   - O workflow leva cerca de 2-3 minutos
   - Verifique o status em **Actions**
   - Quando estiver verde ✅, o site está no ar!

### Deploy Manual

Se precisar fazer deploy manualmente:

1. Vá em **Actions**
2. Selecione "Deploy para GitHub Pages"
3. Clique em **"Run workflow"**
4. Selecione a branch e clique em **"Run workflow"**

---

## 🌿 Organização do Repositório

Consulte [ORGANIZACAO_GITHUB.md](ORGANIZACAO_GITHUB.md) para:
- Política de branches
- Convenção de commits
- Como limpar branches
- Fluxo de trabalho recomendado
- Proteção de branches
- Templates de issues e PRs

### Branches Principais

- **`main`** - Produção (deploy automático)
- **`develop`** - Desenvolvimento
- **`feature/*`** - Novas funcionalidades
- **`fix/*`** - Correções de bugs

### Limpar Branches

```bash
# Ver branches locais
git branch

# Deletar branch local
git branch -d nome-da-branch

# Deletar branch remota
git push origin --delete nome-da-branch

# Limpar branches merged
git branch --merged | grep -v "\*" | xargs -n 1 git branch -d
```

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

## 📁 Estrutura do Projeto

```
PetDanissaura3D/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Workflow de deploy automático
├── public/
│   ├── favicon.svg             # Favicon personalizado (pet + arte)
│   └── .nojekyll               # Impede processamento Jekyll
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
│   ├── validate.ts             # Script de validação
│   └── update-build-date.js    # Atualiza data de build
├── .env.example                # Template de variáveis
├── .gitignore                  # Arquivos ignorados pelo Git
├── AUTO_UPDATE.md              # Sistema de auto-atualização
├── DEPLOY.md                   # Guia de deploy
├── ICONES.md                   # Documentação de ícones
├── IMAGENS.md                  # Documentação de imagens
├── MANUTENCAO.md               # Guia de manutenção
├── ORGANIZACAO_GITHUB.md       # Organização do repositório
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
- **GitHub Actions** - CI/CD e deploy automático
- **GitHub Pages** - Hospedagem gratuita

---

## 📊 Performance

Otimizações implementadas:
- ✅ Lazy loading de imagens
- ✅ Code splitting automático
- ✅ Imagens em WebP
- ✅ Fallback para imagens quebradas
- ✅ CSS otimizado
- ✅ Mobile-first design
- ✅ Deploy automático

---

## 🐛 Troubleshooting

### Imagem não carrega
- Verifique se o arquivo existe no GitHub
- Confirme o nome em `src/config/imagens.ts`
- Execute `npm run validate`

### Build falha
```bash
rm -rf node_modules dist
npm ci
npm run build
```

### WhatsApp não abre
- Verifique o número em `.env`
- Formato: código país + DDD + número (ex: `5514981685016`)

### Deploy não funciona
- Verifique se o GitHub Pages está ativado
- Confirme que o workflow está em `.github/workflows/deploy.yml`
- Verifique os logs em **Actions**

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
