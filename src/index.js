import { saludar } from './js/componentes.js';
//import { Todo } from './classes/todo.class.js';
//import { TodoList } from './classes/todo-list.class.js';
import './styles.css';
import {Todo, TodoList} from './classes';
/* Por defecto al importar classes coge index.js , espectacular, no hay que indicarlo*/ 

const todoList = new TodoList();
const tarea = new Todo('aprender JS');
const tarea2 = new Todo('aprender JS 2');


todoList.nuevoTodo( tarea );
todoList.nuevoTodo( tarea2 );
console.log(todoList);