import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: 'showcase:e2e',
          include: ['test/e2e/**/*.e2e.{test,spec}.ts'],
          environment: 'node',
        },
      },
    ],
    coverage: {
      reportsDirectory: './test/coverage',
      reporter: ['html'],
    },
  },
});
