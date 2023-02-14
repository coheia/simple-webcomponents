import { Story } from '@storybook/web-components';
import '../../dist/components/my-button/my-button';
import { html } from 'lit-html';

export default {
  title: 'My Button',
}

export const Basic: Story<Partial<any>> = () => {
  return html`<my-button icon="false">Basic</my-button>`
}
export const WithIcon: Story<Partial<any>> = () => {
  return html`<my-button icon="true">With icon</my-button>`
}

export const Loading: Story<Partial<any>> = () => {
  return html`
    <my-button loading="true">Buy</my-button>
  `
}
