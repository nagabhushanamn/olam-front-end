



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

    }
    completeTodo(id) {

    }
    completeAll() {

    }
    clearCompeleted() {

    }
    deleteTodo(id) {

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


