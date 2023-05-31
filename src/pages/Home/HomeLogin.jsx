import React from "react";
import {StyledHomeLogin, StyledInputBotao,StyledInput,StyledBotaoLogin } from "./styles"

export default function HomeLogin({searchMembers}) {
  return (
    <StyledHomeLogin>
            <input type="text" placeholder="Pesquisar membros" onChange={searchMembers}/>
        <StyledInputBotao>
            <input type="text" placeholder="Digite o nome do membro" />
        <StyledBotaoLogin>Login</StyledBotaoLogin>
        </StyledInputBotao>
    </StyledHomeLogin>
  );
}