import { StoryFn } from '@storybook/web-components';
import '../../dist/components/my-button/my-button';
import { html } from 'lit-html';

const Basic: StoryFn<Partial<any>> = (args) => {
  console.log("===> args:", args)
  return html`<my-button loading="${args.loading.toString()}" icon="${args.icon.toString()}">${args.label}</my-button>`
}

export default {
  title: 'My Button',
  component: 'my-button',
}

export const Controls = Basic.bind({});
Controls.args = {
  label: 'Basic button',
  icon: 'true',
  loading: 'false',
};