#!/bin/bash

# ============================================================
# Script de Limpeza e Organização do Repositório
# ============================================================
# Este script ajuda a limpar branches desnecessárias e
# organizar o repositório Git.
#
# Uso: bash scripts/limpar-repositorio.sh
# ============================================================

echo "🧹 Iniciando limpeza do repositório..."
echo ""

# Cores para output
VERDE='\033[0;32m'
AMARELO='\033[1;33m'
VERMELHO='\033[0;31m'
AZUL='\033[0;34m'
SEM_COR='\033[0m'

# Função para imprimir status
sucesso() {
    echo -e "${VERDE}✅ $1${SEM_COR}"
}

aviso() {
    echo -e "${AMARELO}⚠️  $1${SEM_COR}"
}

erro() {
    echo -e "${VERMELHO}❌ $1${SEM_COR}"
}

info() {
    echo -e "${AZUL}ℹ️  $1${SEM_COR}"
}

# ============================================================
# 1. Verificar se estamos em um repositório Git
# ============================================================
if [ ! -d .git ]; then
    erro "Este não é um repositório Git!"
    exit 1
fi

sucesso "Repositório Git detectado"
echo ""

# ============================================================
# 2. Atualizar informações remotas
# ============================================================
info "Atualizando informações remotas..."
git fetch --prune
sucesso "Informações atualizadas"
echo ""

# ============================================================
# 3. Mostrar branches atuais
# ============================================================
echo "📋 Branches atuais:"
echo ""
echo "Branches locais:"
git branch | sed 's/^/  /'
echo ""
echo "Branches remotas:"
git branch -r | sed 's/^/  /'
echo ""

# ============================================================
# 4. Limpar branches locais merged
# ============================================================
echo "🧹 Limpando branches locais merged..."
echo ""

# Contar branches merged
BRANCHES_MERGED=$(git branch --merged | grep -v "\*" | grep -v "main" | grep -v "master" | grep -v "develop" | wc -l)

if [ "$BRANCHES_MERGED" -eq 0 ]; then
    sucesso "Nenhuma branch local merged para limpar"
else
    aviso "Encontradas $BRANCHES_MERGED branches locais merged"
    echo ""
    
    # Listar branches que serão deletadas
    echo "Branches que serão deletadas:"
    git branch --merged | grep -v "\*" | grep -v "main" | grep -v "master" | grep -v "develop" | sed 's/^/  - /'
    echo ""
    
    # Confirmar
    read -p "Deseja deletar estas branches? (s/n): " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Ss]$ ]]; then
        git branch --merged | grep -v "\*" | grep -v "main" | grep -v "master" | grep -v "develop" | xargs -n 1 git branch -d
        sucesso "Branches locais deletadas"
    else
        aviso "Limpeza de branches locais cancelada"
    fi
fi
echo ""

# ============================================================
# 5. Limpar branches remotas merged
# ============================================================
echo "🧹 Limpando branches remotas merged..."
echo ""

# Contar branches remotas merged
BRANCHES_REMOTAS_MERGED=$(git branch -r --merged | grep origin/ | grep -v "main" | grep -v "master" | grep -v "develop" | wc -l)

if [ "$BRANCHES_REMOTAS_MERGED" -eq 0 ]; then
    sucesso "Nenhuma branch remota merged para limpar"
else
    aviso "Encontradas $BRANCHES_REMOTAS_MERGED branches remotas merged"
    echo ""
    
    # Listar branches que serão deletadas
    echo "Branches remotas que serão deletadas:"
    git branch -r --merged | grep origin/ | grep -v "main" | grep -v "master" | grep -v "develop" | sed 's/origin\//  - /'
    echo ""
    
    # Confirmar
    read -p "Deseja deletar estas branches remotas? (s/n): " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Ss]$ ]]; then
        git branch -r --merged | grep origin/ | grep -v "main" | grep -v "master" | grep -v "develop" | sed 's/origin\///' | xargs -n 1 git push origin --delete
        sucesso "Branches remotas deletadas"
    else
        aviso "Limpeza de branches remotas cancelada"
    fi
fi
echo ""

# ============================================================
# 6. Limpar cache do Git
# ============================================================
info "Limpando cache do Git..."
git gc --prune=now
sucesso "Cache limpo"
echo ""

# ============================================================
# 7. Mostrar status final
# ============================================================
echo "📊 Status final:"
echo ""
echo "Branches locais restantes:"
git branch | sed 's/^/  /'
echo ""
echo "Branches remotas restantes:"
git branch -r | sed 's/^/  /'
echo ""

# ============================================================
# 8. Resumo
# ============================================================
echo "=========================================="
sucesso "Limpeza do repositório concluída!"
echo "=========================================="
echo ""
echo "Próximos passos recomendados:"
echo "  1. Verifique se tudo está funcionando"
echo "  2. Faça push das mudanças: git push origin main"
echo "  3. Consulte ORGANIZACAO_GITHUB.md para mais dicas"
echo ""
