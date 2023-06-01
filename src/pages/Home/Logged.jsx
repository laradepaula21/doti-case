import LoggedInfo from "./LoggedInfo";
import { LogoutOutlined } from "@ant-design/icons";
import {StyledLoggedUsers, StyledUserProfile, StyledMembros, StyledNome, StyledFrase, StyledOutros, 
StyledModalidade, StyledHorario, StyledTempo,StyledLogout} from "./styles"
import { useState } from "react";


export default function LoggedUsers( { members }) {

    return (
        <>
        <StyledLoggedUsers>
            {members.map((user, index) =>
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
                       <StyledLogout onClick={()=> console.log(`Deslogado`)}> <LogoutOutlined/> </StyledLogout>
                    </StyledOutros>
                </StyledUserProfile>
            )}
        </StyledLoggedUsers>
        </>
    );
}


