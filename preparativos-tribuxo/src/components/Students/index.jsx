import "./style.css";

function Students({ alunos, fnAlunos }) {
  return (
    <div className="aleatoryStudents">
      {alunos.map((value, index) => {
        return (
          <div key={index}>
            <p>{value.name}</p>
            <p>{value.house}</p>
            <p>{value.gender}</p>
          </div>
        );
      })}

      <button onClick={() => fnAlunos()}> Sortear Novamente</button>
    </div>
  );
}

export default Students;
