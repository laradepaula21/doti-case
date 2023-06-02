import { Select } from "antd";
import styled from "styled-components";



export const StyledHome = styled.div`
    width: 90%;
    margin: auto;
    background-color: black;
    color: white;
    font-family: 'Poppins', sans-serif;
    margin-top: 80px;
   
    @media screen and (max-width: 650px) {

    width: 100%;

}
`
export const StyledDivLogin = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 650px) {

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    }


`
export const StyledLoggedNow = styled.div`
    
    width: 100%;
    justify-content: center;



`
export const StyledDivTitulos = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: #1a1a1d;
    padding: 10px;
    font-size: 14px;
    font-weight: 800;



`
export const StyledMembrosTitulo = styled.div`

    width: 50%;
    display: flex;
    padding: 20px 0px;
    margin-left: 60px;
    flex-direction: row;
    text-align: center;
    align-items: center;

    @media screen and (max-width: 768px) {

        margin: 2%;

    }

`
export const StyledOutrosTitulos = styled.div`

    width: 52%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .espacoLogout{
        width: 20px;
    }
 
`
export const StyledModalidadeTitulo = styled.div `

    text-align: center;
    padding: 20px 0px;


    @media screen and (max-width: 767px) {

        display: none;

    }
`
export const StyledHorarioTitulo = styled.div `

    text-align: center;
    padding: 20px 0px;


    @media screen and (max-width: 767px) {

        display: none;

    }
`
export const StyledTempoTitulo = styled.div `

    text-align: center;
    padding: 20px 0px;

`
export const StyledDivReclamacoes = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 2%;
    padding-top: 30px;
    font-size: 16px;
`
export const StyledLinkReclamacoes = styled.a`

    cursor: pointer;
    color: white;
    font-size: 16px;

    &:hover{
        color: #633bbc;
    }


`
export const StyledHomeLogin = styled.div`

  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  line-height: 30px;
  padding: 20px 0px;

  @media screen and (max-width: 650px) {

    width: 100%;
    gap: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    line-height: 30px;

  }
`;
export const StyledInputBotao = styled.div`

    max-width: 360px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

  @media screen and (max-width: 650px) {
    width: 90%;
  }
  .ant-select-selection {
  visibility: hidden;
    }

  input {
        width: 100%;
        border: 1px solid #1a1a1d;
        border-radius: 2px;
        outline: none;
        background-color: #ffffff;;
        color: rgba(0, 0, 0, 0.88);
        padding-inline-start: 10px;
        font-size: 14px;
        &:focus-within {
            border-color: #633bbc;
        }
        @media screen and (max-width: 280px){
        font-size: 12px;
        }
    }
`
export const StyledBotaoLogin = styled.button`

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
    cursor: pointer;


    &:hover {
    background-color: white;
    color: #633bbc;
    }

    
`

export const StyledLoggedUsers = styled.div`

    width: 100%;
    display: flex;
    padding-top: 2%;
    justify-content: space-between;
    flex-direction: column;



`
export const StyledUserProfile = styled.div`

    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 14px;

`
export const StyledMembros = styled.div`

    width: 50%;
    height: 100px;
    padding: 0px 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    img{
        padding: 0px 12px;
        width: 50px;
        border-radius: 50%;
    }

    @media screen and (max-width: 767px) {

    img{
        display: none;
    }
}

`
export const StyledNome = styled.div`

    width: 100%;
    display: flex ;
    flex-direction: column;
    font-weight: 400;
    padding: 0px 12px;
`
export const StyledFrase = styled.div`

    width: 100%;
    color: gray;
    padding: 5px;

    @media screen and (max-width: 500px) {

        display: none;

    }

`
export const StyledOutros = styled.div`

    width: 50%;
    padding: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;

   
`
export const StyledModalidade = styled.div `

    width: 120px;
    text-align: center;

    @media screen and (max-width: 767px) {

        display: none;

    }
`
export const StyledHorario = styled.div `

    text-align: center;

    @media screen and (max-width: 767px) {

        display: none;

    }
`
export const StyledTempo = styled.div `

    text-align: center;
    
`
export const StyledLogout = styled.div `

    font-size: 25px;
    cursor: pointer;

    &:hover{
        color: #633bbc;
    }


`
export const StyledLoggedInfo = styled.div`

    background-color: #633BBC;
    color: white;
    padding: 6px 10px;
    font-size: 14px;
    border-radius: 2px;
  
`

export const StyledSelect = styled(Select)`
        width: 100%;
`