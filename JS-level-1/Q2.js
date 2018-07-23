



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


//--------------------------------------------------------

const service = new TodoService();

//--------------------------------------------------------


