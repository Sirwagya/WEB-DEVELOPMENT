import React from "react";
import Card from "./Card.jsx";

const students = [
  {
    id: 1,
    name: "John Doe",
    rollNo: "12345",
    course: "Computer Science",
  },
  {
    id: 2,
    name: "Jane Smith",
    rollNo: "67890",
    course: "Mathematics",
  },
  {
    id: 3,
    name: "Bob Johnson",
    rollNo: "54321",
    course: "Physics",
  }
];

const App = () => {
  return (
    <div className="flex justify-center gap-4 flex-wrap p-4">
      {students.map((student) => (
        <Card
          key={student.id}
          name={student.name}
          rollNo={student.rollNo}
          course={student.course}
        />
      ))}
    </div>
  );
};

export default App;