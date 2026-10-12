#!/usr/bin/env node

/**
 * ============================================================
 * SCRIPT: Atualizar Data de Build
 * ============================================================
 *
 * Este script atualiza automaticamente a data de build nos
 * arquivos de configuração antes do build de produção.
 *
 * Uso: node scripts/update-build-date.js
 *
 * ============================================================
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho para o arquivo de versão
const versaoPath = path.join(__dirname, '../src/config/versao.ts');
const versaoJsonPath = path.join(__dirname, '../src/config/versao.json');

// Data atual
const agora = new Date();
const dataISO = agora.toISOString();
const dataFormatada = agora.toLocaleDateString('pt-BR', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});

console.log('🔄 Atualizando data de build...\n');

// Atualiza versao.ts
try {
  let conteudo = fs.readFileSync(versaoPath, 'utf-8');
  
  // Substitui DATA_BUILD
  conteudo = conteudo.replace(
    /export const DATA_BUILD = '[^']+';/,
    `export const DATA_BUILD = '${dataISO}';`
  );
  
  // Substitui DATA_BUILD_FORMATADA
  conteudo = conteudo.replace(
    /export const DATA_BUILD_FORMATADA = '[^']+';/,
    `export const DATA_BUILD_FORMATADA = '${dataFormatada}';`
  );
  
  // Substitui TIMESTAMP_VERIFICACAO
  conteudo = conteudo.replace(
    /export const TIMESTAMP_VERIFICACAO = \d+;/,
    `export const TIMESTAMP_VERIFICACAO = ${Date.now()};`
  );
  
  fs.writeFileSync(versaoPath, conteudo, 'utf-8');
  console.log('✅ versao.ts atualizado');
} catch (error) {
  console.error('❌ Erro ao atualizar versao.ts:', error);
}

// Atualiza versao.json
try {
  const json = JSON.parse(fs.readFileSync(versaoJsonPath, 'utf-8'));
  
  json.dataBuild = dataISO;
  json.dataBuildFormatada = dataFormatada;
  
  fs.writeFileSync(versaoJsonPath, JSON.stringify(json, null, 2), 'utf-8');
  console.log('✅ versao.json atualizado');
} catch (error) {
  console.error('❌ Erro ao atualizar versao.json:', error);
}

console.log('\n📅 Data de build:', dataFormatada);
console.log('🕐 Timestamp:', dataISO);
console.log('\n✨ Atualização concluída!\n');
