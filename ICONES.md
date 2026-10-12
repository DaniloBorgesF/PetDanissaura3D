# 🎨 Ícones - Danissaura3d

## Favicon

O site possui um favicon personalizado com tema de arte e pets:
- **Formato:** SVG (escalável, sempre nítido)
- **Localização:** `public/favicon.svg`
- **Inline:** Também embutido no `index.html` via data URI (carrega mesmo sem conexão)
- **Tema:** Pincel com pegada de pet em cores terracotta

### Meta Tags Configuradas:
```html
<!-- Favicon SVG inline (sempre carrega) -->
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,..." />

<!-- Favicon SVG arquivo -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" href="/favicon.svg" />

<!-- Theme Color -->
<meta name="theme-color" content="#c4704b" />
```

---

## Font Awesome 6.4.0

O site usa **Font Awesome 6.4.0** para todos os ícones.

### CDN Principal:
```
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css
```

### CDN Fallback:
```
https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css
```

O site tenta automaticamente o CDN fallback se o principal falhar.

---

## Ícones Utilizados

### Ícones de Marca (fab)
| Ícone | Uso | Status |
|-------|-----|--------|
| `fa-whatsapp` | Botões de WhatsApp | ✅ OK |
| `fa-instagram` | Link do Instagram | ✅ OK |

### Ícones Sólidos (fas)
| Ícone | Uso | Status |
|-------|-----|--------|
| `fa-bars` | Menu mobile (aberto) | ✅ OK |
| `fa-xmark` | Menu mobile (fechado) | ✅ OK |
| `fa-truck` | Envio/Badge | ✅ OK |
| `fa-arrow-down` | Scroll indicator | ✅ OK |
| `fa-paint-brush` | Serviço: Pintura | ✅ OK |
| `fa-cube` | Serviço: Esculturas | ✅ OK |
| `fa-image` | Serviço: Quadros | ✅ OK |
| `fa-search-plus` | Galeria (zoom) | ✅ OK |
| `fa-camera` | Passo 1: Enviar foto | ✅ OK |
| `fa-palette` | Passo 2: Definir estilo | ✅ OK |
| `fa-truck-fast` | Passo 4: Envio | ✅ OK |
| `fa-quote-left` | Depoimentos | ✅ OK |
| `fa-star` | Avaliações | ✅ OK |
| `fa-chevron-down` | FAQ accordion | ✅ OK |
| `fa-location-dot` | Localização | ✅ OK |

---

## Como Adicionar Novos Ícones

1. Consulte a [galeria do Font Awesome](https://fontawesome.com/search)
2. Adicione o ícone no componente:

```tsx
<i className="fas fa-nome-do-icone"></i>
```

3. Para ícones de marca (brands):

```tsx
<i className="fab fa-nome-da-marca"></i>
```

---

## Troubleshooting

### Ícone não aparece?

1. **Verifique o nome do ícone** na [documentação oficial](https://fontawesome.com/icons)
2. **Verifique o prefixo:**
   - `fas` = ícones sólidos (Free)
   - `fab` = ícones de marca (Free)
   - `far` = ícones regulares (Pro)
   - `fal` = ícones light (Pro)
3. **Verifique se o Font Awesome carregou:**
   - Abra o console do navegador
   - Procure por erros de rede relacionados ao Font Awesome
   - Verifique se a fonte foi carregada em "Network" tab

### Font Awesome não carrega?

O site possui fallback automático para CDN alternativo. Se ambos falharem:

1. Verifique conexão com internet
2. Verifique se há bloqueio de CDN (adblock, firewall)
3. Considere hospedar o Font Awesome localmente:

```bash
npm install @fortawesome/fontawesome-free
```

```tsx
import '@fortawesome/fontawesome-free/css/all.min.css';
```

---

## Performance

- **Font Awesome:** ~60KB (CSS) + ~100KB (fontes)
- **Carregamento:** Assíncrono via CDN
- **Cache:** CDN faz cache por 1 ano
- **Fallback:** CDN alternativo automático

### Otimizações Futuras:
- [ ] Usar apenas ícones SVG específicos (tree shaking)
- [ ] Implementar Font Awesome Kit (mais eficiente)
- [ ] Considerar ícones inline SVG para críticos

---

## Atualizações

Para atualizar o Font Awesome:

1. Verifique a [versão mais recente](https://fontawesome.com/changelog)
2. Atualize a URL no `index.html`
3. Teste todos os ícones utilizados
4. Atualize esta documentação

---

## Licença

Font Awesome é licenciado sob [CC BY 4.0](https://fontawesome.com/license) para ícones free.
