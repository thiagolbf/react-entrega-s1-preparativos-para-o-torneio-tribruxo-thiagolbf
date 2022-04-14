import "./style.css";

function Students(students, fnStudents) {
  return (
    <div className="aleatoryStudents">
      {students.map((value, index) => {
        return (
          <div key={index}>
            <p>{value.name}</p>
            <p>{value.house}</p>
            <p>{value.gender}</p>
          </div>
        );
      })}

      <button onClick={() => fnStudents()}> Sortear Novamente</button>
    </div>
  );
}

export default Students;
