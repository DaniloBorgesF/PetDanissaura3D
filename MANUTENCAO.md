# 🔧 Guia de Manutenção - Danissaura3d

## Auto-Manutenção do Código

Este projeto foi estruturado para facilitar a manutenção contínua sem necessidade de desenvolvedor.

---

## 📸 Como Adicionar/Remover Imagens

### Passo 1: Upload no GitHub

1. Acesse o repositório: `https://github.com/DaniloBorgesF/PetDanissaura3D`
2. Navegue até `src/public/images/`
3. Clique em **"Add file" → "Upload files"**
4. Arraste as imagens e clique em **"Commit changes"**

### Passo 2: Atualizar o Código

Edite `src/config/imagens.ts`:

```typescript
// Para ADICIONAR uma imagem à galeria:
export const galleryImages = [
  // ... imagens existentes
  {
    src: getImagemUrl('NOVO_ARQUIVO.webp'),  // ← Adicione aqui
    alt: 'Descrição da nova imagem',
  },
];

// Para REMOVER uma imagem:
// Basta deletar o objeto correspondente do array
```

### Passo 3: Deploy

```bash
git add .
git commit -m "Atualiza galeria de imagens"
git push
```

O deploy automático irá atualizar o site.

---

## 📞 Como Alterar Contatos

Edite `.env` (ou `src/config/env.ts`):

```env
# WhatsApp
VITE_WHATSAPP_NUMBER=5514999999999

# Instagram
VITE_INSTAGRAM_URL=https://instagram.com/novo_perfil
```

Rebuild e deploy:

```bash
npm run build
# + seu processo de deploy
```

---

## ✏️ Como Alterar Textos

### Textos do Site

Todos os textos estão em `src/App.tsx`. Procure pela seção desejada:

| Seção | Função | O que editar |
|-------|--------|--------------|
| Hero | `Hero()` | Título, subtítulo, badge |
| Sobre | `Sobre()` | Textos, estatísticas |
| Serviços | `Servicos()` | Títulos, descrições |
| FAQ | `FAQ()` | Perguntas e respostas |
| Depoimentos | `Depoimentos()` | Textos dos clientes |

### Mensagens do WhatsApp

Edite `src/config/env.ts`:

```typescript
export const mensagensWhatsApp = {
  saudacao: 'Olá! Vim pelo site...',
  orcamentoGeral: 'Olá! Gostaria de um orçamento...',
  // ... edite as mensagens aqui
};
```

---

## 🎨 Como Alterar Cores

Edite `src/index.css`:

```css
@theme {
  --color-terracotta: #c4704b;      /* Cor principal */
  --color-terracotta-light: #d4896a; /* Versão clara */
  --color-terracotta-dark: #a85a38;  /* Versão escura */
  --color-brown: #3d2c1e;            /* Texto principal */
  --color-cream: #faf7f2;            /* Fundo principal */
  --color-whatsapp: #25D366;         /* Botão WhatsApp */
}
```

---

## 🔍 Script de Validação

Use o script de validação para verificar se tudo está correto:

```bash
npm run validate
```

O script verifica:
- ✅ Se todas as imagens estão acessíveis
- ✅ Se não há erros de TypeScript
- ✅ Se o build funciona corretamente
- ✅ Se as variáveis de ambiente estão configuradas

---

## 📋 Checklist de Manutenção Periódica

### Mensal:
- [ ] Verificar se todas as imagens carregam
- [ ] Testar links do WhatsApp
- [ ] Verificar link do Instagram
- [ ] Ler depoimentos e atualizar se necessário

### Trimestral:
- [ ] Atualizar estatísticas (pets eternizados)
- [ ] Adicionar novas imagens à galeria
- [ ] Revisar FAQ com dúvidas frequentes
- [ ] Verificar performance (Lighthouse)

### Anual:
- [ ] Revisar dependências (`npm audit`)
- [ ] Atualizar pacotes (`npm update`)
- [ ] Revisar textos e tom de voz
- [ ] Avaliar necessidade de novas funcionalidades

---

## 🐛 Resolução de Problemas

### Imagem não carrega

1. Verifique se o arquivo existe no GitHub
2. Confirme o nome exato em `src/config/imagens.ts`
3. Teste a URL diretamente no navegador

### WhatsApp não abre

1. Verifique o número em `.env` ou `src/config/env.ts`
2. Confirme o formato: código do país + DDD + número (sem espaços)
3. Exemplo: `5514981685016`

### Build falha

```bash
# Limpar cache
rm -rf node_modules/.vite
rm -rf dist

# Reinstalar dependências
npm ci

# Tentar build novamente
npm run build
```

### Site lento

1. Verificar tamanho das imagens (ideal: < 200KB)
2. Usar formato WebP quando possível
3. Implementar CDN para imagens
4. Verificar relatórios do Lighthouse

---

## 📦 Estrutura de Arquivos

```
src/
├── components/
│   └── ImagemSite.tsx    # Componente de imagem robusto
├── config/
│   ├── env.ts            # ⭐ Configurações de ambiente
│   ├── imagens.ts        # ⭐ URLs das imagens
│   └── dados.ts          # Dados legados (não usar)
├── App.tsx               # ⭐ Componente principal
├── main.tsx              # Entry point
├── index.css             # ⭐ Estilos e tema
└── vite-env.d.ts         # Tipagens TypeScript

.env.example              # Template de variáveis
.env                      # ⭐ Suas configurações (não commitar!)
DEPLOY.md                 # Guia de deploy
MANUTENCAO.md             # Este arquivo
```

**Legenda:** ⭐ = Arquivos que você provavelmente editará

---

## 🚀 Próximas Melhorias Sugeridas

### Curto Prazo:
- [ ] Adicionar formulário de contato alternativo
- [ ] Implementar modo escuro
- [ ] Adicionar animações de entrada nas seções

### Médio Prazo:
- [ ] Blog com dicas sobre pets
- [ ] Sistema de agendamento
- [ ] Integração com Instagram API (galeria automática)

### Longo Prazo:
- [ ] E-commerce para venda direta
- [ ] Área do cliente para acompanhar pedidos
- [ ] App mobile (PWA)

---

## 📞 Suporte

Para dúvidas técnicas:
- Documentação Vite: https://vitejs.dev/
- Documentação React: https://react.dev/
- Documentação Tailwind: https://tailwindcss.com/

Para dúvidas sobre o negócio:
- WhatsApp: (14) 98168-5016
- Instagram: @danissaura_3d
