import React from "react";
import {StyledHomeLogin, StyledMembroInput, StyledInputBotao,StyledInput,StyledBotaoLogin } from "./styles"

export default function HomeLogin() {
  return (
    <StyledHomeLogin>
      <StyledMembroInput>
        <input type="text" placeholder="Pesquisar membros" />
      </StyledMembroInput>
      <StyledInputBotao>
        <StyledInput>
          <input type="text" placeholder="Digite o nome do membro" />
        </StyledInput>
        <StyledBotaoLogin>Login</StyledBotaoLogin>
      </StyledInputBotao>
    </StyledHomeLogin>
  );
}
