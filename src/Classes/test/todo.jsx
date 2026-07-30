import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React", done: false },
    { id: 2, task: "Build Todo App", done: true },
    { id: 3, task: "Practice DSA", done: false },
  ]);

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, done: !todo.done }
          : todo
      )
    );
  };

  return (
    <div>
      <h2>Undone</h2>

      {todos
        .filter((todo) => !todo.done)
        .map((todo) => (
          <div key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleDone(todo.id)}
            />
            {todo.task}
          </div>
        ))}

      <h2>Done</h2>

      {todos
        .filter((todo) => todo.done)
        .map((todo) => (
          <div key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleDone(todo.id)}
            />
            {todo.task}
          </div>
        ))}
    </div>
  );
}

export default Todo;