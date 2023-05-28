import styled from "styled-components";
import LoggedInfo from "./LoggedInfo";
import perfil from "../../assets/perfil.png"

const Users = [
    {
        nome: `Usuario`,
        frase: `frase`,
        imagem: perfil,
        modalidade: `Modalidade`,
        horario: `00:00`,
        tempo: `00:00`,
    },

    {
        nome: `Usuariio`,
        frase: ``,
        imagem: perfil,
        modalidade: `Modalidade`,
        horario: `00:00`,
        tempo: `00:00`,
    },

    {
        nome: `Usuario`,
        frase: `frase`,
        imagem: perfil,
        modalidade: `Modalidade`,
        horario: `00:00`,
        tempo: `00:00`,
    },

    {
        nome: `Usuario`,
        frase: ``,
        imagem: perfil,
        modalidade: `Modalidade`,
        horario: `00:00`,
        tempo: `00:00`,
    }

]

export default function LoggedUsers() {

    return (
        <StyledLoggedUsers>
            {Users.map((user, index) =>
                <StyledUserProfile
                    key={index}
                >
                    <StyledMembros>
                        <img src={user.imagem}></img>
                        <StyledNome>
                            <n3>{user.nome}</n3>
                            <StyledFrase>
                                <p>{user.frase}</p>
                            </StyledFrase>
                        </StyledNome>
                    </StyledMembros>
                    <StyledOutros>
                        <StyledModalidade> <LoggedInfo info={user.modalidade}> </LoggedInfo> </StyledModalidade>
                        <StyledHorario> <LoggedInfo info={user.horario}></LoggedInfo> </StyledHorario>
                       <StyledTempo>  <LoggedInfo info={user.tempo}></LoggedInfo> </StyledTempo>
                    </StyledOutros>
                </StyledUserProfile>
            )}
        </StyledLoggedUsers>
    );
}



const StyledLoggedUsers = styled.div`

    width: 100%;
    display: flex;
    padding-top: 2%;
    justify-content: space-between;
    flex-direction: column;



`
const StyledUserProfile = styled.div`

    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 14px;

`

const StyledMembros = styled.div`

    width: 50%;
    height: 100px;
    padding: 0px 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    img{
        padding: 0px 12px;
        width: 50px;
        border-radius: 50%;
    }

    @media screen and (max-width: 767px) {

    img{
        display: none;
    }
}



`
const StyledNome = styled.div`

    width: 100%;
    display: flex ;
    flex-direction: column;
    font-weight: 400;
    padding: 0px 12px;


`

const StyledFrase = styled.div`

    width: 100%;
    color: gray;
    padding: 5px;

    @media screen and (max-width: 500px) {

        display: none;

    }

`



const StyledOutros = styled.div`

    width: 50%;
    padding: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;

   
`

const StyledModalidade = styled.div `

    width: 120px;
    text-align: center;

    @media screen and (max-width: 767px) {

        display: none;

    }
`
const StyledHorario = styled.div `

    text-align: center;

    @media screen and (max-width: 767px) {

        display: none;

    }
`
const StyledTempo = styled.div `

    text-align: center;
`
    

