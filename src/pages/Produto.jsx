import { Link, useParams } from "react-router-dom"
import ProdutoService from "../services/produtoService"

function Produto() {
    const { id } = useParams()
    const produtoService = ProdutoService();
    const produto = produtoService.get(id);
    return (<section>
        <Link className="voltar" to="/produtos">&larr; voltar</Link>
        <div className="produto">
            <div className="titulo">
                <h1>{produto.titulo}</h1>

            </div>
            <div className="imagem">
                <img src={produto.imagem} alt={produto.titulo} />
            </div>
            <div className="preco">R${produto.preco.toFixed(2)}</div>
        </div>
    </section>)

}



export default Produto