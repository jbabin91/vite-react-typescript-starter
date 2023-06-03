/// <reference types="vitest" />
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import mkcert from 'vite-plugin-mkcert';
import viteTsConfigPaths from 'vite-tsconfig-paths';

import { dependencies } from './package.json';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const exclVendors = new Set(['react', 'react-router-dom', 'react-dom']);
function renderChunks(deps: Record<string, string>) {
  const chunks = {};
  for (const key of Object.keys(deps)) {
    if (exclVendors.has(key)) continue;
    chunks[key] = [key];
  }
  return chunks;
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          ...renderChunks(dependencies),
        },
      },
    },
    sourcemap: true,
  },
  plugins: [
    react(),
    mkcert({
      source: 'coding',
    }),
    viteTsConfigPaths(),
    checker({
      eslint: {
        lintCommand: 'eslint .',
      },
      typescript: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    https: true,
  },
  test: {
    cache: {
      dir: './node_modules/.vitest',
    },
    coverage: {
      branches: 60,
      functions: 60,
      lines: 60,
      provider: 'c8',
      reporter: ['text', 'json-summary', 'json'],
      statements: 60,
    },
    environment: 'happy-dom',
    globals: true,
    include: ['./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    setupFiles: ['./src/setupTests.ts'],
  },
});
