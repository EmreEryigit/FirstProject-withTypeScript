import React, { useContext, useRef } from 'react'
import { TodoContext } from '../context/TodoContext'
import classes from "./NewTodo.module.css"
const NewTodo: React.FC = () => {
    const todoCtx = useContext(TodoContext)
    const textRef = useRef<HTMLInputElement>(null)

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        const enteredText = textRef.current!.value
        if(enteredText.trim().length === 0) {
            return
        }
        todoCtx.addTodo(enteredText)
    }
  return (
    
        <form className={classes.form} onSubmit={submitHandler}>
            <label>Todo text</label>
            <input type="text" ref={textRef} />
            <button>Add Todo</button>
        </form>
    
  )
}

export default NewTodo