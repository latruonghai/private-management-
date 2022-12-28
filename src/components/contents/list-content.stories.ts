import ListContent from './list-content.vue';
import { listContent } from '../../shared/data';
import type { ItemListProps } from '../../typings/props';
import type { Meta, Story } from '@storybook/vue3';
export default {
  title: 'Components/ListContent',
  component: ListContent,
} as Meta;

const Template = (args: { listItem: ItemListProps[] }) => ({
  components: { ListContent },
  setup() {
    return { args };
  },
  template: '<ListContent :listItem="args.listItem"/>',
});

export const Primary: Story<{ listItem: ItemListProps[] }> = Template.bind({});
Primary.args = {
  listItem: listContent,
};

export const Secondary: any = Template.bind({});
Secondary.args = {};
