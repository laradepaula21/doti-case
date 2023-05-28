import { RightCircleOutlined } from "@ant-design/icons"
import { StyledGeral, StyledContainer} from "./styles"


export default function Produtos(props) {

    const item  = props.dados;

    return (
        <StyledGeral>
            <div>
                <div> 
                <img src={item.imageSource} alt="logoProduto" />
                </div>
                <StyledContainer>
                    <div>                    
                        <h1> {item.titulo} </h1> 
                        <h2> {item.texto} </h2> 
                    </div> 
                    <a href="https://www.rocketseat.com.br/" target="_blank"><RightCircleOutlined/></a>
                </StyledContainer>
            </div>
        </StyledGeral>
    )

}

