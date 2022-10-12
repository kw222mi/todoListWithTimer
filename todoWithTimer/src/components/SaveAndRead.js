import Todo from "./Todo"

/**
 *
 */
export default class SaveAndRead {


  saveTodosToLocal (todo) {
    let todos
    if (localStorage.getItem('todos') === null) {
      todos = []
    } else {
      todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
    console.log('save and read')
    console.log(todos)
  }

  loadTodos () {
    let todos
    if (localStorage.getItem('todos') === null) {
      todos = []
    } else {
      todos = JSON.parse(localStorage.getItem('todos'))
    }

    return todos
    
    
   
  }
}
