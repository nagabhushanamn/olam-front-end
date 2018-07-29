export class Todo {
  static idx: number = 0;
  id: number;
  title: string;
  completed: boolean;
  constructor(title: string) {
    Todo.idx++;
    this.id = Todo.idx;
    this.title = title;
    this.completed = false;
  }
}
