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

function renderChunks(deps) {
  const chunks = {};
  for (const key of Object.keys(deps)) {
    if (['react', 'react-dom'].includes(key)) continue;
    chunks[key] = [key];
  }
  return chunks;
}

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === 'development';

  return {
    build: {
      chunkSizeWarningLimit: 1600,
      manifest: true,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash].[ext]',
          chunkFileNames: 'js/[name].[hash].js',
          entryFileNames: 'js/[name].[hash].js',
          manualChunks: {
            vendor: ['react', 'react-dom'],
            ...renderChunks(dependencies),
          },
        },
      },
      sourcemap: isDevelopment,
    },
    css: {
      modules: {
        generateScopedName: isDevelopment
          ? '[name]__[local]__[hash:base64:5]'
          : '[hash:base64:5]',
      },
    },
    optimizeDeps: {
      include: ['react/jsx-runtime'],
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
  };
});

// 'radix-ui-vendor': [
//   '@radix-ui/react-accordion',
//   '@radix-ui/react-accordion',
//   '@radix-ui/react-alert-dialog',
//   '@radix-ui/react-aspect-ratio',
//   '@radix-ui/react-avatar',
//   '@radix-ui/react-checkbox',
//   '@radix-ui/react-collapsible',
//   '@radix-ui/react-context-menu',
//   '@radix-ui/react-dialog',
//   '@radix-ui/react-dropdown-menu',
//   '@radix-ui/react-hover-card',
//   '@radix-ui/react-label',
//   '@radix-ui/react-menubar',
//   '@radix-ui/react-navigation-menu',
//   '@radix-ui/react-popover',
//   '@radix-ui/react-progress',
//   '@radix-ui/react-radio-group',
//   '@radix-ui/react-scroll-area',
//   '@radix-ui/react-select',
//   '@radix-ui/react-separator',
//   '@radix-ui/react-slider',
//   '@radix-ui/react-slot',
//   '@radix-ui/react-switch',
//   '@radix-ui/react-tabs',
//   '@radix-ui/react-toast',
//   '@radix-ui/react-toggle',
//   '@radix-ui/react-tooltip',
// ],
// 'react-vendor': ['react', 'react-dom'],
// 'tanstack-vendor': ['@tanstack/react-query', '@tanstack/router'],
