import React, { useReducer } from 'react'

const initialState = {
  likes: 0,
  dislikes: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'like':
      return {
        ...state,
        likes: state.likes + 1,
      }
    case 'dislike':
      return {
        ...state,
        dislikes: state.dislikes + 1,
      }
    default:
      return state
  }
}

const Q4 = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <section>
      <h2>Q4. Like & Dislike Counter</h2>
      <p>Likes: {state.likes}</p>
      <p>Dislikes: {state.dislikes}</p>
      <button onClick={() => dispatch({ type: 'like' })}>Like</button>{' '}
      <button onClick={() => dispatch({ type: 'dislike' })}>Dislike</button>
    </section>
  )
}

export default Q4
