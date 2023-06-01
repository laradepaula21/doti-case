import React from "react";
import {StyledHomeLogin, StyledInputBotao,StyledBotaoLogin } from "./styles"

export default function HomeLogin({searchMembers, setMembers}) {
  return (
    <StyledHomeLogin>
      <StyledInputBotao>
            <input type="text" placeholder="Pesquisar membros" onChange={searchMembers}/>
        </StyledInputBotao>
        <StyledInputBotao>
            <input type="text" placeholder="Digite o nome do membro" />
        <StyledBotaoLogin>Login</StyledBotaoLogin>
        </StyledInputBotao>
    </StyledHomeLogin>
  );
}