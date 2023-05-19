import Header from "../../components/Header";
import styled from "styled-components";
import LoggedUsers from "./Logged"

export default function Home() {

    return (
        <>
            <Header underline="home"></Header>
            <div>
                <div>
                    Escolha o nome do membro
                </div>
                <StyledLoggedNow>
                    <div className="CampoTitulos">
                        <h2> Membros </h2>
                        <h2> Modalidade </h2>
                        <h2> Chegada </h2>
                        <h2> Tempo </h2>

                    </div>

                    <div>
                        <LoggedUsers></LoggedUsers>
                    </div>
                </StyledLoggedNow>
            </div>
        </>
    )
}

const StyledLoggedNow = styled.div`
    
    width: 100%;
    justify-content: flex-start;
    background-color: black;
    color: white;

    .CampoTitulos{
        background-color: #646262;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2%;
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        text-align: center;

    }

`