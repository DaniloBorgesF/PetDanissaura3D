#!/usr/bin/env node

/**
 * ============================================================
 * SCRIPT DE VALIDAÇÃO - Danissaura3d
 * ============================================================
 *
 * Verifica automaticamente:
 * - Se todas as imagens estão acessíveis
 * - Se não há erros de TypeScript
 * - Se o build funciona corretamente
 * - Se as variáveis de ambiente estão configuradas
 *
 * Uso: npm run validate
 *
 * ============================================================
 */

import { config } from './src/config/env.ts';
import { imagensDisponiveis, getImagemUrl } from './src/config/imagens.ts';
import { execSync } from 'child_process';
import fs from 'fs';

// Cores para output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message: string, color: string = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function success(message: string) {
  log(`✅ ${message}`, colors.green);
}

function error(message: string) {
  log(`❌ ${message}`, colors.red);
}

function warning(message: string) {
  log(`⚠️  ${message}`, colors.yellow);
}

function info(message: string) {
  log(`ℹ️  ${message}`, colors.blue);
}

// ============================================================
// VALIDAÇÕES
// ============================================================

async function validarImagens() {
  log('\n📸 Validando imagens...', colors.cyan);
  
  let erros = 0;
  let sucesso = 0;

  for (const imagem of imagensDisponiveis) {
    const url = getImagemUrl(imagem);
    try {
      const response = await fetch(url, { method: 'HEAD' });
      if (response.ok) {
        sucesso++;
        success(`${imagem}`);
      } else {
        erros++;
        error(`${imagem} - Status: ${response.status}`);
      }
    } catch (err) {
      erros++;
      error(`${imagem} - Erro: ${err instanceof Error ? err.message : 'Desconhecido'}`);
    }
  }

  log(`\nResultado: ${sucesso} OK, ${erros} erros`, erros > 0 ? colors.yellow : colors.green);
  return erros === 0;
}

function validarTypeScript() {
  log('\n🔍 Validando TypeScript...', colors.cyan);
  
  try {
    execSync('npx tsc --noEmit', { stdio: 'pipe' });
    success('TypeScript: Sem erros');
    return true;
  } catch (err) {
    error('TypeScript: Erros encontrados');
    console.log(err instanceof Error ? err.stdout?.toString() : err);
    return false;
  }
}

function validarBuild() {
  log('\n🏗️  Validando build...', colors.cyan);
  
  try {
    execSync('npm run build', { stdio: 'pipe' });
    success('Build: Sucesso');
    
    // Verificar se dist foi gerado
    if (fs.existsSync('dist')) {
      success('Pasta dist/ gerada');
      return true;
    } else {
      error('Pasta dist/ não encontrada');
      return false;
    }
  } catch (err) {
    error('Build: Falhou');
    console.log(err instanceof Error ? err.stdout?.toString() : err);
    return false;
  }
}

function validarEnv() {
  log('\n🔐 Validando variáveis de ambiente...', colors.cyan);
  
  const envFile = '.env';
  
  if (!fs.existsSync(envFile)) {
    warning('Arquivo .env não encontrado');
    info('Copie .env.example para .env e configure as variáveis');
    return false;
  }
  
  success('Arquivo .env encontrado');
  
  const envContent = fs.readFileSync(envFile, 'utf-8');
  const requiredVars = [
    'VITE_IMAGE_BASE_URL',
    'VITE_WHATSAPP_NUMBER',
    'VITE_INSTAGRAM_URL',
    'VITE_ATELIE_NAME'
  ];
  
  let todosPresentes = true;
  
  for (const variavel of requiredVars) {
    if (envContent.includes(variavel)) {
      success(`${variavel} configurada`);
    } else {
      error(`${variavel} não encontrada`);
      todosPresentes = false;
    }
  }
  
  return todosPresentes;
}

function validarEstrutura() {
  log('\n📁 Validando estrutura do projeto...', colors.cyan);
  
  const arquivosObrigatorios = [
    'src/App.tsx',
    'src/main.tsx',
    'src/index.css',
    'src/config/env.ts',
    'src/config/imagens.ts',
    'src/components/ImagemSite.tsx',
    'package.json',
    'vite.config.js',
    'tsconfig.json'
  ];
  
  let todosPresentes = true;
  
  for (const arquivo of arquivosObrigatorios) {
    if (fs.existsSync(arquivo)) {
      success(`${arquivo}`);
    } else {
      error(`${arquivo} não encontrado`);
      todosPresentes = false;
    }
  }
  
  return todosPresentes;
}

// ============================================================
// EXECUÇÃO
// ============================================================

async function main() {
  log('\n🔍 Iniciando validação do projeto Danissaura3d\n', colors.cyan);
  log('='.repeat(60), colors.cyan);
  
  const resultados = {
    estrutura: validarEstrutura(),
    env: validarEnv(),
    typescript: validarTypeScript(),
    imagens: await validarImagens(),
    build: validarBuild()
  };
  
  log('\n' + '='.repeat(60), colors.cyan);
  log('\n📊 Resumo da Validação:\n', colors.cyan);
  
  for (const [teste, passou] of Object.entries(resultados)) {
    if (passou) {
      success(`${teste}: OK`);
    } else {
      error(`${teste}: FALHOU`);
    }
  }
  
  const todosPassaram = Object.values(resultados).every(r => r);
  
  log('\n' + '='.repeat(60), colors.cyan);
  
  if (todosPassaram) {
    log('\n✨ Todas as validações passaram! O projeto está pronto.\n', colors.green);
    process.exit(0);
  } else {
    log('\n⚠️  Algumas validações falharam. Verifique os erros acima.\n', colors.yellow);
    process.exit(1);
  }
}

main().catch(err => {
  error(`Erro inesperado: ${err instanceof Error ? err.message : err}`);
  process.exit(1);
});
