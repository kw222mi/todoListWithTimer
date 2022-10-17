import Timer from './Timer.js'

/**
 * Creates a timer from the Timer-class and add it to the todo.
 */
export default class TodoTimer {
  #timerDiv

  createTimer(todo, timeString) {
    this.#timerDiv = document.createElement('div')
    this.#timerDiv.setAttribute('id', 'timerDiv')
    todo.appendChild(this.#timerDiv)
    const tInt = parseInt(timeString)
    const time = this.#minToSec(tInt)

    const timer = new Timer({
      displayElement: this.#timerDiv,
      timerTime: time,
      showProgressBar: true,
      pauseOnHover: true,
      timeIsUpAction: 'alertAndRemove',
      tenSecondsLeftWarning: true
    })
  }

  #minToSec(tInt) {
    return tInt * 60
  }
}
