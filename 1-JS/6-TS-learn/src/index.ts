



console.log('-index.js-');
// Model
class Todo {
    static idx: number = 0;
    id: number;
    title: string;
    completed: boolean
    constructor(title: string) {
        Todo.idx++;
        this.id = Todo.idx;
        this.title = title;
        this.completed = false;
    }
}
// Service
class TodoService {
    todos: Array<Todo> = [];
    addTodo(title: string) {
        let newTodo = new Todo(title);
        this.todos.push(newTodo);
    }
}