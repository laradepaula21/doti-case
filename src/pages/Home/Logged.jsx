import styled from "styled-components";
import LoggedInfo from "./LoggedInfo";
import perfil from "../../assets/perfil.jpg"

const Users = [
    {
        nome:`Lara`,
        imagem:perfil, 
        modalidade:`Remoto`,
        horario:`11:30`,
        tempo:`01:53`,
    },

    {
        nome:`Jefferson`, 
        imagem:perfil, 
        modalidade:`Presencial`,
        horario:`11:00`,
        tempo:`02:00`,
    },

    {
        nome:`Lara`, 
        imagem:perfil, 
        modalidade:`Remoto`,
        horario:`11:30`,
        tempo:`01:53`,
    }

]

export default function LoggedUsers (){

    return(
         <StyledLoggedUsers> 
            {Users.map((user, index)=>
            <UserProfile
            key={index}
            >
            <ImageName>
                <img src={user.imagem}></img>
                <p>{user.nome}</p>
            </ImageName>
            <Teste>
            <LoggedInfo info={user.modalidade}></LoggedInfo> 
            <LoggedInfo info={user.horario}></LoggedInfo> 
            <LoggedInfo info={user.tempo}></LoggedInfo> 
            </Teste>
            </UserProfile>
            )}
        </StyledLoggedUsers>
    );
}

const StyledLoggedUsers = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 5%;
    gap: 50px;
    img{
        width: 40px;
        border-radius: 50%;

    }

`

const Teste = styled.div`

    width: 70%;
    display: flex;
    gap: 5%;
    flex-direction: row;
    justify-content: space-around;
    background-color: red;
    `

const ImageName = styled.div`

    width: 30%;
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: flex-start;
    background-color: yellow;
    `

const UserProfile = styled.div`

    
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: flex-start;
    background-color: green;
    `