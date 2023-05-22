import Header from "../../components/Header";
import Produtos from "../../components/Produto/Produtos";
import logoProduto1 from "./../../assets/discover-reduced.svg"
import logoProduto2 from "./../../assets/explorer-reduced.svg"
import logoProduto3 from "./../../assets/ignite-reduced.svg"
import { StyledPaginaProdutos,StyledDireita, StyledEsquerda,StyledCentroEsquerda} from "./styles"


const dados =[
    {
        imageSource: logoProduto1,
        titulo: "Introdução à programação",
        texto: "Programa prático e gratuito para você entrar no universo de tecnologia, entender todas as possibilidades da profissão e iniciar sua jornada no mundo dev."
    },
    {
        imageSource: logoProduto2,
        titulo: "Aprenda programação do zero e conquiste sua primeira vaga",
        texto: "Comece sua carreira em desenvolvimento full stack através de uma formação completa com acompanhamento personalizado e metodologia prática e decole em programação."
    },
    {
        imageSource: logoProduto3,
        titulo: "Evolua sua carreira com React, Node e React Native",
        texto: "Especialize-se através de um método eficiente, uma grade curricular alinhada com o mercado e as atitudes que vão te destacar como profissional."
    }
    
]

export default function Products() {

    const produtos = dados.map(n => (
        <Produtos dados={n} key={n.titulo}></Produtos>
    ))

    return (
    <>  
        <Header underline="Produtos"></Header>
        <StyledPaginaProdutos>
            <StyledEsquerda>
                <StyledCentroEsquerda> 
                    <h1> Produtos </h1>
                    <p>Plataforma completa de aprendizado <br></br>para você que quer começar ou se<br></br> especializar em programação!</p>
                </StyledCentroEsquerda>    
            </StyledEsquerda>
            <StyledDireita>
                {produtos}
            </StyledDireita>
        </StyledPaginaProdutos>


    </>
    )
}

