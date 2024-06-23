import { Meta, StoryFn } from '@storybook/web-components';
import { html, nothing } from 'lit-html';
import { SwcButton } from './swc-button';

export default {
  title: 'Components/Button',
  component: 'swc-button',
} as Meta;

const Basic: StoryFn<Partial<SwcButton>> = (args) => {
  return html`
    <swc-button
      label="${args.label || nothing}"
      ?disabled=${args.disabled}
      color="${args.color || 'primary'}"
      ></swc-button>
<swc-button
  outlined
  ?disabled=${args.disabled}
  label="${args.label || nothing}"
  color="${args.color || 'primary'}"
></swc-button>
<swc-button
  disabled
  label="${args.label || nothing}"
  color="${args.color || 'primary'}"
></swc-button>
  `
}

export const Primary  = Basic.bind({});
Primary.args = {
  label: 'Get simple',
  color: 'primary'
};

export const Secondary  = Basic.bind({});
Secondary.args = {
  label: 'Get simple',
  color: 'secondary'
};

export const Info  = Basic.bind({});
Info.args = {
  label: 'Get simple',
  color: 'info'
};

export const Success  = Basic.bind({});
Success.args = {
  label: 'Get simple',
  color: 'success'
};

export const Warning  = Basic.bind({});
Warning.args = {
  label: 'Get simple',
  color: 'warning'
};

export const Error  = Basic.bind({});
Error.args = {
  label: 'Get simple',
  color: 'error'
};