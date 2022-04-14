import "./App.css";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import Students from "./components/Students";

function App() {
  const [login, setLogin] = useState(false);
  const [aleatory, setAleatory] = useState([]);

  // useEffect(() => {
  //   fetch("http://hp-api.herokuapp.com/api/characters/students")
  //     .then((response) => response.json())
  //     .then((response) =>
  //       setCharacters(response.filter((aluno) => aluno.house !== ""))
  //     )
  //     .catch((err) => console.log(err));
  // }, []);

  // function sorteados() {
  //   const alunosSorteados = [];

  //   while (alunosSorteados.length < 3) {
  //     const sorteado = Math.floor(Math.random() * characters.length);
  //     const casaAleatorio = characters[sorteado].house;

  //     const check = alunosSorteados.some((aluno) => {
  //       return aluno.house === casaAleatorio;
  //     });
  //     if (!check) {
  //       alunosSorteados.push(characters[sorteado]);
  //     }
  //   }

  //   setAleatory(alunosSorteados);
  // }

  const [characters, setCharacters] = useState([]);
  const [gryffindor, setGryffindor] = useState([]);
  const [slytherin, setSlytherin] = useState([]);
  const [hufflepuff, setHufflepuff] = useState([]);
  const [ravenclaw, setRavenclaw] = useState([]);
  const houses = ["gryffindor", "slytherin", "hufflepuff", "ravenclaw"];

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setCharacters(response))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const filterOne = characters.filter((value) => {
      return value.house === "Gryffindor";
    });
    const filterSegunda = characters.filter((value) => {
      return value.house === "Slytherin";
    });
    const filterTerceira = characters.filter((value) => {
      return value.house === "Hufflepuff";
    });
    const filterQuarto = characters.filter((value) => {
      return value.house === "Ravenclaw";
    });
    setGryffindor(filterOne);
    setSlytherin(filterSegunda);
    setHufflepuff(filterTerceira);
    setRavenclaw(filterQuarto);
  }, [characters]);

  function sortearCasas() {
    const casas = [];
    while (casas.length < 3) {
      const casaSorteada = houses[Math.floor(Math.random() * 3)];
      if (!casas.includes(casaSorteada)) {
        casas.push(casaSorteada);
      }
    }
    return casas;
  }

  function aleatorios(house) {
    if (house === "gryffindor") {
      const aleatorioGryffindor = Math.floor(Math.random() * gryffindor.length);
      return gryffindor[aleatorioGryffindor];
    }
    if (house === "slytherin") {
      const aleatorioSlytherin = Math.floor(Math.random() * slytherin.length);
      return slytherin[aleatorioSlytherin];
    }
    if (house === "hufflepuff") {
      const aleatorioHufflepuff = Math.floor(Math.random() * hufflepuff.length);
      return hufflepuff[aleatorioHufflepuff];
    }
    if (house === "ravenclaw") {
      const aleatorioRavenclaw = Math.floor(Math.random() * ravenclaw.length);
      return ravenclaw[aleatorioRavenclaw];
    }
  }

  function sorteados() {
    const casas = sortearCasas();
    const todosAlunosSorteados = [];
    for (let counter = 0; counter < casas.length; counter++) {
      const umAlunoSorteado = aleatorios(casas[counter]);
      todosAlunosSorteados.push(umAlunoSorteado);
    }
    setAleatory(todosAlunosSorteados);
  }

  function initialize() {
    sorteados();
    setLogin(true);
  }

  return (
    <div className="App">
      {login ? (
        <Students students={aleatory} fnStudents={sorteados} />
      ) : (
        <Login fn={initialize} />
      )}
    </div>
  );
}
export default App;
