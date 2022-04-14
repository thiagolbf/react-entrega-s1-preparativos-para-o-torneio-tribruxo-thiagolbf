import "./style.css";

function Login({ fn }) {
  return (
    <>
      <h2>Torneio tribuxo</h2>

      <p>Clique no botão para encontrar os feiticeiros</p>

      <button onClick={() => fn()}> Começar </button>
    </>
  );
}

export default Login;
