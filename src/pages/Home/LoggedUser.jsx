import { useEffect, useState } from "react"
import { LogoutOutlined } from "@ant-design/icons";
import perfil from "../../assets/perfil.png"
import { StyledFrase, StyledHorario, StyledLoggedInfo, StyledLogout, StyledMembros, StyledModalidade, StyledNome, StyledOutros, StyledTempo } from "./styles"
import dayjs from "dayjs";
import api from "../../services/api";

export default function LoggedUser( {name, description, time, id, getSessions}) {

    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();

    useEffect(() => {
        function getHours() {
            const timeBrazil = dayjs(time);
            const timeNow = dayjs(Date.now());
            let hourSpent = timeNow.diff(timeBrazil, 'hour', true);
            let minuteSpent = timeNow.diff(timeBrazil, 'minute', true) - Math.trunc(hourSpent)*60;

            if (hourSpent<10) {
                hourSpent = `0${Math.trunc(hourSpent)}`;
                setHours(hourSpent);
            } else {
                setHours(Math.trunc(hourSpent));
            }
            
            if (minuteSpent<10) {
                minuteSpent = `0${Math.trunc(minuteSpent)}`;
                setMinutes(minuteSpent);
            } else {
                setMinutes(Math.trunc(minuteSpent));
            }
        }
        getHours()
        const interval = setInterval(getHours, 15000)
        return () => clearInterval(interval);
    }, [])

    async function logoutSession(id) {
        try {
            const res = await api.delete(`/sessoes/${id}`)
            getSessions();
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
        <StyledMembros>
            <img src={perfil}></img>
            <StyledNome>
                <n3>{name}</n3>
                <StyledFrase>
                    <p>{description}</p>
                </StyledFrase>
            </StyledNome   >
        </StyledMembros>
        <StyledOutros>
            <StyledModalidade> 
                <StyledLoggedInfo>Remoto</StyledLoggedInfo>
            </StyledModalidade>
            <StyledHorario> 
                <StyledLoggedInfo>{time.slice(11, 16)}</StyledLoggedInfo> 
            </StyledHorario>
            <StyledTempo>  
                <StyledLoggedInfo>{hours}:{minutes}</StyledLoggedInfo> 
            </StyledTempo>
            <StyledLogout onClick={()=> logoutSession(id)}> <LogoutOutlined/> </StyledLogout>
        </StyledOutros>
        </>
    )
}