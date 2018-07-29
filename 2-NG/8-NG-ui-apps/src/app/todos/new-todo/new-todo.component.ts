import {TodosService} from '../todos.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  constructor(private todosService: TodosService) {}

  ngOnInit() {
  }

  addNewTodo($event) {
    let key = $event.which;
    let title = $event.target.value;
    if (key !== 13 || !title) return;
    this.todosService.addTodo(title);
    $event.target.value="";
  }

}
