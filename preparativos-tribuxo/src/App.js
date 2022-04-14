import "./App.css";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import Students from "./components/Students";

function App() {
  const [login, setLogin] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [aleatory, setAleatory] = useState([]);

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) =>
        setCharacters(response.filter((aluno) => aluno.house !== ""))
      )
      .catch((err) => console.log(err));
  }, []);

  function sorteados() {
    const alunosSorteados = [];

    while (alunosSorteados.length < 3) {
      const sorteado = Math.floor(Math.random() * characters.length);
      const casaAleatorio = characters[sorteado].house;

      const check = alunosSorteados.some((aluno) => {
        return aluno.house === casaAleatorio;
      });
      if (!check) {
        alunosSorteados.push(characters[sorteado]);
      }
    }

    setAleatory(alunosSorteados);
  }

  function initialize() {
    sorteados();
    setLogin(true);
  }

  return (
    <div className="App">
      {login ? (
        <Students students={aleatory} fn={sorteados} />
      ) : (
        <Login fn={initialize} />
      )}
    </div>
  );
}
export default App;