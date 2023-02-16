import type { StorybookConfig } from '@storybook/web-components-vite';
import { mergeConfig } from 'vite';
const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  "framework": {
    "name": "@storybook/web-components-vite",
    "options": {}
  },
  "docs": {
    "defaultName": 'Docs',
    "autodocs": true,
  },
  async viteFinal(config) {
   // Merge custom configuration into the default config
   return mergeConfig(config, {
     // Add storybook-specific dependencies to pre-optimization
     optimizeDeps: {
       include: ['storybook-addon-designs'],
     },

   });
 },
};
export default config;