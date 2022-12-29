import type { InputProps } from './../../typings/props';
import CommonInput from './common-input.vue';
import type { Meta, Story } from '@storybook/vue3';

export default {
  title: 'Components/CommonInput',
  component: CommonInput
} as Meta;

const Template = ({ extraClassName, idName, placeholder, onChanges, typeName }: InputProps) => ({
  components: { CommonInput },
  setup() {
    return { extraClassName, idName, placeholder, onChanges, typeName };
  },
  template: `<CommonInput
 :idName="idName"
 :extraClassName="extraClassName"
 :placeholder="placeholder"
 :onChange="onChanges"
 :typeName="typeName"
/>`
});

export const Primary: Story<InputProps> = Template.bind({});
Primary.args = {
  idName: 'input-example',
  extraClassName: '',
  placeholder: 'example test',
  typeName: 'text',
  onChanges: (event: any) => {
    console.log(typeof event);
    console.log('🚀 ~ file: common-input.stories.ts:32 ~ event', event);
  }
};

