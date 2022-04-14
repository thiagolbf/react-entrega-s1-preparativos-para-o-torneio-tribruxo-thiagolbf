import "./style.css";

function Students({ students, fn }) {
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

      <button onClick={() => fn()}> Sortear Novamente</button>
    </div>
  );
}

export default Students;
