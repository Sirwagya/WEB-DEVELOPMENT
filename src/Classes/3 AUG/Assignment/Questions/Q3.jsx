import React, { useReducer } from 'react'

const initialState = {
  item: '',
  cart: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setItem':
      return {
        ...state,
        item: action.payload,
      }
    case 'addItem': {
      const trimmedItem = state.item.trim()
      if (!trimmedItem) {
        return state
      }
      return {
        ...state,
        cart: [...state.cart, trimmedItem],
        item: '',
      }
    }
    default:
      return state
  }
}

const Q3 = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <section>
      <h2>Q3. Shopping Cart Items</h2>
      <input
        type='text'
        value={state.item}
        placeholder='Enter item name'
        onChange={(e) => dispatch({ type: 'setItem', payload: e.target.value })}
      />{' '}
      <button onClick={() => dispatch({ type: 'addItem' })}>Add to Cart</button>

      <ul>
        {state.cart.map((cartItem, index) => (
          <li key={`${cartItem}-${index}`}>{cartItem}</li>
        ))}
      </ul>
    </section>
  )
}

export default Q3
