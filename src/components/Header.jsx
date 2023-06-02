import styled from "styled-components"
import logoDoti from "../assets/logoDoti.png"
import logoDoti2 from "../assets/logoDoti2.png"
import ItemMenu from "./ItemMenu"
import Menu from "./Menu"
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import useAuthStore from "../stores/auth"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const menuOpcoes = [
    {
        pagina: "Home",
        navigate: "home"
    },
    {
        pagina: "Blog",
        navigate: "blog"    
    },
    {
        pagina: "Produtos",
        navigate: "produtos"
    }
]

export default function Header(props) {

    const navigate = useNavigate()

    const usuario = useAuthStore((state) => state.usuario);
    const clearAuth = useAuthStore((state) => state.clearAuth);

    const menu = menuOpcoes.map(n => (
        <ItemMenu ativo={props.underline == n.pagina ? true : false} nome={n.pagina} nav={n.navigate} key={n.pagina}></ItemMenu>
    ))

    function handleLogout() {
        clearAuth();
        navigate("/login");
    }

    return (<header>
        <StyledHeaderDesktop>
            <img src={logoDoti} alt="logoDoti" />
            {menu}
            <StyledUser>
                <div onClick={() => navigate("/editar")}>
                    <UserOutlined />
                    <h2>Olá, {usuario.nome.slice(0, 10)}</h2>
                </div>
                <LogoutOutlined onClick={handleLogout}/>
            </StyledUser>
        </StyledHeaderDesktop>
        <StyledHeaderMobile>
        <img src={logoDoti2} alt="logoDoti" />
        <Menu mode="inline" defautOpenKeys={["dashboard"]}></Menu>
        </StyledHeaderMobile>
        </header>
    )
}

const StyledHeaderMobile = styled.div`

    width:100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 2px;
    background-color: #000000;

    svg{
        width: 30px;
        height: 30px;
        margin-top: 8px;
    }

    div {
        /* width: 30px; */
        padding: 3px;
    }
    img {
        height: 40px;
        /* width: auto; */
    }

    @media(min-width: 840px){
        display:none;
    }
`
const StyledUser = styled.div`
    font-size: 2rem;
    display: flex;
    color: white;
    div {
    gap: 20px;
    padding: 10px;
    }
    div:hover{
    cursor: pointer;
    opacity: .8;
    transition: .8s;
    }
    h2{
        font-size:1.8rem;
    }

`

const StyledHeaderDesktop = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    background-color: #121214;
    width: 100vw;
    height: 80px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: solid 3px #000000;
    position: fixed;
    top: 0;
    z-index: 10;

    a{
    color: white;

    &:hover{
    opacity: .8;
    transition: .8s;
    }
    }

    img {
        height: 40px;
        width: auto;
    }

    div {
        display: flex;
        align-items: center;
        h2 {
            color: #FFFFFF;
            font-weight: 600;
            font-size: 1.8rem;
            padding-right: 20px;
        }
    }

    @media(max-width: 839px){

        div{
            h2{
                font-size: 1rem;
            }
        }
    }

    @media(max-width: 839px){
        display:none;
    }
`