import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      reporter: ['text', 'json-summary', 'json'],
      reportOnFailure: true,
      exclude: [
        '**/dist/**',
        '**/vitest.setup.ts',
        '**/*.d.ts',
        '**/.next/**',
        '**/public/**',
        '**/i18n/**',
        '**/*.config.*',
      ],
    },
  },
});