import { useState } from "react"

export const CounterComponent = (props) => {
        // para usar...     const{ counter, increment, reset, decrement } = useCounter(valueInitial)
        const [counter, setCounter] = useState(props.cantidad)

        // defino como lo voy a cambiar
        // para usar decrement(decrementValue, decrementLimit)
        const decrement = (decrementValue = 1, decrementLimit = 1) => {
          ((counter - decrementValue)>= decrementLimit) ? setCounter(counter - decrementValue) : setCounter(decrementLimit)
        }
        // para usar... increment(incrementValue, incrementLimit)
        const increment = (incrementValue = 1, incrementLimit = 999999999999999) => {
            ((counter + incrementValue)<= incrementLimit) ? setCounter(counter + incrementValue) : setCounter(incrementLimit)
        }

    return (
        <>
        <button className='counter-btn' onClick={ () => decrement(1)}>-</button>
        <p>{counter}</p>
        <button className='counter-btn' onClick={ () => increment(1)}>+</button>
        </>
    )
}