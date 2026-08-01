import React from 'react'
import { useEffect, useState } from 'react'
import Q1 from './Q1'
import Q2 from './Q2'
import Q3 from './Q3'
import Q4 from './Q4'
import Q5 from './Q5'

const App = () => {
    const URL = "https://jsonplaceholder.typicode.com/todos";
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => setTodos(data));
    }, []);

  return (
    <div>
        <Q1 data={todos} />
        <br />
        <Q2 data={todos} />
        <br />
        <Q3 data={todos} />
        <br />
        <Q4 data={todos} />
        <br />
        <Q5 data={todos} />

    </div>
  )
}


export default App