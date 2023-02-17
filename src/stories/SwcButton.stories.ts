import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit-html';
import { SwcButton } from '../../dist/components/swc-button/swc-button';

export default {
  title: 'Components/Button',
  component: 'swc-button',
} as Meta;

const Basic: StoryFn<Partial<SwcButton & { label: string }>> = (args) => {
  return html`<swc-button ?loading=${args.loading} color="${args.color}" ?icon=${args.icon}>${args.label}</swc-button>`
}

export const Default = Basic.bind({});
Default.args = {
  label: 'Default button',
  color: 'black'
};

export const Primary  = Basic.bind({});
Primary.args = {
  label: 'Primary button',
  color: 'blue'
};

export const Outlined  = Basic.bind({});
Outlined.args = {
  label: 'Outlined button',
  color: 'transparent'
};