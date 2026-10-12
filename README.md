# 🎨 Danissaura3d - Site Oficial

> Site institucional para o ateliê de pintura manual, esculturas e quadros personalizados de pets.

[![Deploy](https://img.shields.io/badge/deploy-ready-green)]()
[![License](https://img.shields.io/badge/license-private-red)]()

---

## ✨ Sobre

O **Danissaura3d** eterniza a memória de pets através de arte manual. Este site foi desenvolvido para facilitar o contato com clientes e apresentar os trabalhos do ateliê.

### Características:
- 🎨 Design artesanal e afetivo
- 📱 Totalmente responsivo (mobile-first)
- ⚡ Performance otimizada
- 🔄 Auto-manutenção de imagens
- 💬 Integração direta com WhatsApp

---

## 🚀 Quick Start

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

Acesse: `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Os arquivos serão gerados em `dist/`.

### Validação

```bash
npm run validate
```

Verifica imagens, TypeScript, build e variáveis de ambiente.

---

## 📁 Estrutura do Projeto

```
PetDanissaura3D/
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   └── ImagemSite.tsx  # Imagem com fallback automático
│   ├── config/             # Configurações centralizadas
│   │   ├── env.ts          # Variáveis de ambiente
│   │   └── imagens.ts      # URLs das imagens
│   ├── App.tsx             # Componente principal
│   ├── main.tsx            # Entry point
│   └── index.css           # Estilos globais
├── public/                 # Assets estáticos
├── scripts/
│   └── validate.ts         # Script de validação
├── .env.example            # Template de variáveis
├── DEPLOY.md               # Guia de deploy
├── MANUTENCAO.md           # Guia de manutenção
└── README.md               # Este arquivo
```

---

## 🔧 Manutenção

### Adicionar Imagens

1. Faça upload no GitHub: `src/public/images/`
2. Edite `src/config/imagens.ts`
3. Commit e push

### Alterar Contatos

Edite `.env`:

```env
VITE_WHATSAPP_NUMBER=5514999999999
VITE_INSTAGRAM_URL=https://instagram.com/novo_perfil
```

### Alterar Cores

Edite `src/index.css` na seção `@theme`.

**Consulte [MANUTENCAO.md](MANUTENCAO.md) para guia completo.**

---

## 🌐 Deploy

### Opções Recomendadas:

#### Vercel (Mais Simples)
```bash
npm i -g vercel
vercel
```

#### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod
```

#### Docker
```bash
docker build -t danissaura3d .
docker run -p 80:80 danissaura3d
```

**Consulte [DEPLOY.md](DEPLOY.md) para mais opções.**

---

## 🛠️ Tecnologias

- **React 18** - Framework UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool
- **Tailwind CSS 4** - Estilização
- **GitHub** - Hospedagem de imagens

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
