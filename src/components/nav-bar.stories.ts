import type { Meta, Story } from '@storybook/vue3';
import NavigationBar from './navigation-bar.vue';
import { valueArr } from '../shared/data';
import type { NavigationProps } from '../typings/props';
import vueRouter from 'storybook-vue3-router'


interface ArgType {
  valueArr: NavigationProps[];
}
export default {
  title: 'Components/NavigationBar',
  component: NavigationBar,
} as Meta;

const Template = (args: ArgType) => ({
  components: { NavigationBar },
  setup() {
    return { args };
  },
  template: '<NavigationBar :valueArr="args.valueArr"/>',
});

export const Primary: Story<ArgType> = Template.bind({});
Primary.args = {
  valueArr: valueArr
};

Primary.decorators = [
  vueRouter()
]