import Header from "../../components/Header";
import styled from "styled-components";

export default function Home() {

    return (
    <>
        <Header underline="home"></Header>
        <div>
            <div>
                Escolha o nome do membro
            </div>
                <StyledLogados>
                    <div>
                        <h2> Membros </h2>
                        <h2> Modalidade </h2>
                        <h2> Chegada </h2>
                        <h2> Tempo </h2>

                    </div>
                     
                    <div>

                    </div>
                </StyledLogados>
        </div>
    </>
    )
}

const StyledLogados = styled.div`
    width: 50%;

    background-color: green;

`