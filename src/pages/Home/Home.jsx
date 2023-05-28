import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";
import LoggedUsers from "./Logged"
import HomeLogin from "./HomeLogin";


export default function Home() {

    return (

        <>
            <Header underline="Home"></Header>v
            <StyledHome>
                <div>
                    <StyledDivLogin>
                        <HomeLogin></HomeLogin>
                    </StyledDivLogin>
                    <StyledLoggedNow>
                        <StyledDivTitulos>
                            <StyledMembrosTitulo> <h2> Membros </h2> </StyledMembrosTitulo>
                            <StyledOutrosTitulos>
                                <StyledModalidadeTitulo> <h2> Modalidade </h2> </StyledModalidadeTitulo>
                                <StyledHorarioTitulo> <h2> Chegada </h2> </StyledHorarioTitulo>
                                <StyledTempoTitulo> <h2> Tempo </h2> </StyledTempoTitulo>
                                <div className="espacoLogout"/>
                            </StyledOutrosTitulos>
                        </StyledDivTitulos>
                        <div>
                            <LoggedUsers></LoggedUsers>
                        </div>
                    </StyledLoggedNow>
                </div>
                <StyledDivReclamacoes>
                    <p> Tem alguma reclamação? <StyledLinkReclamacoes href="https://docs.google.com/forms/d/1QtK3XIWlPJ5YYyzsmC9T9gpjdOUGVOW5qwE1Dx8dFmI/edit"  target="_blank"> 
                         Clique aqui! 
                    </StyledLinkReclamacoes>
                    </p>
                </StyledDivReclamacoes>
            </StyledHome>
            <Footer></Footer>
        </>

    )
}

const StyledHome = styled.div`

    width: 90%;
    margin: auto;
    background-color: black;
    color: white;
    font-family: 'Poppins', sans-serif;
   
    @media screen and (max-width: 650px) {

    width: 100%;

}
 
`

const StyledDivLogin = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 650px) {

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    }


`

const StyledLoggedNow = styled.div`
    
    width: 100%;
    justify-content: center;



`
const StyledDivTitulos = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: #1a1a1d;
    padding: 10px;
    font-size: 14px;
    font-weight: 800;



`
const StyledMembrosTitulo = styled.div`

    width: 50%;
    display: flex;
    padding: 20px 0px;
    margin-left: 60px;
    flex-direction: row;
    text-align: center;
    align-items: center;

    @media screen and (max-width: 768px) {

        margin: 2%;

    }

`
const StyledOutrosTitulos = styled.div`

    width: 52%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .espacoLogout{
        width: 20px;
    }
 
`
const StyledModalidadeTitulo = styled.div `

    text-align: center;
    padding: 20px 0px;


    @media screen and (max-width: 767px) {

        display: none;

    }
`

const StyledHorarioTitulo = styled.div `

    text-align: center;
    padding: 20px 0px;


    @media screen and (max-width: 767px) {

        display: none;

    }
`

const StyledTempoTitulo = styled.div `

    text-align: center;
    padding: 20px 0px;

`

const StyledDivReclamacoes = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 2%;
    padding-top: 30px;
    font-size: 16px;
`

const StyledLinkReclamacoes = styled.a`

    cursor: pointer;
    color: white;
    font-size: 16px;

    &:hover{
        color: #633bbc;
    }


`
