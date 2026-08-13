import React, { useReducer } from 'react'

const initialState = {
  color: 'Red',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'next': {
      if (state.color === 'Red') {
        return { ...state, color: 'Yellow' }
      }
      if (state.color === 'Yellow') {
        return { ...state, color: 'Green' }
      }
      return { ...state, color: 'Red' }
    }
    default:
      return state
  }
}

const Q2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <section>
      <h2>Q2. Traffic Light</h2>
      <p>Current color: {state.color}</p>
      <button onClick={() => dispatch({ type: 'next' })}>Next</button>
    </section>
  )
}

export default Q2
