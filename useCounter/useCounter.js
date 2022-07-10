import { useState } from "react"

export const useCounter = (initialState = 0) => {
    const [counter, setCounter] = useState(initialState)

    const increment = () => setCounter(count => count + 1)
    const reset = () => setCounter(initialState)
    const decrement = () => setCounter(count => count - 1)

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}