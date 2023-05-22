import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {EditStyled, FormStyled, InputStyled } from "./styles"
import {CompassOutlined, UserOutlined ,EditOutlined} from "@ant-design/icons";
import { useState } from "react";

export default function EditarPerfil() {


    const [form, setForm] = useState({name: "", email: "", adress: "", aboutyou: ""})

    function handleForm(e) {
        e.preventDefault();
        setForm({...form, [e.target.name]: e.target.value});
    }

    function submitForm(e) {
        e.preventDefault();
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
            name="name"
            required
            value={form.name}
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
            <InputStyled placeholder="Sobre você" 
            prefix={<EditOutlined className="icon"/>}
            type="text"
            name="aboutyou"
            required
            value={form.aboutyou}
            onChange={handleForm}
            />
            <button type="submit" onClick={submitForm}>SALVAR</button>
        </FormStyled>
    </EditStyled>
    <Footer></Footer>
    </>
    )
}
