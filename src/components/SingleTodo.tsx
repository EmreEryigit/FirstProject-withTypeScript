import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import Todo from '../models/todo'
import classes from "./SingleTodo.module.css"
const SingleTodo: React.FC<{item: Todo}> = (props) => {
  const todoCtx = useContext(TodoContext)
  const handleDelete = () => {
    todoCtx.removeTodo(props.item.id)
  }
  return (
   
        <li className={classes.item} onClick={handleDelete} >{props.item.text}</li>
  
  )
}

export default SingleTodo