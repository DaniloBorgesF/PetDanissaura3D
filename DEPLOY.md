# 🚀 Guia de Deploy - Danissaura3d

## Estrutura do Projeto

```
├── src/
│   ├── components/     # Componentes reutilizáveis
│   │   └── ImagemSite.tsx  # Componente de imagem com fallback
│   ├── config/         # Configurações centralizadas
│   │   ├── env.ts      # Variáveis de ambiente
│   │   ├── imagens.ts  # URLs e dados das imagens
│   │   └── dados.ts    # Dados do negócio (legado)
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Entry point
│   └── index.css       # Estilos globais
├── public/             # Assets estáticos
├── .env.example        # Template de variáveis de ambiente
├── DEPLOY.md           # Este arquivo
└── MANUTENCAO.md       # Guia de manutenção
```

## Deploy em Servidores Cloud

### 1. Variáveis de Ambiente

Crie um arquivo `.env` baseado no `.env.example`:

```bash
cp .env.example .env
```

Edite as variáveis conforme necessário:

```env
VITE_IMAGE_BASE_URL=https://raw.githubusercontent.com/...
VITE_WHATSAPP_NUMBER=5514981685016
VITE_INSTAGRAM_URL=https://instagram.com/danissaura_3d
VITE_ATELIE_NAME=Danissaura3d
VITE_APP_ENV=production
```

### 2. Build para Produção

```bash
npm run build
```

Os arquivos serão gerados em `dist/`.

### 3. Opções de Deploy

#### Vercel (Recomendado)

```bash
npm i -g vercel
vercel
```

Ou conecte o repositório GitHub em vercel.com.

#### Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod
```

#### AWS S3 + CloudFront

```bash
npm run build
aws s3 sync dist/ s3://seu-bucket --delete
aws cloudfront create-invalidation --distribution-id SEU_ID --paths "/*"
```

#### Docker

```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
```

```bash
docker build -t danissaura3d .
docker run -p 80:80 danissaura3d
```

### 4. CI/CD (GitHub Actions)

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - name: Deploy to production
        # Adicione seu provedor aqui
        run: echo "Deploy step"
```

## Monitoramento

### Health Check

Adicione um endpoint de health check:

```typescript
// src/api/health.ts
export function healthCheck() {
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  };
}
```

### Logs

Para capturar erros em produção, considere:
- Sentry (frontend errors)
- LogRocket (user sessions)
- Google Analytics (tracking)

## Performance

### Otimizações já implementadas:
- ✅ Lazy loading de imagens
- ✅ Code splitting automático (Vite)
- ✅ Imagens em WebP
- ✅ Fallback para imagens quebradas
- ✅ CSS otimizado com Tailwind

### Próximos passos:
- [ ] Implementar Service Worker para cache offline
- [ ] Adicionar CDN para imagens
- [ ] Implementar critical CSS inline
- [ ] Adicionar preconnect para domínios externos

## Segurança

### Checklist:
- [x] HTTPS obrigatório
- [x] Headers de segurança (configure no servidor)
- [x] Sem credenciais no código
- [x] Variáveis de ambiente para dados sensíveis

### Headers recomendados (nginx):

```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

## Suporte

Para dúvidas sobre deploy, consulte:
- `MANUTENCAO.md` - Guia de manutenção
- `.env.example` - Template de variáveis
- Documentação do Vite: https://vitejs.dev/
