import React from "react";
import styled from "styled-components";

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

const StyledHomeLogin = styled.div`

  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  line-height: 30px;
  padding: 20px 0px;
  font-size: 14px;


  @media screen and (max-width: 650px) {

    width: 100%;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 30px;
  }
`;

const StyledInputBotao = styled.div`

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

  @media screen and (max-width: 650px) {

  width: 90%;

  } 

`

const StyledBotaoLogin = styled.button`

    appearance: none;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    font-size: 14px;
    border-radius: 2px;
    border: none;
    background-color: #633bbc;
    transition: background-color 0.3s ease;

    &:hover {
    background-color: #8257E5;
    }


`

const StyledInput = styled.div`
  width: auto;
  border: 1px solid #1a1a1d;
  border-radius: 2px;
  display: flex;
  align-items: center;

  &:focus-within {
    border-color: #633bbc;
  }

  input {
    width: 100%;
    outline: none;
    background-color: #1a1a1d;
    color: white;
    padding-inline-start: 5%;
    text-align: left;
    border: none;
  }


`;

const StyledMembroInput = styled.div`

  width: 40%;
  border: 1px solid #1a1a1d;
  border-radius: 2px;
  display: flex;
  align-items: center;

  &:focus-within {
    border-color: #633bbc;
  }

  input {
    width: 100%;
    outline: none;
    background-color: #1a1a1d;
    color: white;
    padding-inline-start: 5%;
    text-align: left;
  }

  @media screen and (max-width: 650px) {

    width: 90%;

}
`;
