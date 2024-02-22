import logo from './logo.jpg';
import fralda from './assets/fralda.webp';
import './App.css';

function App() {
  const produtos = [
    { imagem: fralda, titulo: "Fralda", preco: 10.99 },
    { imagem: fralda, titulo: "Fralda", preco: 10.99 },
    { imagem: fralda, titulo: "Fralda", preco: 10.99 },
    { imagem: fralda, titulo: "Fralda", preco: 10.99 },
    { imagem: fralda, titulo: "Fralda", preco: 10.99 },
    { imagem: fralda, titulo: "Fralda", preco: 10.99 },
  ];
  return (
    <>
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>loja Gosti</h1>
        </header>
        <section>
          <div className="produtos">

            {produtos.map(function (produto) {
              return (
                <div className="produto">
                  <div className="imagem">
                    <img src={produto.imagem} alt="imagem de fralda" />
                  </div>
                  <div className="titulo">{produto.titulo}</div>
                  <div className="acoes">
                    <div>
                      <span className="preco"> R$ {produto.preco} </span>
                    </div>
                    <div>
                      <button>
                        ver detalhes

                      </button>
                    </div>

                  </div>
                </div>

              )
            })}


          </div>
        </section>

      </div>
    </>
  );
}

export default App;
