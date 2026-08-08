import {useReducer} from 'react'


const App = () => {

    function callback (state, action){
        if (action.type == "inc") { return state + 1}
        else if (action.type == "reset") { return 0}
        else if (action.type == "dec") { return state == 0 ? 0 : state - 1}
        else return state
    }
    let [count, dispatch] = useReducer(callback,0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({'type': 'inc'})}>Increment</button>
      <button onClick={() => dispatch({'type': 'reset'})}>Reset</button>
      <button onClick={() => dispatch({'type': 'dec'})}>Decrement</button>
    </div>
  )
}

export default App