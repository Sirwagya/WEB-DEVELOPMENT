import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const dummyData = [
    {
      name: "Rahul",
      age: 21,
    },
    {
      name: "Priya",
      age: 22,
    },
    {
      name: "Aman",
      age: 20,
    },
    {
      name: "Sneha",
      age: 23,
    },
    {
      name: "Arjun",
      age: 19,
    },
  ];
  const [Text, setText] = useState("");
  const [Obj, setObj] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/about")
      .then((res) => setText(res.data.hello));

    axios.post("http://localhost:3000/data", dummyData).then((response) => {
      setObj(response.data);
    });
  }, []);

  return (
    <>
      <div>{Text}</div>

      {Obj.map((e) => (
        <div key={e.name}>
          <p>{e.name}</p>
          <p>{e.age}</p>
        </div>
      ))}
    </>
  );
};

export default App;
