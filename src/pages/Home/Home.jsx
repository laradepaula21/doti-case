import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoggedUsers from "./Logged"
import HomeCarousel from "../../components/HomeCarousel"
import {StyledHome, StyledDivLogin, StyledLoggedNow, StyledDivTitulos, StyledMembrosTitulo, StyledOutrosTitulos, StyledModalidadeTitulo,StyledHorarioTitulo, StyledTempoTitulo, StyledDivReclamacoes, StyledLinkReclamacoes} from "./styles"
import HomeLogin from "./HomeLogin";

export default function Home() {

    return (

        <>
            <Header underline="Home"></Header>
            <StyledHome>
            <HomeCarousel />
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
