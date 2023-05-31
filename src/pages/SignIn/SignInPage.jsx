import { EyeInvisibleOutlined, 
EyeOutlined, LockOutlined, MailOutlined} from "@ant-design/icons";
import { useState } from "react";
import { FormStyled, InputStyled,InputPassword, SignInStyled, LogoStyled, LogoStyleResponsive } from "./styles"
import logoDoti from "../../assets/logoDoti.png"
import { useNavigate } from "react-router-dom";

export default function SignIn() {

    const navigate = useNavigate()

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [form, setForm] = useState({email: "", password: ""})

    

    function handleForm(e) {
        e.preventDefault();
        setForm({...form, [e.target.name]: e.target.value});
    }

    function submitForm(e) {
        e.preventDefault();
    }

    return (
    <>
    <LogoStyled>
        <img src={logoDoti} alt="logoDoti" />  
        <h1>Bem vindo ao Doti! Faça seu login na plataforma</h1>
    </LogoStyled>
    
    <LogoStyleResponsive>
        <img src={logoDoti} alt="logoDoti" />  
        <h1>Bem vindo ao Doti! Faça seu login na plataforma</h1>
    </LogoStyleResponsive>

    <SignInStyled>
        <FormStyled>
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
            <button type="submit" onClick={submitForm}>CADASTRAR</button>
        </FormStyled>
        <h2>Não tem uma conta? <a onClick={() => navigate("/")}>Registre-se</a></h2>
    </SignInStyled>
    </>
    )
}