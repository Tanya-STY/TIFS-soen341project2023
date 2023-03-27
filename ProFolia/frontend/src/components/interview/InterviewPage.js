import React, { useState } from "react";
import "./InterviewPage.css";
import { useNavigate } from "react-router-dom";

function InterviewPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/InterviewForm');
  };

  const [students, setStudents] = useState([
    { id: 1, name: "John Doe (johndoe@gmail.com)", selected: false },
    { id: 2, name: "Jane Doe (jane@gmail.com)", selected: false },
    { id: 3, name: "Fadoua (doghmanefadoua@gmail.com)", selected: false },
    { id: 4, name: "Alice Johnson (Alice@gmail.com)", selected: false },
  ]);

  const handleSelectInterview = (studentId) => {
    setStudents((prevState) =>
      prevState.map((student) =>
        student.id === studentId ? { ...student, selected: true } : student
      )
    );
    // alert("Congrats! You have been accepted for an interview.");
  };

  return (
    <div className="App">
      <h1>Students Applied for Job</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <span>{student.name}</span>
            {!student.selected && (
              <button onClick={() => handleButtonClick(student.id)}>
                Select
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InterviewPage;
