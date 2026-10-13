# 🧪 Política de Testes e QA - Danissaura3d

## 📋 Checklist de Testes Obrigatório

Antes de concluir qualquer demanda, TODOS os itens abaixo devem ser verificados:

### 1. Testes de Responsividade
- [ ] **Mobile (320px - 480px)**: Layout não quebra, textos legíveis, botões clicáveis
- [ ] **Tablet (481px - 1024px)**: Grids adaptados, imagens proporcionais
- [ ] **Desktop (1025px+)**: Layout completo, espaçamentos corretos
- [ ] **Touch targets**: Botões com mínimo 44x44px em mobile
- [ ] **Scroll horizontal**: Nenhum overflow indesejado em mobile

### 2. Testes de Funcionalidade
- [ ] **Navegação**: Todos os links funcionam (menu desktop e mobile)
- [ ] **WhatsApp**: Todos os botões abrem WhatsApp com mensagem correta
- [ ] **Imagens**: Todas carregam, sem cortes, com fallback funcionando
- [ ] **Modais**: Abrem/fecham corretamente (clique, ESC, overlay)
- [ ] **Formulários**: Validação, submit, feedback visual
- [ ] **Carrossel**: Navegação manual e automática, responsivo

### 3. Testes de Performance
- [ ] **Lighthouse Score**: Performance > 90, Accessibility > 90
- [ ] **Carregamento**: Imagens com lazy loading
- [ ] **Bundle size**: JavaScript < 200KB gzipped
- [ ] **First Contentful Paint**: < 2.5s
- [ ] **Largest Contentful Paint**: < 4s

### 4. Testes de Acessibilidade
- [ ] **Contraste**: Textos com contraste mínimo 4.5:1
- [ ] **ARIA labels**: Todos os botões e links têm labels descritivos
- [ ] **Navegação por teclado**: Tab order correto, focus visível
- [ ] **Screen readers**: Textos alternativos em imagens
- [ ] **Zoom**: Funciona até 200% sem quebrar layout

### 5. Testes Cross-Browser
- [ ] **Chrome**: Última versão
- [ ] **Firefox**: Última versão
- [ ] **Safari**: Última versão (iOS e macOS)
- [ ] **Edge**: Última versão
- [ ] **Mobile browsers**: Chrome Mobile, Safari Mobile

### 6. Testes de Conteúdo
- [ ] **Textos**: Sem erros de português, formatação correta
- [ ] **Imagens**: Alt texts descritivos e relevantes
- [ ] **Links**: Todos funcionam, sem links quebrados
- [ ] **Dados dinâmicos**: Ano atual, versão, data de build

---

## 🔍 Processo de Revisão de Código

### Antes de Commitar
1. **Build local**: `npm run build` sem erros
2. **TypeScript**: `npm run typecheck` sem erros
3. **Lint**: Sem warnings ou erros
4. **Teste visual**: Verificar em mobile e desktop
5. **Teste funcional**: Clicar em todos os botões e links

### Code Review Checklist
- [ ] Código segue padrões do projeto
- [ ] Componentes estão documentados
- [ ] Variáveis têm nomes descritivos
- [ ] Não há código duplicado
- [ ] Não há hardcoded values (usar config)
- [ ] Tratamento de erros implementado
- [ ] Performance otimizada (memo, lazy, etc)
- [ ] Responsivo em todos os breakpoints
- [ ] Acessibilidade respeitada
- [ ] Testado em mobile e desktop

---

## 🐛 Guia de Debugging

### Problemas Comuns e Soluções

#### 1. Layout quebra em mobile
**Causa**: Overflow, largura fixa, ou elementos absolutos
**Solução**: 
- Usar `overflow-x-hidden` no body
- Verificar larguras máximas
- Testar com `* { outline: 1px solid red; }` para ver containers

#### 2. Imagens não carregam
**Causa**: URL incorreta, CORS, ou arquivo inexistente
**Solução**:
- Verificar URL no navegador diretamente
- Verificar console para erros CORS
- Verificar se arquivo existe no GitHub
- Testar com imagem de fallback

#### 3. Carrossel não funciona em mobile
**Causa**: `overflow-hidden` em vez de `overflow-auto`
**Solução**:
- Usar `overflow-x-auto` para permitir scroll
- Adicionar `-webkit-overflow-scrolling: touch`
- Esconder scrollbar com CSS
- Testar com touch events

#### 4. Modal não fecha
**Causa**: Event propagation ou z-index
**Solução**:
- Verificar `e.stopPropagation()`
- Verificar z-index dos elementos
- Testar fechamento com ESC
- Verificar overlay click

#### 5. Fontes não carregam
**Causa**: CDN bloqueado ou offline
**Solução**:
- Verificar conexão com internet
- Testar URL do CDN diretamente
- Implementar fallback para fontes do sistema
- Usar `font-display: swap`

---

## 📱 Dispositivos de Teste

### Mobile
- iPhone SE (375x667)
- iPhone 12/13 (390x844)
- iPhone 14 Pro Max (430x932)
- Samsung Galaxy S21 (360x800)
- Samsung Galaxy S22 Ultra (384x854)

### Tablet
- iPad Mini (768x1024)
- iPad Air (820x1180)
- iPad Pro 11" (834x1194)
- iPad Pro 12.9" (1024x1366)

### Desktop
- MacBook Air 13" (1440x900)
- MacBook Pro 16" (1792x1120)
- Dell XPS 13 (1920x1080)
- iMac 27" (2560x1440)

---

## 🚨 Critérios de Aceite

Uma feature só é considerada **CONCLUÍDA** quando:

1. ✅ **Funciona em mobile** (320px+)
2. ✅ **Funciona em desktop** (1920px)
3. ✅ **Passa no Lighthouse** (>90 em todos os scores)
4. ✅ **Não tem erros no console**
5. ✅ **Build passa sem erros**
6. ✅ **TypeScript compila sem erros**
7. ✅ **Testado em 3+ dispositivos**
8. ✅ **Acessibilidade verificada**
9. ✅ **Performance otimizada**
10. ✅ **Documentação atualizada**

---

## 📊 Métricas de Qualidade

### Performance
- **First Contentful Paint**: < 2.5s
- **Largest Contentful Paint**: < 4s
- **Total Blocking Time**: < 300ms
- **Cumulative Layout Shift**: < 0.1
- **Speed Index**: < 4.5s

### Acessibilidade
- **Contraste de cores**: > 4.5:1
- **Área de toque**: > 44x44px
- **Navegação por teclado**: 100% funcional
- **ARIA labels**: 100% dos elementos interativos

### SEO
- **Meta tags**: Completas e otimizadas
- **Open Graph**: Configurado
- **Sitemap**: Gerado
- **Robots.txt**: Configurado
- **Alt texts**: 100% das imagens

---

## 🔄 Processo de Deploy

### Antes do Deploy
1. Rodar todos os testes do checklist
2. Verificar build local
3. Testar em staging (se disponível)
4. Verificar variáveis de ambiente
5. Backup do banco de dados (se aplicável)

### Durante o Deploy
1. Monitorar logs em tempo real
2. Verificar se não há erros
3. Testar funcionalidades críticas
4. Monitorar performance

### Após o Deploy
1. Testar em produção
2. Verificar analytics
3. Monitorar erros (Sentry, etc)
4. Coletar feedback dos usuários

---

## 📝 Registro de Bugs

Quando encontrar um bug, registrar:

```markdown
### Bug: [Título descritivo]
**Data**: YYYY-MM-DD
**Ambiente**: Mobile/Desktop/Tablet
**Dispositivo**: [Modelo específico]
**Navegador**: [Nome e versão]
**URL**: [Página onde ocorre]

**Descrição**:
[Descreva o problema detalhadamente]

**Passos para reproduzir**:
1. Passo 1
2. Passo 2
3. Passo 3

**Comportamento esperado**:
[O que deveria acontecer]

**Comportamento atual**:
[O que está acontecendo]

**Screenshots/Videos**:
[Anexe se possível]

**Prioridade**: Alta/Média/Baixa
**Status**: Aberto/Em andamento/Resolvido
```

---

## ✅ Checklist Final Antes de Entregar

Antes de dizer "pronto" para o cliente, verificar:

- [ ] Todos os testes do checklist passaram
- [ ] Testado em pelo menos 3 dispositivos diferentes
- [ ] Build passa sem erros ou warnings
- [ ] TypeScript compila sem erros
- [ ] Lighthouse score > 90 em todas as métricas
- [ ] Não há erros no console do navegador
- [ ] Todas as funcionalidades foram testadas manualmente
- [ ] Responsivo em mobile, tablet e desktop
- [ ] Acessibilidade verificada
- [ ] Performance otimizada
- [ ] Documentação atualizada
- [ ] Código revisado e limpo
- [ ] Sem código comentado ou desnecessário
- [ ] Variáveis de ambiente configuradas
- [ ] Deploy testado em staging (se aplicável)

---

## 🎯 Meta de Qualidade

**Objetivo**: Zero bugs críticos em produção

**Indicadores**:
- 100% dos testes passando antes do deploy
- < 5 bugs reportados pelos usuários por mês
- Lighthouse score > 95 em todas as métricas
- Tempo de resposta a bugs críticos < 4 horas
- Satisfação do cliente > 95%

---

**Última atualização**: 2024-01-15  
**Versão do documento**: 1.0.0  
**Responsável**: Equipe de Desenvolvimento
