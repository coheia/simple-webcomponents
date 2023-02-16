import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../custom-elements.json';

setCustomElementsManifest(customElements);

export const parameters = {
  backgrounds: {
    default: 'light',
  },
  options: {
    storySort: {
      order: ['General', 'Components', 'Guides'],
    }
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}