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
    this.#todoTimeInMinutes = this.#timeInput.value
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

    //  fixa remove from local
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
    this.#timeP = document.createElement('p')
    this.#timeP.classList.add('todo')
    this.#timeP.innerText = this.#todoTimeInMinutes
    this.#todoDiv.appendChild(this.#timeP)
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

  #createTimer(todo, text) {

    this.#timerDiv = document.createElement('div')
    this.#timerDiv.setAttribute('id', 'timerDiv')
    todo.appendChild(this.#timerDiv)
    console.log(text)
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
    this.#todoTimeInMinutes = todo.time / 60
    this.#load()
  }

  /**
   *
   */
  #deleteTodo(event) {
    const item = event.target
    if (item.classList[0] === 'trash-btn') {
      const todo = item.parentElement
      console.log(' todo' + todo)
      todo.classList.add('fall')
      todo.addEventListener('transitionend', (e) => {
        todo.remove()
        const save = new SaveAndRead()
        save.removeLocalTodos(todo)
      })
    }
    if (item.classList[0] === 'start-btn') {
      const todo = item.parentElement
      const t = todo.childNodes[1]
      const text = t.textContent
      this.#createTimer(todo, text)
    }
  }
}
