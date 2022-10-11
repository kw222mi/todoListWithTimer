import './style.css'
import Todo from './src/components/Todo.js'
import Timer from '/src/components/Timer.js'

document.querySelector('#app').innerHTML = `
  <div>
  
 
    <div>
     
    </div>
   
  </div>
`
let todo = new Todo ()

let timerDiv = document.querySelector('#timerDiv')

let timer = new Timer ({
  displayElement: timerDiv,
  timerTime: 30,
  showProgressBar: true,
  pauseOnHover: true,
  timeIsUpAction: 'color',
  tenSecondsLeftWarning: true
})


