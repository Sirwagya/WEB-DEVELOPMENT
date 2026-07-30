import React from "react";

const Card = ({ name, rollNo, course }) => {
  return (
    <div className="flex flex-col p-4 rounded-xl w-50 h-30 shadow-black/30 shadow-2xl bg-white/5 backdrop-blur m-0.5">
      <h2 className="font-bold">{name}</h2>
      <p>Roll No: {rollNo}</p>
      <p>Course: {course}</p>
    </div>
  );
};

export default Card;