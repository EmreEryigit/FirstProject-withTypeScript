import React, {  useState } from "react";
import Todo from "../models/todo";

interface Props {
    children: React.ReactNode
}

type TodosObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}
export const TodoContext = React.createContext<TodosObj>({
    items: [],
    addTodo: (text: string) => {},
    removeTodo: (id: string) => {},
})

const TodosContextProvider: React.FC<Props> =  ({children}) => {
    const [todos, setTodos] = useState<Todo[]>([])
    const AddTodoHandler = (text: string) => {
      const newTodo = new Todo(text)
      setTodos(prev => (
        [...prev, newTodo]
      ))
    }
    const deleteHandler = (id: string) => {
      setTodos((prev) => {
        return prev.filter(item => item.id !== id)
      })
    }
    const valueContext: TodosObj = {
        items: todos,
        addTodo: AddTodoHandler,
        removeTodo: deleteHandler
    }

    return <TodoContext.Provider value={valueContext}>
        {children}
    </TodoContext.Provider>
}
export default TodosContextProvider
