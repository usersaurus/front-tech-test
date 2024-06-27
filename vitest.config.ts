import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Use jsdom environment
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});