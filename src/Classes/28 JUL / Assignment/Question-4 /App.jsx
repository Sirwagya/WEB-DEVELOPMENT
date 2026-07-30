import { useState } from "react";
import Badge from "./Components/Badge.jsx";

const App = () => {
  const [tasks, setTasks] = useState(["Task 1", "Task 2"]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;

    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  return (
    <>
      <Badge total={tasks.length} />

      <br />

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a task"
      />

      <button className="cursor-pointer" onClick={addTask}>
        Add
      </button>

      <h3>Tasks</h3>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    </>
  );
};

export default App;