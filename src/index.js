import './styles.css';
import {Todo, TodoList} from './classes';
import { saludar, crearTodoHtml } from './js/componentes.js';
//import { Todo } from './classes/todo.class.js';
//import { TodoList } from './classes/todo-list.class.js';


/* Por defecto al importar classes coge index.js , espectacular, no hay que indicarlo*/ 

export const todoList = new TodoList();

console.log( todoList.todos );
todoList.todos.forEach( todo => crearTodoHtml(todo) );

/*const tarea = new Todo('aprender JS');

todoList.nuevoTodo( tarea );

console.log( todoList );

crearTodoHtml( tarea );*/

/*localStorage.setItem('mikey','abc123');
setTimeout( ()=>{
    localStorage.removeItem('mikey');
}, 1500 );*/