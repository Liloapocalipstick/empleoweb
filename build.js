#!/usr/bin/env node

import { build } from 'esbuild';
import { execSync } from 'child_process';

// First run vite build
console.log('Building frontend with Vite...');
execSync('vite build', { stdio: 'inherit' });

// Then build the server with esbuild, bundling nanoid but keeping other packages external
console.log('Building server with esbuild...');
await build({
  entryPoints: ['server/index.ts'],
  bundle: true,
  platform: 'node',
  format: 'esm',
  outdir: 'dist',
  external: [
    'express',
    'http',
    'https',
    'fs',
    'path',
    'url',
    'crypto',
    'os',
    'util',
    'events',
    'stream',
    'buffer',
    'querystring',
    'zlib',
    'net',
    'tls',
    'dns',
    // Keep most node modules external but bundle nanoid
    '@neondatabase/*',
    'bcryptjs',
    'jsonwebtoken',
    'drizzle-orm',
    'drizzle-zod',
    'zod'
  ]
});

console.log('Build complete!');