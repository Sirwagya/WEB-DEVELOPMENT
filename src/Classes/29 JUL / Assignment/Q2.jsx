import React from "react";

const Q2 = ({ data }) => {
  const todo = data.slice(0, 10);
  return (
    <>
      {todo.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
        </div>
      ))}
    </>
  );
};

export default Q2;
