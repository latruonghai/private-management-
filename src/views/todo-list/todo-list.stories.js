import TodoList  from './todo-list.vue';

export default {
 title: 'Views/TodoList',
 component: TodoList,
};

const Template = (args) => ({
 components: { TodoList},
 setup() {
  return { args };
 },
 template: '<TodoList v-bind="args"/>',
});

export const Primary = Template.bind({});
Primary.args = {  };

export const Secondary = Template.bind({});
Secondary.args = {  };