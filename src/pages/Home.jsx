import ProdutoComponent from "../components/ProdutoComponent";
import ProdutoService from "../services/produtoService";

function Home() {
    const produtoService = ProdutoService();
    const produtos = produtoService.produtos;
    return (

        <section>
            <div className="produtos">
                {produtos.map(function (produto, id) {
                    return (
                        <ProdutoComponent dados={produto} id={id} key={id} />
                    )
                })}
            </div>
        </section>


    );
}

export default Home