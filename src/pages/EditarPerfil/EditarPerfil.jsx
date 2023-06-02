import Footer from "../../components/Footer";
import Header from "../../components/Header";
import api from "../../services/api";
import {EditStyled, FormStyled, InputStyled } from "./styles"
import {CompassOutlined, UserOutlined ,EditOutlined} from "@ant-design/icons";
import { useState } from "react";
import useAuthStore from "../../stores/auth";
import { useNavigate } from "react-router";

export default function EditarPerfil() {

    const navigate = useNavigate();

    const usuario = useAuthStore((state) => state.usuario);
    const setToken = useAuthStore((state) => state.setToken);

    const [form, setForm] = useState({nome: "", email: "", endereco: "", descricao: ""})

    function handleForm(e) {
        e.preventDefault();
        setForm({...form, [e.target.name]: e.target.value}); 
    }

    async function submitForm(e) {
        e.preventDefault();
        try {
            form.email = usuario.email;
            const res = await api.put(`/usuarios/${usuario._id}`, form);
            const { token } = res.data;
            console.log(token)
            setToken(token);
            navigate("/home");
        } catch (err) {
            console.log(err)
            // alert(err.response.data.message);
        }
    }
    
    return (
    <>
    <Header underline=""></Header>
    <EditStyled>
        <h1> Edite seu perfil</h1>
        <FormStyled>
            <InputStyled placeholder="Nome" 
            prefix={<UserOutlined className="icon"/>}
            type="name"
            name="nome"
            required
            value={form.nome}
            onChange={handleForm}
            />
            <InputStyled placeholder="Endereço" 
            prefix={<CompassOutlined className="icon"/>}
            type="text"
            name="endereco"
            required
            value={form.endereco}
            onChange={handleForm}
            />
            <InputStyled placeholder="Sobre você" 
            prefix={<EditOutlined className="icon"/>}
            type="text"
            name="descricao"
            required
            value={form.descricao}
            onChange={handleForm}
            />
            <button type="submit" onClick={submitForm}>SALVAR</button>
        </FormStyled>
    </EditStyled>
    <Footer></Footer>
    </>
    )
}
