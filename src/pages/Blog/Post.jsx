import {StyledPost} from "./styles"

export default function Post(props) {

    
    const dados  = props.dados;

    return (
        <StyledPost>
            <img src={dados.imageSource}></img>
            <div>
                <h1>{dados.titulo}</h1>
                <p>{dados.corpo}</p>
            </div>
            <p className="data">{dados.horario}</p>
        </StyledPost>
    )
}
    