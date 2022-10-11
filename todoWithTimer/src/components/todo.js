
/**
 *
 */
export default class Todo {
  #todoDiv
  #newTodo

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
    // this.#todoList.addEventListener("click", this.#deleteTodo)
  }

  /**
   *
   * @param e
   */
  #doTodo (event) {
    event.preventDefault()
    console.log('dotodo')
    this.#createTodoDiv()
    this.#createTodoList(event)
    this.#addTodo()
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

  /**
   *
   */
  #createStartButton () {
    const completedButton = document.createElement('button')
    completedButton.classList.add('start-btn')
    this.#todoDiv.appendChild(completedButton)
  }

  /**
   *
   */
  #createTrashButton () {
    const trashButton = document.createElement('button')
    trashButton.classList.add('trash-btn')
    this.#todoDiv.appendChild(trashButton)
  }
}
