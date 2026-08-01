import React from "react";
import { useState } from "react";

const Q4 = ({ data }) => {
  const [todos, setTodos] = useState(data);

  const HandleClick = (userId) => {
    return () => {
      const filteredData = data.filter((todo) => todo.userId == userId);
      setTodos(filteredData);
    };
  };

  return (
    <>
      <button onClick={HandleClick(1)}>User ID: 1</button>
      <button onClick={HandleClick(2)}>User ID: 2</button>
      <button onClick={HandleClick(3)}>User ID: 3</button>

      {todos
        .filter((todo) => todo.completed === true)
        .map((todo) => (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
          </div>
        ))}
    </>
  );
};

export default Q4;
