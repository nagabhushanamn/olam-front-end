



/*
    //  e.g todos application

    todo ==> {id,title,completed}

*/

//--------------------------------------------------------
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

//--------------------------------------------------------

// Service

class TodoService {
    constructor() {
        this.todos = [];
    }
    addTodo(title) {
        let newTodo = new Todo(title);
        this.todos.push(newTodo);
    }
    editTodo(id, newTitle) {
        let todo = this.todos.find(function (item) {
            return (item.id === id) ? true : false
        });
        if (todo)
            todo.title = newTitle
    }
    completeTodo(id) {
        let todo = this.todos.find(function (item) {
            return (item.id === id) ? true : false
        });
        todo.completed = !todo.completed;
    }
    completeAll() {

        let isAllCompleted = this.todos.every(function (item) {
            return item.completed;
        });
        this.todos.forEach(function (item) {
            item.completed = !isAllCompleted;
        });
    }
    deleteTodo(id) {
        // mutable way
        let idx = this.todos.findIndex(function (item) {
            return (item.id === id) ? true : false
        });
        this.todos.splice(idx, 1);
    }
    clearCompeleted() {
        // immutable way
        this.todos = this.todos.filter(function (item) { return !item.completed });
    }
    viewTodos(filter) {
        // filter ==> ALL, ACTIVE , COMPLETED
        this.todos.forEach(function (item) {
            console.log(item);
        });
    }
}

//------------------------------------------------------


class TodoService_v2 {
    constructor() {
        this.todos = [];
    }
    addTodo(title) {
        this.todos = [...this.todos, new Todo(title)];
    }
    editTodo(id, newTitle) {
        this.todos = this.todos.map(todo => todo.id === id ? Object.assign({}, todo, { title: newTitle }) : todo)
    }
    completeTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? Object.assign({}, todo, { completed: !todo.completed }) : todo)
    }
    completeAll() {
        let isAllCompleted = this.todos.every((todo) => todo.completed);
        this.todos = this.todos.map(todo => Object.assign({}, todo, { completed: !isAllCompleted }));
    }
    deleteTodo(id) {
        let idx = this.todos.filter((todo) => todo.id !== id)
    }
    clearCompeleted() {
        this.todos = this.todos.filter((item) => !item.completed);
    }
    viewTodos(filter) {
        // filter ==> ALL, ACTIVE , COMPLETED
        this.todos.forEach((item) => console.log(item));
    }
}


//--------------------------------------------------------

const service = new TodoService();

//--------------------------------------------------------


