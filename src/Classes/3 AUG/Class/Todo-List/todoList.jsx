import React, { useReducer } from 'react'

const App = () => {
    let data = {
        text : "",
        todos: []
    }

    function kaamkaro(state,action){
        if (action.type == "update"){
            return {
                ...state,
                text : action.payload
            }
        }
        else if (action.type == "add"){
            return {
                ...state,
                todos: [...state.todos, state.text],
                text: ""
            }
        }
        else if (action.type == "del"){
            const filteredTodos = state.todos.filter((x) => x != action.payload)
            return {
                ...state,
                todos: filteredTodos
            }
        }
        else return state
    }

    const [state,dispatch] = useReducer(kaamkaro , data);

  return (
    <div>
        <div
        className='flex justify-center'>
        <input 
        className='input'
        type="text"
        value={state.text}
        onChange={(e)=>dispatch({type: "update",payload : e.target.value})}
        placeholder='Enter Task Here'
        />
        <button
        className='button-19'
        onClick={()=>dispatch({type: "add"})}
        >Add</button>
        </div>

        <ol>
            {
                state.todos.map((e,key)=>(
                    <li
                    className='cursor-pointer'
                    key={key}
                    onClick={()=> dispatch({type: "del", payload: e})}
                    >{e}</li>
                ))
            }
        </ol>
    </div>
  )
}

export default App