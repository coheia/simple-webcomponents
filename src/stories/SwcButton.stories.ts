import { Story } from '@storybook/web-components';
import '../../dist/components/swc-button/swc-button';
import { html } from 'lit-html';

export default {
  title: 'Button',
  component: 'swc-button',
  argTypes: {},
}

const Basic: Story<Partial<any>> = (args) => {
  return html`<swc-button>${args.label}</swc-button>`
}

export const Controls = Basic.bind({});
Controls.args = {
  label: 'Inscreva-se',
};
