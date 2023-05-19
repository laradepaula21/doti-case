import Header from "../components/Header";
import Produtos from "../components/Produtos";
import logoProduto from "./../assets/ignite-reduced.svg"


export default function Products() {
    return (
    <>
        <Header underline="products"></Header>
        <Produtos logoProduto={logoProduto}>  </Produtos>
    </>
    )
}

