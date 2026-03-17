import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: [
      {
        resolve: {
          alias: {
            '#compose-icons/registry': fileURLToPath(
              new URL('./test/mocks/icon-registry.mock.ts', import.meta.url),
            ),
          },
        },
        test: {
          name: 'unit',
          include: ['src/**/*.unit.spec.ts', 'test/unit/**/*.{test,spec}.ts'],
          environment: 'node',
        },
      },
      {
        test: {
          name: 'e2e',
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
