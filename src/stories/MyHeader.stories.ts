import { Story } from '@storybook/web-components';
import '../../dist/components/my-header/my-header';
import { html } from 'lit-html';

export default {
  title: 'My Header',
}

export const Basic: Story<Partial<any>> = () => {
  return html`<my-header icon="false">Basic</my-header>`
}
export const WithIcon: Story<Partial<any>> = () => {
  return html`<my-header icon="true">With icon</my-header>`
}

export const Loading: Story<Partial<any>> = () => {
  return html`
<my-header>
  <my-button loading="true">Buy</my-button>
</my-header>
  `
}
