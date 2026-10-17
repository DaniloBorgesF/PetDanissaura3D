# 🚀 Guia Rápido - Configurar GitHub Pages

## ✅ Checklist de Configuração

### 1. Verificar Arquivos Necessários

Confirme que estes arquivos existem no repositório:

- [ ] `.github/workflows/deploy.yml` - Workflow de deploy
- [ ] `public/.nojekyll` - Impede processamento Jekyll
- [ ] `vite.config.js` - Configurado com base path
- [ ] `package.json` - Com scripts de build

### 2. Ativar GitHub Pages

1. **Acesse o repositório no GitHub**
   - URL: `https://github.com/DaniloBorgesF/PetDanissaura3D`

2. **Vá em Settings**
   - Clique na aba **"Settings"** (engrenagem)

3. **Configure GitHub Pages**
   - No menu lateral, clique em **"Pages"**
   - Em **"Source"**, selecione **"GitHub Actions"**
   - Clique em **"Save"**

4. **Verificar configuração**
   - Deve aparecer: "GitHub Actions is configured to deploy to GitHub Pages"
   - URL do site: `https://daniloborgesf.github.io/PetDanissaura3D/`

### 3. Fazer Primeiro Deploy

```bash
# Adicionar mudanças
git add .

# Commit
git commit -m "chore: configurar deploy para GitHub Pages"

# Push para main
git push origin main
```

### 4. Verificar Deploy

1. **Vá em Actions**
   - URL: `https://github.com/DaniloBorgesF/PetDanissaura3D/actions`

2. **Verifique o workflow**
   - Deve haver um workflow rodando
   - Aguarde até ficar verde ✅

3. **Acesse o site**
   - URL: `https://daniloborgesf.github.io/PetDanissaura3D/`
   - Pode levar 2-5 minutos para aparecer na primeira vez

---

## 🔧 Configurações do vite.config.js

O arquivo `vite.config.js` já está configurado para GitHub Pages:

```javascript
const base = process.env.NODE_ENV === 'production' ? '/PetDanissaura3D/' : '/';

export default defineConfig({
  base,
  // ... outras configurações
});
```

**Importante**: Se o nome do repositório mudar, atualize a variável `base`.

---

## 🌿 Gerenciar Branches

### Ver Todas as Branches

```bash
# Branches locais
git branch

# Branches remotas
git branch -r

# Todas as branches
git branch -a
```

### Limpar Branches Merged

```bash
# Atualizar informações remotas
git fetch --prune

# Deletar branches locais merged (exceto main e develop)
git branch --merged | grep -v "\*" | grep -v "main" | grep -v "develop" | xargs -n 1 git branch -d

# Deletar branches remotas merged
git branch -r --merged | grep origin/ | grep -v "main" | grep -v "develop" | sed 's/origin\///' | xargs -n 1 git push origin --delete
```

### Criar Nova Branch

```bash
# Criar e mudar para nova branch
git checkout -b feature/nome-da-feature

# OU

# Criar branch
git branch feature/nome-da-feature

# Mudar para branch
git checkout feature/nome-da-feature
```

### Deletar Branch

```bash
# Deletar branch local
git branch -d nome-da-branch

# Forçar deleção (se não merged)
git branch -D nome-da-branch

# Deletar branch remota
git push origin --delete nome-da-branch
```

---

## 📝 Convenção de Commits

### Formato

```
<tipo>(<escopo>): <descrição>
```

### Tipos

- `feat` - Nova funcionalidade
- `fix` - Correção de bug
- `docs` - Documentação
- `style` - Formatação
- `refactor` - Refatoração
- `test` - Testes
- `chore` - Manutenção

### Exemplos

```bash
feat(carrossel): adiciona navegação automática
fix(modal): corrige corte de imagens
docs(readme): atualiza instruções de deploy
refactor(componentes): simplifica lógica do menu
chore(dependencias): atualiza React para 18.3
```

---

## 🔄 Fluxo de Trabalho

### Para Nova Feature

```bash
# 1. Atualizar main
git checkout main
git pull origin main

# 2. Criar branch
git checkout -b feature/nome-da-feature

# 3. Desenvolver
# ... fazer mudanças ...

# 4. Commit
git add .
git commit -m "feat(nome): descrição"

# 5. Push
git push origin feature/nome-da-feature

# 6. Criar Pull Request no GitHub
# 7. Após aprovação, merge para main
# 8. Deletar branch
git checkout main
git branch -d feature/nome-da-feature
git push origin --delete feature/nome-da-feature
```

### Para Correção de Bug

```bash
# 1. Atualizar main
git checkout main
git pull origin main

# 2. Criar branch
git checkout -b fix/nome-do-bug

# 3. Corrigir
# ... fazer correções ...

# 4. Commit
git add .
git commit -m "fix(nome): descrição"

# 5. Push
git push origin fix/nome-do-bug

# 6. Criar Pull Request no GitHub
# 7. Após aprovação, merge para main
# 8. Deletar branch
git checkout main
git branch -d fix/nome-do-bug
git push origin --delete fix/nome-do-bug
```

---

## 🏷️ Labels Sugeridos

Crie estes labels no GitHub:

- 🚀 `feature` - Nova funcionalidade
- 🐛 `bug` - Correção de bug
- 📚 `documentation` - Documentação
- 🎨 `enhancement` - Melhoria visual
- ⚡ `performance` - Otimização
- 🔒 `security` - Segurança
- 🧹 `cleanup` - Limpeza
- 🚧 `work in progress` - Em desenvolvimento
- ✅ `ready to merge` - Pronto para merge

---

## 🔐 Proteção de Branches

### Proteger Branch `main`

1. Vá em **Settings** → **Branches**
2. Clique em **"Add branch protection rule"**
3. Configure:
   - Branch name pattern: `main`
   - ✅ Require pull request reviews
   - ✅ Require status checks
   - ✅ Include administrators
   - ❌ Allow force pushes
   - ❌ Allow deletions

---

## 📊 Monitorar Deploy

### Ver Status do Deploy

1. **Actions**
   - URL: `https://github.com/DaniloBorgesF/PetDanissaura3D/actions`
   - Veja o status dos workflows

2. **Deployments**
   - URL: `https://github.com/DaniloBorgesF/PetDanissaura3D/deployments`
   - Veja histórico de deploys

3. **Pages**
   - URL: `https://github.com/DaniloBorgesF/PetDanissaura3D/settings/pages`
   - Veja status e URL do site

---

## 🐛 Troubleshooting

### Deploy Falha

**Problema**: Workflow falha no build
**Solução**: 
```bash
# Testar build local
npm run build

# Verificar erros
npm run typecheck
```

**Problema**: Site não atualiza
**Solução**:
- Limpar cache do navegador (Ctrl+Shift+Del)
- Aguardar 5-10 minutos
- Verificar logs em Actions

**Problema**: 404 ao acessar o site
**Solução**:
- Verificar se GitHub Pages está ativado
- Confirmar URL: `https://daniloborgesf.github.io/PetDanissaura3D/`
- Verificar se o workflow completou com sucesso

---

## 📞 Suporte

- Documentação do GitHub Pages: https://docs.github.com/pt/pages
- Documentação do GitHub Actions: https://docs.github.com/pt/actions
- Consultar ORGANIZACAO_GITHUB.md para mais detalhes

---

**Última atualização**: 2024-01-15
