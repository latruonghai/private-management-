import IconDocumentationVue from '../components/icons/IconDocumentation.vue';
import IconTodoList from '../components/icons/icon-todolist.vue'
import type { ItemListProps, NavigationProps } from './../typings/props';
export const valueArr: NavigationProps[] = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  }
]

export const listContent: ItemListProps[] = [
  {
    title: 'Introduction',
    component:IconDocumentationVue,
    content: 'This is an application for private purpose. It helps you to manage your project and improve your time',
    linkTo: ''
  },
  {
    title: 'Todo List',
    component: IconTodoList ,
    content: 'This is used for creating list of task to do in future',
    linkTo: 'about'
  }
]