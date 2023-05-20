import styled from "styled-components"

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
    

const StyledPost = styled.div`
    font-family: 'Poppins', sans-serif;
    width: 45%;
    max-width: 465px;
    min-width: 365px;
    height: 250px;
    color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    padding: 8px 15px;
    font-size: 20px;
    position: relative;
    img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
    }
    div{
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    h1 {
        font-size: 35px;
    }
    .data{
        font-size: 12px;
    }

    @media(max-width: 600px) {    
    width: 100%;
    height: 200px;
    color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    padding: 5px  5px;
    font-size: 12pt;

    div{
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    h1 {
        font-size: 35px;
    }
    .data{
        font-size: 12px;
    }
    }
`