import ItemTask  from './item-task.vue';

export default {
 title: 'Components/ItemTask',
 component: ItemTask,
};

const Template = (args) => ({
 components: { ItemTask },
 setup() {
  return { args };
 },
 template: ` <ItemTask
 :idName="\`cart-${item.order}\`"
 :itemContent="item"
 :done="item.done"
 :order="item.order"
/>`,
});

export const Primary = Template.bind({});
Primary.args = {  };

export const Secondary = Template.bind({});
Secondary.args = {  };