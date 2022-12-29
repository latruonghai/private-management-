import type { ButtonProps } from './../../typings/props';
import type { Meta, Story } from '@storybook/vue3';
import Button  from './button.vue';

export default {
 title: 'Components/Button',
 component: Button,
} as Meta;

const Template = ({extraClassName, contentButton, onClickHandler, titleString, isDisable}: ButtonProps) => ({
 components: { 'app-button': Button },
 setup() {
  return { extraClassName, contentButton,onClickHandler,titleString, isDisable };
 },
 template: `<app-button
 :contentButton="contentButton"
 :extraClassName="extraClassName"
 :onClickHandler="onClickHandler"
 :titleString="titleString"
 :isDisable="isDisable"
></app-button>`,
});

export const Primary: Story<ButtonProps> = Template.bind({});
Primary.args = { 
 contentButton: 'Add Todo List',
 extraClassName: 'add',
 onClickHandler: () => {
  alert('Button Clicked')
 },
 titleString: 'Button for adding todo list',
 isDisable: false
 };

// export const Secondary = Template.bind({});
// Secondary.args = {  };