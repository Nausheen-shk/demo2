import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Student() {

  let { id } = useParams();

  let [student, setStudent] = useState({});

  let [students, setStudents] = useState([
    { id: 1, name: "Umair", email: "umair@gmail.com", contact: "9876543210" },
    { id: 2, name: "Ali", email: "ali@gmail.com", contact: "9123456780" }
  ]);

  let getStudent = () => {
    console.log(id);

    students.forEach((stud) => {
      if (stud.id === Number(id)) {
        setStudent(stud);
      }
    });
  };

  return (
    <>
      <button onClick={getStudent}>Get Student</button>

      {student && JSON.stringify(student)}
    </>
  );
}