import fralda from '../assets/fralda.webp';
import heineken from '../assets/heineken.jpg';
import fioDental from '../assets/fioDental.webp';
import nescau from '../assets/nescau.jpg';
import pilhas from '../assets/pilhas.webp';
import sucrilhos from '../assets/sucrilhos.webp';
import colgate from '../assets/colgate.webp';
import desodorante from '../assets/desodorante.webp';
import escovaDentes from '../assets/escovaDentes.webp';
import shampoo from '../assets/shampoo.webp';
import repelente from '../assets/repelente.webp';
import pepsiBlack from '../assets/pepsiBlack.jpg';
import protetorSolar from '../assets/protetorSolar.jpg';
import pente from '../assets/pente.jpg';
import doritos from '../assets/doritos.jpg';
import cafe from '../assets/cafe.png';
import manteiga from '../assets/manteiga.jpg';
import mem from '../assets/mem.webp';

function ProdutoService() {
    const produtos = [
        { imagem: fralda, titulo: "Fralda", preco: 10.99 },
        { imagem: heineken, titulo: "Heineken", preco: 5.90 },
        { imagem: fioDental, titulo: "Fio Dental", preco: 4.00 },
        { imagem: nescau, titulo: "Nescau", preco: 12.99 },
        { imagem: pilhas, titulo: "Pilhas", preco: 9.99 },
        { imagem: sucrilhos, titulo: "Sucrilhos", preco: 14.99 },
        { imagem: colgate, titulo: "Colgate", preco: 5.99 },
        { imagem: desodorante, titulo: "Desodorante", preco: 19.99 },
        { imagem: escovaDentes, titulo: "Escova de Dentes", preco: 20.99 },
        { imagem: repelente, titulo: "Repelente", preco: 13.99 },
        { imagem: shampoo, titulo: "Shampoo", preco: 22.99 },
        { imagem: mem, titulo: "M&M", preco: 4.99 },
        { imagem: pepsiBlack, titulo: "Pepsi Black", preco: 4.99 },
        { imagem: protetorSolar, titulo: "Protetor Solar", preco: 11.99 },
        { imagem: pente, titulo: "Pente", preco: 6.99 },
        { imagem: doritos, titulo: "Doritos", preco: 12.99 },
        { imagem: cafe, titulo: "Café", preco: 9.99 },
        { imagem: manteiga, titulo: "Manteiga", preco: 7.99 },
    ];
    function get(id) {
        return produtos[id]
    };
    return { produtos, get }
}

export default ProdutoService