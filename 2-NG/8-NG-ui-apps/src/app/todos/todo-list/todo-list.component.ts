import { Todo } from '../todo';
import { TodosService } from '../todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos:Array<Todo>=[];
  constructor(private todosService:TodosService) { }

  ngOnInit() {
    this.todos=this.todosService.getTodos('all');
  }
  
  completeTodo(id){
    this.todosService.completeTodo(id)
  }
   deleteTodo(id){
    this.todosService.deleteTodo(id)
    this.todos=this.todosService.getTodos('all'); 
  }

}
