import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '5f5ria',
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
