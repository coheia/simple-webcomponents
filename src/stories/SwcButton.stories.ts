import { StoryFn } from '@storybook/web-components';
import '../../dist/components/swc-button/swc-button';
import { html } from 'lit-html';
import { SwcButton } from '@coheia/simple-webcomponents/swc-button/swc-button';

export default {
  title: 'Button',
  component: 'swc-button',
}

const Basic: StoryFn<Partial<SwcButton & { label: string }>> = (args) => {
  console.log("===> args:", args)
  return html`<swc-button ?loading="${args.loading}" color="${args.color}" ?icon="${args.icon}">${args.label}</swc-button>`
}

export const Controls = Basic.bind({});
Controls.args = {
  label: 'Basic button',
};