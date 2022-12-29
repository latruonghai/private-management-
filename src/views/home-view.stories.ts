import HomeView  from './HomeView.vue';
import type { Meta, Story } from '@storybook/vue3';
export default {
  title: 'Views/HomeView',
  component: HomeView,
} as Meta;

const Template = (args: any) => ({
  components: { HomeView },
  setup() {
    return { args };
  },
  template: '<HomeView v-bind="args"/>',
});

export const Primary: Story = Template.bind({});
Primary.args = {  };

export const Secondary: Story = Template.bind({});
Secondary.args = {  };