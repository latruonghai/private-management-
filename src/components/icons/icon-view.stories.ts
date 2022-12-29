import IconTodoList  from './icon-todolist.vue';
import IconWeather from './icon-weather.vue'
import IconAbout from './icon-about.vue'
import IconCommunity from './IconCommunity.vue'
import IconDocumentation from './IconDocumentation.vue'
import IconEcosystem from './IconEcosystem.vue'
import IconSupport from './IconSupport.vue'
import IconTooling from './IconTooling.vue'
import "../../assets/main.scss"
import type { Component } from 'vue';
import type {  Meta, Story } from '@storybook/vue3';
export default {
  title: 'Components/IconTodoList',
  component: IconTodoList,
} as Meta;

const Template = (args: {components: Component[]}) => ({
  components: { IconTodoList },
  setup() {
    return { args };
  },
  template: '<div class="flex"><component class="ml-2"  v-for="component in args.components" v-bind:is="component"/></div>',
});

export const TodoList: Story<{components: Component[]}> = Template.bind({});
TodoList.args = { 
  components: [
    IconTodoList,
    IconCommunity,
    IconDocumentation,
    IconEcosystem,
    IconSupport,
    IconTooling,
    IconWeather,
    IconAbout
  ]
};
