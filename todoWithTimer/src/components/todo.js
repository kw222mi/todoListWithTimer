
/**
 *
 */
export default class Todo {
  #todoDiv
  #newTodo
  #timeDiv

  #todoInput = document.querySelector('.todo-input')
  #todoButton = document.querySelector('.todo-button')
  #todoList = document.querySelector('.todo-list')
  
  /**
   *
   */
  constructor () {
   this.#setEventListeners()
  }
  
  /**
   *
   */
  #setEventListeners () {
    this.#todoButton.addEventListener('click', (event) => { this.#doTodo(event) })
    this.#todoInput.addEventListener('keydown', (event) => console.log(event.target.value))
    this.#todoList.addEventListener('click', (event) => this.#deleteTodo(event))
  }

  /**
   *
   * @param event
   */
  #doTodo (event) {
    event.preventDefault()
    console.log('dotodo')
    this.#createTodoDiv()
    this.#createTodoList(event)
    this.#addTodo()
    this.#createTimeDiv()
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
  #createTodoList (event) {
    this.#newTodo = document.createElement('li')
    this.#newTodo.innerText = this.#todoInput.value
  }

  /**
   *
   */
  #addTodo () {
    this.#newTodo.classList.add('todo-item')
    this.#todoDiv.appendChild(this.#newTodo)
    this.#todoInput.value = ''
  }

  #createTimeDiv () {
    this.#timeDiv = document.createElement('p')
    this.#timeDiv.classList.add('todo')
    this.#timeDiv.innerText = 'tid'    // this.#todoInput.value
    this.#todoDiv.appendChild(this.#timeDiv)
  }

  /**
   *
   */
  #createStartButton () {
    const startButton = document.createElement('button')
    startButton.classList.add('start-btn')
    this.#todoDiv.appendChild(startButton)
  }

  /**
   *
   */
  #createTrashButton () {
    const trashButton = document.createElement('button')
    trashButton.classList.add('trash-btn')
    this.#todoDiv.appendChild(trashButton)
  }

  /**
   *
   */
  #deleteTodo (event) {
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
    }
  }
}
