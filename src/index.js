import { saludar, crearTodoHtml } from './js/componentes.js';
//import { Todo } from './classes/todo.class.js';
//import { TodoList } from './classes/todo-list.class.js';
import './styles.css';
import {Todo, TodoList} from './classes';
/* Por defecto al importar classes coge index.js , espectacular, no hay que indicarlo*/ 

export const todoList = new TodoList();

const tarea = new Todo('aprender JS');

todoList.nuevoTodo( tarea );

console.log( todoList );

crearTodoHtml( tarea );