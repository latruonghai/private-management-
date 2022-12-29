import type { Component } from 'vue';

declare type Lazy<T> = () => Promise<T>;
interface NavigationProps {
  name: string;
  path: string;
}

interface ItemListProps {
  title: string;
  content: string;
  component: Component | Lazy<Component>;
  linkTo: string;
}

interface ButtonProps {
  extraClassName: string;
  onClickHandler: Function;
  contentButton: string;
  titleString: string;
  isDisable: boolean;
}

interface InputProps {
  extraClassName: string;
  typeName: string;
  placeholder: string;
  onChanges: Function;
  idName: string;
}
interface TaskItem {
  todoWorks: string;
  numOfWorks?: number;
  done?: boolean;
  dayCreated?: string;
  dayComplete?: string;
  order?: number;
  timeStamp?: number;
}
export type { TaskItem, InputProps, ButtonProps, ItemListProps, NavigationProps };
