import React, { useReducer } from 'react'

const initialState = {
  quantity: 1,
  message: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        quantity: state.quantity + 1,
        message: '',
      }
    case 'decrement':
      if (state.quantity === 1) {
        return {
          ...state,
          message: 'Minimum quantity is 1.',
        }
      }
      return {
        ...state,
        quantity: state.quantity - 1,
        message: '',
      }
    default:
      return state
  }
}

const Q1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <section>
      <h2>Q1. Quantity Selector</h2>
      <p>Quantity: {state.quantity}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>{' '}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      {state.message && <p>{state.message}</p>}
    </section>
  )
}

export default Q1
