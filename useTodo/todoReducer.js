
export const todoReducer = (state, action) => {
    switch(action.type){
        case 'addTodo':
            return [...state, action.payload]
        case 'removeTodo':
            return state.filter(todo => todo.id !== action.payload)
        case 'doneTodo':
            return state.map( todo => {
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })
        default:
            return state
    }
}