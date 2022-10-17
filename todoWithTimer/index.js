import './style.css'
import Todo from './src/components/Todo.js'
import Timer from '/src/components/Timer.js'
import SaveAndRead from './src/components/SaveAndRead'
import TodoTimer from './src/components/TodoTimer'

document.querySelector('#app').innerHTML = `
  <div>
  
 
    <div>
     
    </div>
   
  </div>
`
const saveAndRead = new SaveAndRead()
const todotimer = new TodoTimer()
const todo = new Todo(saveAndRead, todotimer)




