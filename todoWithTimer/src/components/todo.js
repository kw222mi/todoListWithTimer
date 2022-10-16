import Timer from '/src/components/Timer.js'
import SaveAndRead from '/src/components/SaveAndRead.js'

/**
 *
 */
export default class Todo {
  #todoDiv
  #timeP
  #timerDiv
  #todoTimeInSeconds
  #todoTimeInMinutes
  #todoTask

  #todoInput = document.querySelector('.todo-input')
  #timeInput = document.querySelector('.time-input')
  #todoButton = document.querySelector('.todo-button')
  #todoList = document.querySelector('.todo-list')

  /**
   * 
   */
  constructor() {
    this.#loadSavedTodos()
    this.#setEventListeners()
  }

  #loadSavedTodos () {
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
    this.#todoButton.addEventListener('click', (event) => { this.#createTodoAndSaveIt(event) })
    this.#todoList.addEventListener('click', (event) => this.#handleButtons(event))
  }

  /**
   *
   * @param event
   */
  #createTodoAndSaveIt(event) {
    event.preventDefault()

    this.#todoTask = this.#todoInput.value
    this.#todoTimeInSeconds = this.#minToSec(this.#timeInput.value)
    this.#todoTimeInMinutes = this.#timeInput.value
    this.#createTodoComponent()
    this.#saveTodo()
  }

  #createTodoComponent() {
    this.#createHtmlElements()
    this.#createStartButton()
    this.#createCompletedButton()
    this.#createTrashButton()
    this.#todoList.appendChild(this.#todoDiv)
  }

  #createHtmlElements() {
    this.#createTodoDiv()
    this.#createTodoList()
    this.#createTimeParagraf()
  }

  /**
   *
   */
  #createTodoDiv() {
    this.#todoDiv = document.createElement('div')
    this.#todoDiv.classList.add('todo')
  }

  /**
   *
   */
  #createTodoList() {
    const newTodo = document.createElement('li')
    newTodo.innerText = this.#todoTask
    this.#addNewTodo(newTodo)
  }

  /**
   *
   */
  #addNewTodo(newTodo) {
    newTodo.classList.add('todo-item')
    this.#todoDiv.appendChild(newTodo)
    this.#todoInput.value = ''
  }

  #createTimeParagraf() {
    this.#timeP = document.createElement('p')
    this.#timeP.classList.add('todo')
    this.#timeP.innerText = this.#todoTimeInMinutes
    this.#todoDiv.appendChild(this.#timeP)
    this.#timeInput.value = ''
  }

  /**
   *
   */
  #createStartButton () {
    const startButton = document.createElement('button')
    startButton.classList.add('start-btn')
    startButton.innerText = 'start'
    this.#todoDiv.appendChild(startButton)
  }

  #createCompletedButton () {
    const completedButton = document.createElement('button')
    completedButton.innerText = 'completed'
    completedButton.classList.add('complete-btn')
    this.#todoDiv.appendChild(completedButton)
  }

  /**
   *
   */
  #createTrashButton() {
    const trashButton = document.createElement('button')
    trashButton.innerText = 'Remove'
    trashButton.classList.add('trash-btn')
    this.#todoDiv.appendChild(trashButton)
  }

  #createTimer(todo, text) {
    this.#timerDiv = document.createElement('div')
    this.#timerDiv.setAttribute('id', 'timerDiv')
    todo.appendChild(this.#timerDiv)
    const tInt = parseInt(text)
    const tid = this.#minToSec(tInt)

    const timer = new Timer({
      displayElement: this.#timerDiv,
      timerTime: tid,
      showProgressBar: true,
      pauseOnHover: true,
      timeIsUpAction: 'alertAndRemove',
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
  #saveTodo() {
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
    this.#todoTimeInMinutes = todo.time / 60
    this.#createTodoComponent()
  }

  /**
   *
   */
  #handleButtons(event) {
    const item = event.target
    const todo = item.parentElement

    if (item.classList[0] === 'trash-btn') {
      this.#handleTrashButton(todo)
    }
    if (item.classList[0] === 'complete-btn') {
      this.#handleCompleteButton(todo)
    }
    if (item.classList[0] === 'start-btn') {
      this.#handleStartButton(todo)
    }
  }

  #handleTrashButton (todo) {
   // const todo = item.parentElement
      todo.classList.add('fall')
      todo.addEventListener('transitionend', () => {
        todo.remove()
        const save = new SaveAndRead()
        save.removeTodosFromLocalstorage(todo)
      })
  }

  #handleCompleteButton (todo) {
    todo.classList.toggle('completed')
  }

  #handleStartButton (todo) {
    const t = todo.childNodes[1]
      const text = t.textContent
      this.#createTimer(todo, text)
  }
  
}
