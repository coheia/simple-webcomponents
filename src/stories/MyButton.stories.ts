import { Story } from '@storybook/web-components';
import '../../dist/components/my-button/my-button';
import { html } from 'lit-html';

export default {
  title: 'My Button',
  component: 'my-button',
  argTypes: {
    icon: {
      options: ['true', 'false'],
      control: { type: 'radio' },
    },
    loading: {
      options: ['true', 'false'],
      control: { type: 'radio' },
    },
  },
}

const Basic: Story<Partial<any>> = (args) => {
  return html`<my-button loading="${args.loading}" icon="${args.icon}">${args.label}</my-button>`
}

export const Controls = Basic.bind({});
Controls.args = {
  label: 'Basic button',
  icon: 'true',
  loading: 'false',
};
