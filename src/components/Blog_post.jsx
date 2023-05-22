import styled from "styled-components"
import carreira from '../assets/Carreira_1.png'

export default function Post() {


    return (
        <StyledPost>
            <div>
                <h1>Carreira</h1>
                <p>Boas práticas para devs em início de carreira</p>
                <p>Há um ano • 4 min de leitura</p>
            </div>
        </StyledPost>
    )
}

const StyledPost = styled.div`
    width: 500px;
    height: 250px;
    color: white;
    overflow: hidden;
    background: url(${carreira});
    
`