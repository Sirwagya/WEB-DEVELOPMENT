import React, { useState } from 'react'

const App = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    const addTodo = () => {
        if (text.trim() === "") return; 
        setTodos([...todos, text]); 
        setText(""); 
    }

    return (
    <>
    
        <div className='flex justify-center'>
            <input className='input'
                type="text"
                value={text}
                placeholder='Enter your task Here'
                onChange={(e) => setText(e.target.value.toLowerCase())} 
            />
            <button className="button-19" onClick={addTodo}>add</button> 
        
        </div>
            <ul>
                {
                    todos.map((item, key) => (
                        <li className="pointer-cursor" onClick={() => setTodos(todos.filter((todo) => todo !== item))} key={key}>{item}</li>
                    ))
                }
            </ul>
    </>
    )
}

export default App