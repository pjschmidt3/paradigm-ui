#!/usr/bin/env node

/**
 * Registry Validation Script
 * Validates registry.json for shadcn CLI compatibility
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const REQUIRED_FIELDS = ['name', 'type', 'description', 'files'];
const VALID_TYPES = ['registry:ui', 'registry:lib', 'registry:hook', 'registry:theme'];

function loadRegistry() {
  const registryPath = path.join(projectRoot, 'registry.json');
  if (!fs.existsSync(registryPath)) {
    throw new Error('registry.json not found in project root');
  }
  return JSON.parse(fs.readFileSync(registryPath, 'utf-8'));
}

function validateFilePaths(item, errors) {
  if (!item.files || !Array.isArray(item.files)) {
    errors.push(`[${item.name}] Missing or invalid "files" array`);
    return;
  }

  for (const file of item.files) {
    const filePath = typeof file === 'string' ? file : file.path;
    if (!filePath) {
      errors.push(`[${item.name}] File entry missing "path" property`);
      continue;
    }

    const fullPath = path.join(projectRoot, filePath);
    if (!fs.existsSync(fullPath)) {
      errors.push(`[${item.name}] File not found: ${filePath}`);
    }
  }
}

function validateRegistryDependencies(item, allNames, errors) {
  if (!item.registryDependencies) return;

  for (const dep of item.registryDependencies) {
    if (!allNames.has(dep)) {
      errors.push(`[${item.name}] Invalid registry dependency: "${dep}" not found in registry`);
    }
  }
}

function validateRequiredFields(item, errors) {
  for (const field of REQUIRED_FIELDS) {
    if (!item[field]) {
      errors.push(`[${item.name || 'unknown'}] Missing required field: "${field}"`);
    }
  }

  if (item.type && !VALID_TYPES.includes(item.type)) {
    errors.push(`[${item.name}] Invalid type: "${item.type}". Must be one of: ${VALID_TYPES.join(', ')}`);
  }
}

function validateTierMetadata(item, errors) {
  if (!item.meta || !item.meta.tier) {
    errors.push(`[${item.name}] Missing tier metadata (meta.tier)`);
  } else if (!['free', 'premium'].includes(item.meta.tier)) {
    errors.push(`[${item.name}] Invalid tier: "${item.meta.tier}". Must be "free" or "premium"`);
  }
}

function checkDuplicates(items, errors) {
  const names = new Set();
  for (const item of items) {
    if (names.has(item.name)) {
      errors.push(`Duplicate item name: "${item.name}"`);
    }
    names.add(item.name);
  }
}

function main() {
  console.log('Validating registry.json...\n');

  let registry;
  try {
    registry = loadRegistry();
  } catch (err) {
    console.error(`ERROR: ${err.message}`);
    process.exit(1);
  }

  if (!registry.items || !Array.isArray(registry.items)) {
    console.error('ERROR: registry.json must have an "items" array');
    process.exit(1);
  }

  const errors = [];
  const allNames = new Set(registry.items.map(item => item.name));

  // Check for duplicates
  checkDuplicates(registry.items, errors);

  // Validate each item
  for (const item of registry.items) {
    validateRequiredFields(item, errors);
    validateFilePaths(item, errors);
    validateRegistryDependencies(item, allNames, errors);
    validateTierMetadata(item, errors);
  }

  // Summary
  const freeCount = registry.items.filter(i => i.meta?.tier === 'free').length;
  const premiumCount = registry.items.filter(i => i.meta?.tier === 'premium').length;

  console.log(`Registry: ${registry.name || 'unnamed'}`);
  console.log(`Total items: ${registry.items.length}`);
  console.log(`  Free: ${freeCount}`);
  console.log(`  Premium: ${premiumCount}`);
  console.log('');

  if (errors.length > 0) {
    console.log(`VALIDATION FAILED - ${errors.length} error(s) found:\n`);
    for (const error of errors) {
      console.log(`  - ${error}`);
    }
    process.exit(1);
  }

  console.log('Registry valid');
  process.exit(0);
}

main();
