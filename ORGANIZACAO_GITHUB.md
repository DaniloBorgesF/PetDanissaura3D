# 📋 Guia de Organização do Repositório - Danissaura3d

## 🌿 Política de Branches

### Branches Principais

- **`main`** - Branch principal de produção (deploy automático para GitHub Pages)
- **`develop`** - Branch de desenvolvimento (integração de features)

### Branches de Funcionalidades

- **`feature/nome-da-feature`** - Para novas funcionalidades
  - Exemplo: `feature/carrossel-imagens`
  - Exemplo: `feature/menu-mobile`

### Branches de Correções

- **`fix/nome-do-bug`** - Para correção de bugs
  - Exemplo: `fix/scroll-horizontal`
  - Exemplo: `fix/imagens-modal`

### Branches de Hotfix

- **`hotfix/nome-do-hotfix`** - Para correções urgentes em produção
  - Exemplo: `hotfix/quebra-layout-mobile`

---

## 🧹 Como Limpar Branches Desnecessárias

### Via GitHub Web

1. **Acesse o repositório no GitHub**
   - Vá para: `https://github.com/DaniloBorgesF/PetDanissaura3D`

2. **Clique em "Branches"**
   - No menu superior, clique em "Branches" (ou acesse: `https://github.com/DaniloBorgesF/PetDanissaura3D/branches`)

3. **Identifique branches merged**
   - Branches com ícone roxo ✅ já foram merged e podem ser deletadas
   - Branches com ícone vermelho ❌ têm conflitos e precisam de atenção

4. **Delete branches merged**
   - Clique no botão 🗑️ (lixeira) ao lado da branch
   - Confirme a exclusão

### Via Terminal (Git)

```bash
# Atualizar informações remotas
git fetch --prune

# Listar todas as branches
git branch -a

# Deletar branch local
git branch -d nome-da-branch

# Deletar branch remota
git push origin --delete nome-da-branch

# Limpar branches locais que já foram deletadas remotamente
git fetch --prune
git branch -vv | grep ': gone]' | awk '{print $1}' | xargs git branch -d
```

### Script para Limpar Todas as Branches Merged

```bash
#!/bin/bash
# Limpa todas as branches merged exceto main e develop

echo "🧹 Limpando branches merged..."

# Deletar branches locais merged
git branch --merged | grep -v "\*" | grep -v "main" | grep -v "develop" | xargs -n 1 git branch -d

# Deletar branches remotas merged
git branch -r --merged | grep origin/ | grep -v "main" | grep -v "develop" | sed 's/origin\///' | xargs -n 1 git push origin --delete

echo "✅ Limpeza concluída!"
```

---

## 📝 Convenção de Commits

### Formato

```
<tipo>(<escopo>): <descrição>

[corpo opcional]

[rodapé opcional]
```

### Tipos

- **feat**: Nova funcionalidade
- **fix**: Correção de bug
- **docs**: Documentação
- **style**: Formatação, ponto e vírgula, etc (não afeta código)
- **refactor**: Refatoração de código
- **test**: Adição ou correção de testes
- **chore**: Atualizações de build, dependências, etc

### Exemplos

```bash
feat(carrossel): adiciona navegação automática
fix(modal): corrige corte de imagens em tela cheia
docs(readme): atualiza instruções de deploy
refactor(componentes): simplifica lógica do menu mobile
chore(dependencias): atualiza React para versão 18.3
```

---

## 🏷️ Labels do GitHub

### Labels Sugeridos

- **🚀 feature** - Nova funcionalidade
- **🐛 bug** - Correção de bug
- **📚 documentation** - Documentação
- **🎨 enhancement** - Melhoria visual
- **⚡ performance** - Otimização de performance
- **🔒 security** - Questões de segurança
- **🧹 cleanup** - Limpeza de código
- **🚧 work in progress** - Em desenvolvimento
- **✅ ready to merge** - Pronto para merge
- **❌ invalid** - Inválido
- **🤔 question** - Dúvida

### Como Criar Labels

1. Vá em **Issues** → **Labels**
2. Clique em **"New label"**
3. Preencha nome, descrição e cor
4. Repita para cada label

---

## 🔄 Fluxo de Trabalho Recomendado

### Para Novas Features

```bash
# 1. Atualizar branch main
git checkout main
git pull origin main

# 2. Criar branch de feature
git checkout -b feature/nome-da-feature

# 3. Desenvolver e commitar
git add .
git commit -m "feat(nome): descrição da mudança"

# 4. Push para o repositório
git push origin feature/nome-da-feature

# 5. Criar Pull Request no GitHub
# 6. Após aprovação, merge para main
# 7. Deletar branch da feature
```

### Para Correções de Bugs

```bash
# 1. Atualizar branch main
git checkout main
git pull origin main

# 2. Criar branch de fix
git checkout -b fix/nome-do-bug

# 3. Corrigir e commitar
git add .
git commit -m "fix(nome): descrição da correção"

# 4. Push para o repositório
git push origin fix/nome-do-bug

# 5. Criar Pull Request no GitHub
# 6. Após aprovação, merge para main
# 7. Deletar branch da fix
```

---

## 📊 Milestones

### Milestone: v1.0.0 - Lançamento Inicial
- ✅ Site institucional completo
- ✅ Galeria de imagens
- ✅ Carrossel de trabalhos
- ✅ Menu mobile responsivo
- ✅ Integração com WhatsApp
- ✅ Deploy no GitHub Pages

### Milestone: v1.1.0 - Melhorias
- [ ] Sistema de agendamento
- [ ] Blog com dicas sobre pets
- [ ] Área do cliente
- [ ] Notificações por email

### Milestone: v2.0.0 - E-commerce
- [ ] Catálogo de produtos
- [ ] Carrinho de compras
- [ ] Pagamento online
- [ ] Rastreamento de pedidos

---

## 📁 Estrutura de Pastas do Projeto

```
PetDanissaura3D/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Workflow de deploy automático
├── public/
│   ├── favicon.svg             # Favicon do site
│   └── .nojekyll               # Impede processamento Jekyll
├── src/
│   ├── components/             # Componentes React
│   │   ├── Carrossel.tsx
│   │   ├── ImagemSite.tsx
│   │   └── StatusAtualizacao.tsx
│   ├── config/                 # Configurações
│   │   ├── env.ts
│   │   ├── imagens.ts
│   │   └── versao.ts
│   ├── hooks/                  # Hooks customizados
│   │   └── useAutoUpdate.ts
│   ├── App.tsx                 # Componente principal
│   ├── main.tsx                # Entry point
│   └── index.css               # Estilos globais
├── .env.example                # Template de variáveis de ambiente
├── .gitignore                  # Arquivos ignorados pelo Git
├── AUTO_UPDATE.md              # Documentação de auto-atualização
├── DEPLOY.md                   # Guia de deploy
├── ICONES.md                   # Documentação de ícones
├── IMAGENS.md                  # Documentação de imagens
├── MANUTENCAO.md               # Guia de manutenção
├── README.md                   # README principal
├── REVISAO_COMPLETA.md         # Relatório de revisão
├── TESTES.md                   # Política de testes
└── ORGANIZACAO_GITHUB.md       # Este arquivo
```

---

## 🔐 Proteção de Branches

### Configurar Proteção da Branch `main`

1. Vá em **Settings** → **Branches**
2. Clique em **"Add branch protection rule"**
3. Configure:
   - **Branch name pattern**: `main`
   - ✅ **Require pull request reviews before merging**
     - Required approvals: 1
   - ✅ **Require status checks to pass before merging**
     - Selecione os checks do GitHub Actions
   - ✅ **Include administrators**
   - ✅ **Allow force pushes** (desmarcado)
   - ✅ **Allow deletions** (desmarcado)

### Configurar Proteção da Branch `develop`

Mesma configuração da `main`, mas pode permitir merge sem aprovação se for apenas para testes.

---

## 📝 Templates de Issues e Pull Requests

### Template de Issue: Bug Report

```markdown
---
name: 🐛 Relatório de Bug
about: Reporte um bug para nos ajudar a melhorar
title: '[BUG] '
labels: '🐛 bug'
assignees: ''
---

**Descrição do Bug**
Uma descrição clara e concisa do bug.

**Passos para Reproduzir**
1. Vá para '...'
2. Clique em '....'
3. Role até '....'
4. Veja o erro

**Comportamento Esperado**
O que deveria acontecer.

**Comportamento Atual**
O que está acontecendo.

**Screenshots**
Se aplicável, adicione screenshots.

**Ambiente:**
- Dispositivo: [ex: iPhone 12]
- Navegador: [ex: Chrome 120]
- Versão: [ex: 1.0.0]

**Informações Adicionais**
Qualquer outra informação relevante.
```

### Template de Pull Request

```markdown
## 📝 Descrição
Descrição clara do que este PR faz.

## 🎯 Tipo de Mudança
- [ ] 🚀 Nova feature
- [ ] 🐛 Correção de bug
- [ ] 📚 Documentação
- [ ] 🎨 Melhoria visual
- [ ] ⚡ Otimização de performance

## ✅ Checklist
- [ ] Código revisado e testado
- [ ] Testes passing
- [ ] Documentação atualizada
- [ ] Sem console.log ou código desnecessário
- [ ] Responsivo em mobile e desktop

## 📸 Screenshots (se aplicável)
Adicione screenshots das mudanças visuais.

## 🔗 Issues Relacionadas
Closes #123
```

---

## 🚀 Deploy Automático

O deploy para GitHub Pages é automático quando há push na branch `main`.

### Fluxo:
1. Push para `main`
2. GitHub Actions roda o workflow
3. Build do projeto
4. Deploy automático para GitHub Pages
5. Site atualizado em: `https://daniloborgesf.github.io/PetDanissaura3D/`

### Deploy Manual:
1. Vá em **Actions**
2. Selecione o workflow "Deploy para GitHub Pages"
3. Clique em **"Run workflow"**
4. Selecione a branch
5. Clique em **"Run workflow"**

---

## 📞 Suporte

Para dúvidas sobre organização do repositório:
- Consulte a documentação oficial do GitHub: https://docs.github.com/pt
- Veja o guia de Git: https://git-scm.com/book/pt-br/v2

---

**Última atualização**: 2024-01-15  
**Versão do documento**: 1.0.0
