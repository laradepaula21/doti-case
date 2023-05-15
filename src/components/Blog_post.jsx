import styled from "styled-components"
import carreira from '../assets/Carreira_1.png'

export default function Post() {

    return (
        <StyledPost>
            <div>
                <h1>Carreira</h1>
                <p>Boas práticas para devs em início de carreira</p>
            </div>
            <p className="data">Há um ano • 4 min de leitura</p>
        </StyledPost>
    )
}

const StyledPost = styled.div`

    font-family: 'Poppins', sans-serif;
    background: url(${carreira});
    width: 30%;
    height: 250px;
    color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    padding: 8px 15px;
    font-size: 20px;

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
`