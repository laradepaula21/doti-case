import LoggedInfo from "./LoggedInfo";
import perfil from "../../assets/perfil.png"
import { LogoutOutlined } from "@ant-design/icons";
import {StyledLoggedUsers, StyledUserProfile, StyledMembros, StyledNome, StyledFrase, StyledOutros, 
StyledModalidade, StyledHorario, StyledTempo,StyledLogout} from "./styles"
import { useState } from "react";


export default function LoggedUsers( { users }) {

    const [members, setMembers] = useState(users);

    // function searchMembers(e) {
    //     e.preventDefault();
    //     setMembers([]);
    //     console.log(e.target.value)
    //     Users.find(user => {
    //         if (e.target.value === "") return setMembers(Users)
    //         else if (user.nome.toLowerCase().includes(e.target.value.toLowerCase())) {
    //             setMembers([...members, user]);
    //         }
    //     })
    // }

    return (
        <>
        {/* <StyledHomeLogin>
            <StyledMembroInput>
                <input type="text" placeholder="Pesquisar membros" onChange={searchMembers}/>
            </StyledMembroInput>
            <StyledInputBotao>
                <StyledInput>
                <input type="text" placeholder="Digite o nome do membro" />
                </StyledInput>
                <StyledBotaoLogin>Login</StyledBotaoLogin>
            </StyledInputBotao>
        </StyledHomeLogin> */}

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


