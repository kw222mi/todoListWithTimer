import './style.css'
import Todo from './src/components/Todo.js'
import SaveAndRead from './src/components/SaveAndRead'
import TodoTimer from './src/components/TodoTimer'
import Button from './src/components/Button'

const saveAndRead = new SaveAndRead()
const todotimer = new TodoTimer()
const button = new Button(todotimer, saveAndRead)
const todo = new Todo(saveAndRead, button)
