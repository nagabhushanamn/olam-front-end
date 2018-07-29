import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodosHomeComponent} from './todos-home/todos-home.component';
import {NewTodoComponent} from './new-todo/new-todo.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodosService} from './todos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TodosHomeComponent,
    NewTodoComponent,
    TodoListComponent],
  exports: [TodosHomeComponent],
  providers: [TodosService]
})
export class TodosModule {}
