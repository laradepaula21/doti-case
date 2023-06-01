import { EyeInvisibleOutlined, 
EyeOutlined, LockOutlined, MailOutlined} from "@ant-design/icons";
import { useState } from "react";
import { FormStyled, InputStyled,InputPassword, SignInStyled, LogoStyled, ContainerSignIn } from "./styles"
import logoDoti from "../../assets/logoDoti2.png"
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function SignIn() {

    const navigate = useNavigate()

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [form, setForm] = useState({email: "", senha: ""})

    

    async function handleForm(e) {
        e.preventDefault();
        setForm({...form, [e.target.name]: e.target.value});
    }

    async function submitForm(e) {
        e.preventDefault();
        try {
            const res = await api.post("/login", form);
            console.log(res.data);
            navigate("/home")
        } catch (err) {
            alert(err.response.data.message);
        }
    }

    return (
    <ContainerSignIn>
        <LogoStyled>
            <img src={logoDoti} alt="logoDoti" />  
            <h1>Bem vindo ao Doti! Faça seu login na plataforma</h1>
        </LogoStyled>

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
                name="senha"
                visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                iconRender={(visible) => 
                (visible ? <EyeOutlined style={{color: "white"}}/> :
                <EyeInvisibleOutlined style={{color: "white"}}/>)}
                required
                value={form.senha}
                onChange={handleForm}
                />
                <button type="submit" onClick={submitForm}>CADASTRAR</button>
            </FormStyled>
            <h2>Não tem uma conta? <a onClick={() => navigate("/")}>Registre-se</a></h2>
        </SignInStyled>
    </ContainerSignIn>
    )
}