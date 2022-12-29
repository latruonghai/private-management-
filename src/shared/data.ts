import IconDocumentationVue from '../components/icons/IconDocumentation.vue';
import iconAboutVue from '../components/icons/icon-about.vue';
import IconTodoList from '../components/icons/icon-todolist.vue'
import iconWeatherVue from '../components/icons/icon-weather.vue';
import type { ItemListProps, NavigationProps } from './../typings/props';
export const valueArr: NavigationProps[] = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Todo List',
    path: '/todo-list'
  },
  {
    name: 'Weather',
    path: '/weather'
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
    linkTo: 'todo-list'
  },
  {
    title: 'Weather',
    component: iconWeatherVue ,
    content: 'This is used for subscribing the weather in your location or something like that',
    linkTo: 'weather'
  },
  {
    title: 'About',
    component: iconAboutVue ,
    content: 'This is used for subscribing the weather in your location or something like that',
    linkTo: 'about'
  }
]