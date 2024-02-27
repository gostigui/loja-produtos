import React from "react"
import "./ProdutoComponent.css"
import { Link } from "react-router-dom";

function ProdutoComponent({ dados, id }) {
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
                    <Link className="navegar" to={"/produtos/" + id}> ver detalhes </Link>
                </div>

            </div>
        </div>
    )
}

export default ProdutoComponent;