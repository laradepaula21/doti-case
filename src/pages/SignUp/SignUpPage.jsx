import styled from "styled-components"
import {  CompassOutlined, EyeInvisibleOutlined, 
EyeOutlined, LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Input } from 'antd';
import { useState } from "react";

export default function SignUp() {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmedPasswordVisible, setConfirmedPasswordVisible] = useState(false);
    const [form, setForm] = useState({name: "", email: "", password: "", 
    confirmedPassword: "", adress: ""})

    

    function handleForm(e) {
        e.preventDefault();
        setForm({...form, [e.target.name]: e.target.value});
    }

    function submitForm(e) {
        e.preventDefault();
        if (form.password != form.confirmedPassword) {
            return alert("A senha e a confirmação de senha foram escritas diferentemente. " + 
            "Tente novamente")
        }
    }

    return (
    <>
    <SignUpStyled>
        <h1> Crie sua conta</h1>
        <FormStyled>
            <InputStyled placeholder="Nome" 
            prefix={<UserOutlined className="icon"/>}
            type="name"
            name="name"
            required
            value={form.name}
            onChange={handleForm}
            />
            <InputStyled placeholder="E-mail" 
            prefix={<MailOutlined className="icon"/>}
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleForm}
            />
            <InputPassword placeholder="Senha" 
            prefix={<LockOutlined className="icon"/>}
            type="password"
            name="password"
            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
            iconRender={(visible) => 
            (visible ? <EyeOutlined style={{color: "white"}}/> :
             <EyeInvisibleOutlined style={{color: "white"}}/>)}
             required
             value={form.password}
            onChange={handleForm}
            />
            <InputPassword placeholder="Confirme sua senha" 
            prefix={<LockOutlined className="icon"/>}
            visibilityToggle={{ visible: confirmedPasswordVisible, onVisibleChange: setConfirmedPasswordVisible }}
            iconRender={(visible) => 
            (visible ? <EyeOutlined style={{color: "white"}}/> :
             <EyeInvisibleOutlined style={{color: "white"}}/>)}
            type="password"
            name="confirmedPassword" 
            required
            value={form.confirmedPassword}
            onChange={handleForm}
            />
            <InputStyled placeholder="Endereço" 
            prefix={<CompassOutlined className="icon"/>}
            type="text"
            name="adress"
            required
            value={form.adress}
            onChange={handleForm}
            />
            <button type="submit" onClick={submitForm}>CADASTRAR</button>
        </FormStyled>
        <h2>Já tem uma conta? <a href="https://cpejr.com/portifolio/">Entre!</a></h2>
        <h2>Ao se registrar, você aceita nossa <br/>
            <a href="https://cpejr.com/portifolio/">política de privacidade</a> e nossos <br/>
            <a href="https://cpejr.com/portifolio/">termos de serviço</a></h2>
    </SignUpStyled>
    </>
    )
}

const SignUpStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 552px;
    height: 650px;
    margin: auto;
    margin-top: 50px;
    background-color: rgba(32, 32, 36, 0.65);
    h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 30px;
        color: #FFFFFF;
    }
    h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 15px;
        text-align: center;
        color: #FFFFFF;
    }
    a {
        color: #8257E5;
        text-decoration: underline;
    }
    a:hover {
        cursor: pointer;
        filter: brightness(120%)
    }
`

const FormStyled = styled.form`
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    input {
        width: 418px;
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
        width: 418px;
        height: 50px;
        background: #633BBC;
        border: none;
        font-weight: 600;
        font-size: 22px;
        color: #FFFFFF;
        border-radius: 9px;
        transition: all 0.3s ease-in-out;
    }
    button:hover {
        background-color: #FFFFFF;
        color: #633BBC;
    }
`

const InputStyled = styled(Input)`
    width: 418px;
    height: 38px;
    background: rgba(32, 32, 36, 1);
    border-radius: 9px;
    border: none;
    font-weight: 500;
    font-size: 18px;
    color: #DDDADA;
    ::placeholder {
        font-weight: 500;
        font-size: 18px;
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
`

const InputPassword = styled(Input.Password)`
    width: 418px;
    height: 38px;
    background: rgba(32, 32, 36, 1);
    border-radius: 9px;
    border: none;
    font-weight: 500;
    font-size: 18px;
    color: #DDDADA;
    ::placeholder {
        font-weight: 500;
        font-size: 18px;
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
`