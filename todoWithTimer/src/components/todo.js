import './SaveAndRead.js'

/**
 * Create a todo component with buttons for start, completed and remove.
 */
export default class Todo {
  #todoDiv
  #timeP
  #todoTimeInSeconds
  #todoTimeInMinutes
  #todoTask
  #saveAndRead
  #button

  #todoInput = document.querySelector('.todo-input')
  #timeInput = document.querySelector('.time-input')
  #addTodoButton = document.querySelector('.todo-button')
  #todoList = document.querySelector('.todo-list')

  // Constructor take instances of classes saveAndRead and button for use in the class.
  constructor (saveAndRead, button) {
    this.#saveAndRead = saveAndRead
    this.#button = button
    this.#setEventListeners()
    this.#getSavedTodos()
  }

  // add eventlisteners for the input and the buttons in the todo.
  #setEventListeners () {
    this.#addTodoButton.addEventListener('click', (event) => { this.#createNewTodoAndSaveIt(event) })
    this.#todoList.addEventListener('click', (event) => this.#button.handleButtonsEvent(event))
  }

  //get todos from localstorage
  #getSavedTodos () {
    const todos = this.#saveAndRead.loadTodos()
    for (let i = 0; i < todos.length; i++) {
      this.#loadTodos(todos[i])
    }
  }

  // set the variables and recreate the stored todos.
  #loadTodos (todo) {
    this.#todoTask = todo.task
    this.#todoTimeInSeconds = todo.time
    this.#todoTimeInMinutes = todo.time / 60
    this.#createTodoComponent()
  }

  // create new todo from input
  #createNewTodoAndSaveIt (event) {
    event.preventDefault()
    this.#todoTask = this.#todoInput.value
    this.#todoTimeInSeconds = this.#minToSec(this.#timeInput.value)
    this.#todoTimeInMinutes = this.#timeInput.value
    this.#createTodoComponent()
    this.#saveTodo()
  }

  #minToSec (inputTime) {
    return inputTime * 60
  }

  #saveTodo () {
    const todoToSave = {
      task: this.#todoTask,
      time: this.#todoTimeInSeconds
    }
    this.#saveAndRead.saveTodosToLocal(todoToSave)
  }

  #createTodoComponent () {
    this.#createHtmlElements()
    this.#button.createStartButton(this.#todoDiv)
    this.#button.createCompletedButton(this.#todoDiv)
    this.#button.createTrashButton(this.#todoDiv)
    this.#todoList.appendChild(this.#todoDiv)
  }

  #createHtmlElements () {
    this.#createTodoDiv()
    this.#createTodoList()
    this.#createTimeParagraph()
  }

  #createTodoDiv () {
    this.#todoDiv = document.createElement('div')
    this.#todoDiv.classList.add('todo')
  }

  #createTodoList () {
    const newTodo = document.createElement('li')
    newTodo.innerText = this.#todoTask
    this.#addNewTodo(newTodo)
  }

  #addNewTodo (newTodo) {
    newTodo.classList.add('todo-item')
    this.#todoDiv.appendChild(newTodo)
    this.#todoInput.value = ''
  }

  #createTimeParagraph () {
    this.#timeP = document.createElement('p')
    this.#timeP.classList.add('todo')
    this.#timeP.innerText = this.#todoTimeInMinutes
    this.#todoDiv.appendChild(this.#timeP)
    this.#timeInput.value = ''
  }
}
