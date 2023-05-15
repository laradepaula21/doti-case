import styled from "styled-components"
import logoDoti from "../assets/logoDoti.png"
import { useNavigate } from "react-router-dom"

export default function Header({underline}) {

    const navigate = useNavigate();

    return (
        <StyledHeader>
            <img src={logoDoti} alt="logoDoti" />
            <h1 className={underline == "home" ? "underline" : ""}
            onClick={() => navigate("/")}
            >Home</h1>
            <h1 className={underline == "blog" ? "underline" : ""}
            onClick={() => navigate("/blog")}
            >Blog</h1>
            <h1 className={underline == "products" ? "underline" : ""}
            onClick={() => navigate("/produtos")}
            >Produtos</h1>
            <div>
                <h2>Olá, Usuário</h2>
                <ion-icon name="person"></ion-icon>
            </div>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    background-color: #121214;
    width: 100vw;
    height: 80px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
        height: 40px;
        width: auto;
    }
    h1 {
        font-weight: 600;
        font-size: 27px;
        color: #DCDCE1;
        position: relative;
    }
    h1:hover {
        cursor: pointer;
        filter: brightness(107%)
    }
    h1::after {
        content: '';
        display: block;
        width: 0;
        height: 4px;
        background-color: #8257E5;
        position: absolute;
        bottom: -27px;
        left: 0;
        transition: width 0.3s ease-in-out;
    }
    h1:hover::after {
        width: 100%;
    }
    .underline::after {
        content: '';
        display: block;
        width: 100%;
        height: 4px;
        background-color: #8257E5;
        position: absolute;
        bottom: -27px;
        left: 0;
    }
    div {
        display: flex;
        align-items: center;
        h2 {
            color: #FFFFFF;
            font-weight: 600;
            font-size: 27px;
            padding-right: 20px;
        }
        ion-icon {
            font-size: 27px;
        }
    }
`