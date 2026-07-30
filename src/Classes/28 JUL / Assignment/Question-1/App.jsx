import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((currentCount) =>
      currentCount < 10 ? currentCount + 1 : currentCount,
    );
  };

  const handleDecrease = () => {
    setCount((currentCount) =>
      currentCount > 0 ? currentCount - 1 : currentCount,
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Counter</h1>
      <div>
        <p>Current count: {count}</p>
      </div>
      <div>
        <button className="border-amber-300 border-8 bg-amber-300 rounded m-2 cursor-pointer" onClick={handleDecrease}>
          Decrease
        </button>
        <button className="border-green-300 border-8 bg-green-300 rounded m-2 cursor-pointer" onClick={handleIncrease}>
          Increase
        </button>
      </div>
    </div>
  );
};

export default App;
