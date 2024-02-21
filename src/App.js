import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>loja Gosti</h1>
        </header>
        <section>
          <div className="produto">
            <div className="imagem"></div>
            <div className="titulo">teste</div>
            <div className="acoes">
              <span className="preco"> R$10,00 </span>
              <button>
                ver detalhes
              </button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default App;
