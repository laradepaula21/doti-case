import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {  CompassOutlined, EyeInvisibleOutlined, 
EyeOutlined, LockOutlined, MailOutlined, UserOutlined, EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import {SignUpStyled, FormStyled, InputStyled,InputPassword } from "./styles"
import { useNavigate } from "react-router-dom/dist";

export default function SignUp() {

    const navigate = useNavigate();

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmedPasswordVisible, setConfirmedPasswordVisible] = useState(false);
    const [form, setForm] = useState({name: "", email: "", password: "", 
    confirmedPassword: "", adress: "", aboutyou: ""})

    

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
            /><InputStyled placeholder="Sobre você" 
            prefix={<EditOutlined className="icon"/>}
            type="text"
            name="aboutyou"
            required
            value={form.aboutyou}
            onChange={handleForm}
            />
            <button type="submit" onClick={submitForm}>CADASTRAR</button>
        </FormStyled>
        <h2>Já tem uma conta? <a onClick={() => navigate("/login")}>Entre!</a></h2>
        <h2>Ao se registrar, você aceita nossa <br/>
            <a href="https://cpejr.com/portifolio/">política de privacidade</a> e nossos <br/>
            <a href="https://cpejr.com/portifolio/">termos de serviço</a></h2>
    </SignUpStyled>
    </>
    )
}
