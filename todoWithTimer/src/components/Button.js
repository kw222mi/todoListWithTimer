/**
 * Class to create and handle the buttons of the todo.
 */
export default class Button {
  #todotimer
  #saveAndRead

  // Constructor take instances of Todotimer and saveAndRead to use in the class.
  constructor (todotimer, SaveAndRead) {
    this.#todotimer = todotimer
    this.#saveAndRead = SaveAndRead
  }

  createStartButton (todoDiv) {
    const startButton = document.createElement('button')
    startButton.classList.add('start-btn')
    startButton.innerText = 'start'
    todoDiv.appendChild(startButton)
  }

  createCompletedButton (todoDiv) {
    const completedButton = document.createElement('button')
    completedButton.innerText = 'completed'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)
  }

  createTrashButton (todoDiv) {
    const trashButton = document.createElement('button')
    trashButton.innerText = 'Remove'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)
  }

  //  Get the button clicked and call its handle function.
  handleButtonsEvent (event) {
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
    todo.classList.add('fall')
    todo.addEventListener('transitionend', () => {
      todo.remove()
      this.#saveAndRead.removeTodosFromLocalstorage(todo)
    })
  }

  #handleCompleteButton (todo) {
    todo.classList.toggle('completed')
  }

  // add a timer and start it.
  #handleStartButton (todo) {
    const t = todo.childNodes[1]
    const text = t.textContent
    this.#todotimer.createTimer(todo, text)
  }
}
