import { defineConfig } from 'vitest/config';
import baseConfig from '../../vitest.config.mts';

export default defineConfig({
  ...baseConfig,
  test: {
    // passWithNoTests: true,
    // reporters: [
    //   [
    //     'html',
    //     {
    //       outputFile: 'test-results/test-report.html',
    //       // open: false,
    //     },
    //   ],
    // ],
    // projects: [
    //   {
    //     test: {
    //       name: 'unit',
    //       include: ['test/{unit}/*.{test,spec}.ts', '**/*.{test,spec}.unit.ts'],
    //       environment: 'node',
    //     },
    //   },
    //   await defineVitestProject({
    //     test: {
    //       name: 'nuxt',
    //       include: ['test/nuxt/*.{test,spec}.ts'],
    //       environment: 'nuxt',
    //     },
    //   }),
    // ],
    coverage: {
      reportsDirectory: './test/coverage',
      reporter: ['html'],
    },
  },
});
