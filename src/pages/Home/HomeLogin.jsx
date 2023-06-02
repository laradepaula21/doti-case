import React from "react";
import {StyledHomeLogin, StyledInputBotao,StyledBotaoLogin } from "./styles"
import HomeSelect from "./HomeSelect";
import { Input } from "antd";

export default function HomeLogin({searchSessions}) {

  return (
    <StyledHomeLogin>
      <StyledInputBotao>
            <Input type="text" placeholder="Pesquisar membros" onChange={searchSessions}/>
        </StyledInputBotao>
        <StyledInputBotao>
          <HomeSelect></HomeSelect>
        <StyledBotaoLogin>Login</StyledBotaoLogin>
        </StyledInputBotao>
    </StyledHomeLogin>
  );
}