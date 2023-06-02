import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoggedUsers from "./Logged"
import HomeCarousel from "../../components/HomeCarousel"
import {StyledHome, StyledDivLogin, StyledLoggedNow, StyledDivTitulos, StyledMembrosTitulo, StyledOutrosTitulos, StyledModalidadeTitulo,StyledHorarioTitulo, StyledTempoTitulo} from "./styles"
import HomeLogin from "./HomeLogin";
import perfil from "../../assets/perfil.png"
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Home() {

    const [sessions, setSessions] = useState([])
    const [allSessions, setAllSessions] = useState([])

    async function getSessions() {
        try {
            const res = await api.get("/sessoes");
            setSessions(res.data);
            setAllSessions(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getSessions();
    }, []);


    function searchSessions(e) {
        e.preventDefault();
        let findSessions = []
        setSessions(findSessions);
        allSessions.find(user => {
            if (e.target.value === "") return getSessions();
            if (user.id_usuario.nome.toLowerCase().startsWith(e.target.value.toLowerCase())) {
                findSessions = [...findSessions, user]
                setSessions(findSessions);
            }
        })
    }

    return (

        <>
            <Header underline="Home"></Header>
            <StyledHome>
            <HomeCarousel />
            <div>
                <StyledDivLogin>
                    <HomeLogin searchSessions={searchSessions} getSessions={getSessions}></HomeLogin>
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
                        <LoggedUsers sessions={sessions} getSessions={getSessions}></LoggedUsers>
                    </div>
                </StyledLoggedNow>
            </div>
            </StyledHome>
            <Footer></Footer>
        </>

    )
}
