import { Link } from "react-router-dom";
import { getStudents } from '../testdata/testdata'
import SessionsBoard from "../views/Student/SessionsBoard/sessionsBoard";

export default function studentSessions() {
    let students = getStudents();
    
    return (
       <div>
      {/*<div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        {students.map(student => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/student/${student.idUser}`}
            key={student.idUser}
          >
            {student.idUser}
          </Link>
        ))}
        </nav>*/}
      <SessionsBoard></SessionsBoard>
    </div>

      
    );
  }