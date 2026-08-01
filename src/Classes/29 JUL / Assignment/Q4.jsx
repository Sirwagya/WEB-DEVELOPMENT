import React from 'react'
import { useState } from 'react'

const Q4 = ({ data }) => {
    const [todo, setTodo] = useState(data || []);

    const HandleClick = (id) => {
        return () => {
            setTodo((prevTodos) => prevTodos.filter((item) => item.id !== id));
        };
    };

    return (
        <>
            {todo.map((item) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <button onClick={HandleClick(item.id)}>Delete</button>
                </div>
            ))}
        </>
    );
};

export default Q4