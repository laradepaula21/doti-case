import styled from "styled-components";
import { Input } from 'antd';

export const LogoStyled = styled.div`
    width: 300px;
    margin-top: 10%;
    margin-left: 20%;
    img {
        width: 240px;
    }
    h1 {
        font-family: 'Poppins', sans-serif;;
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        color: white;
    }
    @media(max-width: 912px) {
        visibility: hidden;
    }
`
export const LogoStyleResponsive = styled.div`
    width: 250px;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 50%; 
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 150px;
    }h1 {
        font-family: 'Poppins', sans-serif;;
        font-style: normal;
        font-weight: 700;
        font-size: 1.2rem;
        color: white;
    }
    @media(max-width: 912px) {
        visibility: visible;
    }
`

export const SignInStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 352px;
    height:450px;
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    margin: auto 0;
    margin-left: 60%;
    background-color: rgba(32, 32, 36, 0.65);
    border-radius: 10px;
    h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 13px;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 40px;
    }
    a {
        color: #8257E5;
        text-decoration: underline;
    }
    a:hover {
        cursor: pointer;
        filter: brightness(120%)
    }
    @media(max-width: 912px) {
        width: 50%;
        margin: auto;
        margin-top: 10%;
    }
    @media(max-width: 600px){
        width: 80%;
        margin: auto;
        margin-top: 23%;
        h1{
            font-size:20px;
        }
    }
`

export const FormStyled = styled.form`
    height: 450px;
    display: flex;
    flex-direction: column;
    input {
        width: 248px;
        height: 38px;
        background: rgba(32, 32, 36, 0.65);
        border-radius: 9px;
        border: none;
        font-weight: 500;
        font-size: 18px;
        color: #DDDADA;
    }
    input::placeholder {
        font-weight: 500;
        font-size: 18px;
        color: #DDDADA;
    }
    button {
        font-family: 'Poppins', sans-serif;
        width: 248px;
        height: 40px;
        background: #633BBC;
        border: none;
        font-weight: 600;
        font-size: 18px;
        color: #FFFFFF;
        border-radius: 9px;
        margin-top: 40px;
        transition: all 0.3s ease-in-out;
        @media(max-width: 600px){
        width: 80%;
        align-items: center;

    }
    }
    button:hover {
        background-color: #FFFFFF;
        color: #633BBC;
    }
    @media(max-width: 600px){
        width: 80%;
        align-items: center;

    }
`

export const InputStyled = styled(Input)`
    width: 248px;
    margin-top: 100px;
    height: 38px;
    background: rgba(32, 32, 36, 1);
    border-radius: 9px;
    border: none;
    font-weight: 500;
    font-size: 14px;
    color: #DDDADA;
    ::placeholder {
        font-weight: 500;
        font-size: 14px;
        color: #DDDADA;
    }
    input {
        height: 30px;
    }
    :focus-within{
        .icon {
            color: #633BBC;
        }
        filter: brightness(120%)
    }
    :hover {
        .icon {
            color: #633BBC;
        }
        filter: brightness(120%)
    }
    @media(max-width: 600px){
        width: 80%;
    }
`

export const InputPassword = styled(Input.Password)`
    width: 248px;
    height: 38px;
    background: rgba(32, 32, 36, 1);
    border-radius: 9px;
    border: none;
    font-weight: 500;
    font-size: 14px;
    color: #DDDADA;
    margin-top: 40px;
    ::placeholder {
        font-weight: 500;
        font-size: 14px;
        color: #DDDADA;
    }
    input {
        height: 30px;
    }
    :focus-within{
        .icon {
            color: #633BBC;
        }
        filter: brightness(120%)
    }
    :hover {
        .icon {
            color: #633BBC;
        }
        filter: brightness(120%)
    }
    @media(max-width: 600px){
        width: 80%;
    }
`