import Timer from './Timer.js'

/**
 * Creates a timer from the Timer-class and add it to the todo.
 */
export default class TodoTimer {
  #timerDiv

  createTimer (todo, timeString) {
    this.#createDivElement(todo)
    const timeInSeconds = this.#getTimeInSeconds(timeString)

    const timer = new Timer({
      displayElement: this.#timerDiv,
      timerTime: timeInSeconds,
      showProgressBar: true,
      pauseOnHover: true,
      timeIsUpAction: 'alertAndRemove',
      tenSecondsLeftWarning: true
    })
  }

  #createDivElement (todo) {
    this.#timerDiv = document.createElement('div')
    this.#timerDiv.setAttribute('id', 'timerDiv')
    todo.appendChild(this.#timerDiv)
  }

  #getTimeInSeconds(timeString) {
    const timeStringConvertedToInt = parseInt(timeString)
    return this.#minToSec(timeStringConvertedToInt)
  }

  #minToSec (timeStringConvertedToInt) {
    return timeStringConvertedToInt * 60
  }
}
