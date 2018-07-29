import {Todo} from './todo';
import {Injectable} from '@angular/core';

@Injectable()
export class TodosService {

  todos: Array<Todo> = [];

  constructor() {}

  addTodo(title) {
    let newTodo = new Todo(title);
    this.todos.push(newTodo);
    console.log(this.todos);
  }
  completeTodo(id){
    this.todos=this.todos.map(todo=>todo.id===id?Object.assign(todo,{completed:!todo.completed}):todo);
    console.dir(this.todos);
  }
  deleteTodo(id){
    this.todos=this.todos.filter(todo=>todo.id!==id);
    console.dir(this.todos);
  }
  getTodos(filter) {
    return this.todos;
  }



}
