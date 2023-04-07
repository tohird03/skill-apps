import { makeAutoObservable } from "mobx";

class Todo {
    todos = []
    constructor(){
        makeAutoObservable(this)
    }

    addTodo(todo) {
        this.todos.push(todo)
    }

    completed(id) {
        this.todos = this.todos.map(todo => todo.id == id ? {...todo, isChecked: !todo.isChecked} : todo)
    }

    delete(id) {
        this.todos = this.todos.filter(todo => todo.id != id )
    }
}

export default new Todo()