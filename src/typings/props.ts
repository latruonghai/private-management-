import type { Component } from "vue";

declare type Lazy<T> = () => Promise<T>;
export interface NavigationProps {
  name: string;
  path: string;
}

export interface ItemListProps {
  title: string;
  content: string;
  component: Component | Lazy<Component>
  linkTo: string;
}