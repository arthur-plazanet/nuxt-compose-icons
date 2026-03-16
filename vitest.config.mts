import { defineVitestProject } from '@nuxt/test-utils/config';
import { defineConfig } from 'vitest/config';

export default defineConfig({
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
    projects: [
      {
        test: {
          name: 'unit',
          include: [
            'packages/**/*/test/{unit}/*.{test,spec}.ts',
            'packages/**/*.unit.{test,spec}.ts',
            'docs/**/*.{test,spec}.ts',
            'examples/**/*.{test,spec}.ts',
          ],
          environment: 'node',
        },
      },
      await defineVitestProject({
        test: {
          name: 'nuxt',
          include: [
            'packages/**/*/test/{nuxt}/*.{test,spec}.ts',
            'packages/**/*.nuxt.{test,spec}.ts',
            'docs/**/*.{test,spec}.ts',
            'examples/**/*.{test,spec}.ts',
          ],
          environment: 'nuxt',
        },
      }),
      {
        test: {
          name: 'e2e',
          include: [
            'packages/**/*/test/{e2e}/*.{test,spec}.ts',
            'packages/**/*.e2e.{test,spec}.ts',
            'docs/**/*.{test,spec}.ts',
            'examples/**/*.{test,spec}.ts',
          ],
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
