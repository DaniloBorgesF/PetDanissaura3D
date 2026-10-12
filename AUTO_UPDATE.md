# 🔄 Sistema de Auto-Atualização - Danissaura3d

## Visão Geral

O site Danissaura3d possui um sistema inteligente de auto-atualização que mantém datas e informações sempre atualizadas automaticamente.

## 🎯 Funcionalidades

### 1. **Datas Dinâmicas**
- ✅ **Ano do copyright**: Atualizado automaticamente (`© {ANO_ATUAL}`)
- ✅ **Data de build**: Gerada no momento do deploy
- ✅ **Timestamp de verificação**: Para cache busting

### 2. **Versionamento**
- ✅ **Versão do site**: `v1.2.0` (configurável em `src/config/versao.ts`)
- ✅ **Changelog**: Histórico de mudanças em `src/config/versao.json`
- ✅ **Comparação remota**: Verifica se há nova versão no GitHub

### 3. **Verificação Automática**
- ✅ **Verificação periódica**: A cada 1 hora (configurável)
- ✅ **Cache inteligente**: Usa localStorage para evitar verificações desnecessárias
- ✅ **Indicador visual**: Mostra status de atualização no rodapé
- ✅ **Notificação**: Alerta quando há nova versão disponível

### 4. **Componente de Status**
O componente `StatusAtualizacao` mostra:
- Versão atual do site
- Data da última build
- Tempo desde a última verificação
- Indicador de nova versão disponível
- Botão para verificar manualmente

## 📁 Arquivos do Sistema

```
src/
├── config/
│   ├── versao.ts          # Configurações de versão e datas
│   └── versao.json        # Dados de versão (usado para verificação remota)
├── hooks/
│   └── useAutoUpdate.ts   # Hook para gerenciar atualizações
└── components/
    └── StatusAtualizacao.tsx  # Componente visual de status

scripts/
└── update-build-date.js   # Script para atualizar data de build
```

## 🔧 Como Funciona

### 1. **Ano Dinâmico**
```typescript
// src/config/versao.ts
export const ANO_ATUAL = new Date().getFullYear();

// Uso no App.tsx
<p>© {ANO_ATUAL} {dadosNegocio.nome}</p>
```

### 2. **Data de Build**
```typescript
// Atualizada automaticamente no momento do build
export const DATA_BUILD = new Date().toISOString();
export const DATA_BUILD_FORMATADA = new Date().toLocaleDateString('pt-BR', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});
```

### 3. **Verificação de Updates**
```typescript
// Hook useAutoUpdate
const { versaoAtual, precisaAtualizar, verificarAgora } = useAutoUpdate();

// Verifica a cada 1 hora
// Compara versão local com versão no GitHub
// Notifica se há nova versão disponível
```

### 4. **Componente de Status**
```tsx
// Adicionado antes do rodapé
<StatusAtualizacao />

// Mostra:
// - Versão: v1.2.0
// - Data: 15 de janeiro de 2024
// - Verificado há 23 minutos
// - Status: Site atualizado / Nova versão disponível
```

## 🚀 Uso

### Para Desenvolvedores

1. **Atualizar versão** (quando fizer mudanças grandes):
   ```typescript
   // src/config/versao.ts
   export const VERSAO_SITE = '1.3.0'; // Incremente aqui
   ```

2. **Adicionar ao changelog**:
   ```json
   // src/config/versao.json
   {
     "versao": "1.3.0",
     "data": "2024-01-20",
     "mudancas": ["Nova funcionalidade X", "Correção Y"]
   }
   ```

3. **Fazer deploy**:
   ```bash
   # Opcional: atualizar data de build manualmente
   node scripts/update-build-date.js
   
   # Build normal
   npm run build
   ```

### Para Usuários Finais

O sistema é **totalmente transparente**:
- ✅ Ano do copyright atualiza automaticamente
- ✅ Data de build mostra quando o site foi atualizado
- ✅ Indicador visual mostra se está atualizado
- ✅ Verificação automática em background

## ⚙️ Configurações

### Intervalo de Verificação
```typescript
// src/config/versao.ts
export const INTERVALO_VERIFICACAO = 60 * 60 * 1000; // 1 hora
```

### URL de Verificação
```typescript
// src/config/versao.ts
export const URL_VERIFICACAO = {
  github: 'https://raw.githubusercontent.com/.../versao.json',
  cdn: null, // Configure se necessário
};
```

### Chaves do localStorage
```typescript
// src/config/versao.ts
export const STORAGE_KEY_VERSAO = 'danissaura3d_versao';
export const STORAGE_KEY_ULTIMA_VERIFICACAO = 'danissaura3d_ultima_verificacao';
```

## 📊 Monitoramento

### Verificar Status no Console
```javascript
// No console do navegador
localStorage.getItem('danissaura3d_versao');
localStorage.getItem('danissaura3d_ultima_verificacao');
```

### Forçar Verificação
O usuário pode clicar no botão "Verificar" no componente de status para forçar uma verificação manual.

## 🔒 Segurança

- ✅ **CORS**: Requisições usam `cache: 'no-store'`
- ✅ **HTTPS**: Todas as URLs são HTTPS
- ✅ **Validação**: Versões são comparadas com segurança
- ✅ **Fallback**: Se falhar, não quebra o site

## 🐛 Troubleshooting

### Nova versão não aparece?
1. Verifique se o arquivo `versao.json` foi atualizado no GitHub
2. Aguarde o intervalo de verificação (1 hora)
3. Clique em "Verificar" manualmente
4. Limpe o localStorage: `localStorage.clear()`

### Data de build não atualiza?
1. Execute o script: `node scripts/update-build-date.js`
2. Faça rebuild: `npm run build`
3. Faça redeploy

### Componente não aparece?
1. Verifique se `StatusAtualizacao` está importado no App.tsx
2. Verifique se está renderizado antes do `<Rodape />`
3. Verifique o console por erros

## 📝 Boas Práticas

1. **Incremente a versão** quando fizer mudanças significativas
2. **Atualize o changelog** para documentar mudanças
3. **Teste localmente** antes de fazer deploy
4. **Monitore** as verificações no console
5. **Mantenha** o `versao.json` sincronizado com `versao.ts`

## 🎯 Benefícios

- ✅ **Sem manutenção manual** de datas
- ✅ **Transparência** para usuários
- ✅ **Versionamento** claro e rastreável
- ✅ **Notificações** de atualizações
- ✅ **Profissionalismo** com informações atualizadas

---

**Última atualização**: 15 de janeiro de 2024  
**Versão do sistema**: 1.2.0
