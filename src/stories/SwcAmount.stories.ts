import { Meta, StoryFn } from '@storybook/web-components';
import '../../dist/components/swc-amount/swc-amount';
import { html } from 'lit-html';
import { SwcAmount } from '../../dist/components/swc-amount/swc-amount';

export default {
  title: 'Components/Amount',
  component: 'swc-amount',
  parameters: { actions: { argTypesRegex: '^on.*' } }
} as Meta;

const Basic: StoryFn<Partial<SwcAmount>> = (args) => {
  return html`<swc-amount></swc-amount>`;
};

export const Default = Basic.bind({});
