import {useEffect, useReducer} from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

const initial_state = []

const init = () => {
    return  JSON.parse( localStorage.getItem('todos') ) || []
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initial_state, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    const handleNewTodo = (newTodo) => {
        dispatch({type:'addTodo', payload:newTodo})
    }

    const handleDeleteTodo = (todoID) => {
        dispatch({type:'removeTodo', payload: todoID})
    }

    const handleToggleTodo = (todoID) => {
        dispatch({type:'doneTodo', payload:todoID })
    }
    
    return {
        todos,
        todoCount: todos.length,
        pendingTodos: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}