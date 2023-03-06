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
      ?outlined="${args.outlined}"
    ></swc-button>`
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

export const Error  = Basic.bind({});
Error.args = {
  label: 'Get simple',
  color: 'error'
};

export const Warning  = Basic.bind({});
Warning.args = {
  label: 'Get simple',
  color: 'warning'
};

export const Disabled = Basic.bind({});
Disabled.args = {
  label: 'Get simple',
  disabled: true,
};

export const OutlinedPrimary  = Basic.bind({});
OutlinedPrimary.args = {
  label: 'Get simple',
  outlined: true
};

export const OutlinedSecondary  = Basic.bind({});
OutlinedSecondary.args = {
  label: 'Get simple',
  color: 'secondary',
  outlined: true
};

export const OutlinedSuccess  = Basic.bind({});
OutlinedSuccess.args = {
  label: 'Get simple',
  color: 'success',
  outlined: true
};

export const OutlinedError  = Basic.bind({});
OutlinedError.args = {
  label: 'Get simple',
  color: 'error',
  outlined: true
};

export const OutlinedWarning  = Basic.bind({});
OutlinedWarning.args = {
  label: 'Get simple',
  color: 'warning',
  outlined: true
};

export const OutlinedInfo  = Basic.bind({});
OutlinedInfo.args = {
  label: 'Get simple',
  color: 'info',
  outlined: true
};