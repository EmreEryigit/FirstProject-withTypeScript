import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import SingleTodo from './SingleTodo'
import classes from "./Todos.module.css"
const Todos: React.FC =  () => {
  const todoCtx = useContext(TodoContext)
  return (
    <div>
        <ul className={classes.todos}>
            {todoCtx.items.map((item, i) => (
              <SingleTodo key={item.id} item={item}  />
            ))}
        </ul>
    </div>
  )
}

export default Todos