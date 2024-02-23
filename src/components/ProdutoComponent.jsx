import React from "react"
import "./ProdutoComponent.css" 

function ProdutoComponent({ dados }) {
    return (
        <div className="produto">
            <div className="imagem">
                <img src={dados.imagem} alt="imagem de fralda" />
            </div>
            <div className="titulo">{dados.titulo}</div>
            <div className="acoes">
                <div>
                    <span className="preco"> R$ {dados.preco.toFixed(2)} </span>
                </div>
                <div>
                    <button> ver detalhes </button>
                </div>

            </div>
        </div>
    )
}

export default ProdutoComponent;