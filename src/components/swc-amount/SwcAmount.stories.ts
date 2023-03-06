import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit-html';
import { SwcAmount } from './swc-amount';

export default {
  title: 'Components/Amount',
  component: 'swc-amount',
  parameters: { actions: { argTypesRegex: '^on.*' } }
} as Meta;

const Basic: StoryFn<Partial<SwcAmount>> = (args) => {
  return html`
    <swc-amount
      ?disabled=${args.disabled}
      ?outlined=${args.outlined}
      color="${args.color || 'primary'}"></swc-amount>`;
};

export const Primary = Basic.bind({});

export const Secondary = Basic.bind({});
Secondary.args = {
  color: 'secondary'
}
export const Disabled = Basic.bind({});
Disabled.args = {
  disabled: true
};
