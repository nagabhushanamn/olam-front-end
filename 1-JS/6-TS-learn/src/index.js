console.log('-index.js-');
// Model
class Todo {
    constructor(title) {
        Todo.idx++;
        this.id = Todo.idx;
        this.title = title;
        this.completed = false;
    }
}
Todo.idx = 0;
// Service
class TodoService {
    constructor() {
        this.todos = [];
    }
    addTodo(title) {
        let newTodo = new Todo(title);
        this.todos.push(newTodo);
    }
}
