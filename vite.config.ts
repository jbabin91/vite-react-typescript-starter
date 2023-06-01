/// <reference types="vitest" />
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import mkcert from 'vite-plugin-mkcert';
import viteTsConfigPaths from 'vite-tsconfig-paths';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  build: {
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
      provider: 'c8',
      reporter: ['text', 'json-summary', 'json'],
    },
    environment: 'happy-dom',
    globals: true,
    include: ['./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    setupFiles: ['./src/setupTests.ts'],
  },
});
