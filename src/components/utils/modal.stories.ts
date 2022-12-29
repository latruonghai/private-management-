import Modal from './modal.vue';
import type { Meta, Story } from '@storybook/vue3';
export default {
  title: 'Components/Modal',
  component: Modal
} as Meta;

const Template = (args) => ({
  components: { Modal },
  setup() {
    return { args };
  },
  template: '<Modal><Modal/>'
});

export const Primary: Story<any> = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};
