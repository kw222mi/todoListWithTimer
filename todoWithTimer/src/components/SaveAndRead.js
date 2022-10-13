

/**
 *
 */
export default class SaveAndRead {

  saveTodosToLocal(todo) {
    const todos = this.loadTodos()
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
    console.log('save and read')
    console.log(todos)
  }

  removeTodosFromLocalstorage(todo) {
    const todos = this.loadTodos()
    const todoIndex = todo.children[0].innerText
    const index = todos.map(todo => todo.task).indexOf(todoIndex)
    if (index > -1) { // only splice array when item is found
      todos.splice(index, 1) // 2nd parameter means remove one item only
    }
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  loadTodos() {
    let todos
    if (localStorage.getItem('todos') === null) {
      todos = []
    } else {
      todos = JSON.parse(localStorage.getItem('todos'))
    }
    return todos
  }
}
