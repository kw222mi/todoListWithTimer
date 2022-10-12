import Timer from '/src/components/Timer.js'
import SaveAndRead from '/src/components/SaveAndRead.js'

/**
 *
 */
export default class Todo {
  #todoDiv
  #timeDiv
  #timerDiv
  #todoTimeInSeconds
  #todoTask

  #todoInput = document.querySelector('.todo-input')
  #timeInput = document.querySelector('.time-input')
  #todoButton = document.querySelector('.todo-button')
  #todoList = document.querySelector('.todo-list')

  /**
   *
   */
  constructor () {
    this.#setEventListeners()
    const load = new SaveAndRead()
    const todos = load.loadTodos()
    for (let i = 0; i < todos.length; i++) {
      this.#loadTodos(todos[i])
    }
  }

  /**
   *
   */
  #setEventListeners() {
    this.#todoButton.addEventListener('click', (event) => { this.#getInputAndCreate(event) })
    this.#todoInput.addEventListener('keydown', (event) => console.log(event.target.value))
    this.#todoList.addEventListener('click', (event) => this.#deleteTodo(event))
  }

  /**
   *
   * @param event
   */
  #getInputAndCreate (event) {
    event.preventDefault()

    this.#todoTask = this.#todoInput.value
    this.#todoTimeInSeconds = this.#minToSec(this.#timeInput.value)
    this.#doTodo()
  }

  #doTodo () {
    this.#createTodoDiv()
    this.#createTodoList(event)
    //this.#addTodo()
    this.#createTimeDiv(event)
    this.#createStartButton()
    this.#createTrashButton()
    this.#todoList.appendChild(this.#todoDiv)
    this.#saveTodo()
  }

  #load() {
    this.#createTodoDiv()
    this.#createTodoList(event)
    //this.#addTodo()
    this.#createTimeDiv(event)
    this.#createStartButton()
    this.#createTrashButton()
    this.#todoList.appendChild(this.#todoDiv)
  }

  /**
   *
   */
  #createTodoDiv () {
    this.#todoDiv = document.createElement('div')
    this.#todoDiv.classList.add('todo')
  }

  /**
   *
   */
  #createTodoList() {
    const newTodo = document.createElement('li')
    newTodo.innerText = this.#todoTask
    this.#addTodo(newTodo)
  }

  /**
   *
   */
  #addTodo(newTodo) {
    newTodo.classList.add('todo-item')
    this.#todoDiv.appendChild(newTodo)
    this.#todoInput.value = ''
  }

  #createTimeDiv(event) {
    this.#timeDiv = document.createElement('p')
    this.#timeDiv.classList.add('todo')
    this.#timeDiv.innerText = this.#timeInput.value
    this.#todoDiv.appendChild(this.#timeDiv)
    this.#timeInput.value = ''
  }

  /**
   *
   */
  #createStartButton() {
    const startButton = document.createElement('button')
    startButton.classList.add('start-btn')
    startButton.innerText = 'start'
    this.#todoDiv.appendChild(startButton)
  }

  /**
   *
   */
  #createTrashButton() {
    const trashButton = document.createElement('button')
    trashButton.innerText = 'Ta bort'
    trashButton.classList.add('trash-btn')
    this.#todoDiv.appendChild(trashButton)
  }

  #startTodo(todo) {

    this.#timerDiv = document.createElement('div')
    this.#timerDiv.setAttribute('id', 'timerDiv')
    todo.appendChild(this.#timerDiv)

    let timer = new Timer({
      displayElement: this.#timerDiv,
      timerTime: this.#todoTimeInSeconds,
      showProgressBar: true,
      pauseOnHover: true,
      timeIsUpAction: 'color',
      tenSecondsLeftWarning: true
    })
  }

  /**
   *
   */
  #minToSec(inputTime) {
    return inputTime * 60
  }

  /**
   *
   */
  #saveTodo () {
    const todoToSave = {
      task: this.#todoTask,
      time: this.#todoTimeInSeconds
    }
    const save = new SaveAndRead()
    save.saveTodosToLocal(todoToSave)
  }

  #loadTodos(todo) {

    this.#todoTask = todo.task
    this.#todoTimeInSeconds = todo.time
    this.#load()
  }

  /**
   *
   */
  #deleteTodo(event) {
    const item = event.target
    if (item.classList[0] === 'trash-btn') {
      const todo = item.parentElement
      todo.classList.add('fall')
      todo.addEventListener('transitionend', (e) => {
        todo.remove()
      })
    }
    if (item.classList[0] === 'start-btn') {
      const todo = item.parentElement
      console.log(todo)
      this.#startTodo(todo)
    }
  }
}
