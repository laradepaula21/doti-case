import styled from "styled-components"
import logoDoti from "../assets/logoDoti.png"
import ItemMenu from "./ItemMenu"
import Menu from "./Menu"
import { UserOutlined } from '@ant-design/icons'

const menuOpcoes = [
    {
        pagina: "Home",
        navigate: "Home"
    },
    {
        pagina: "Blog",
        navigate: "Blog"    
    },
    {
        pagina: "Produtos",
        navigate: "produtos"
    }
]

export default function Header(props) {


    const menu = menuOpcoes.map(n => (
        <ItemMenu ativo={props.underline == n.pagina ? true : false} nome={n.pagina} nav={n.navigate} key={n.pagina}></ItemMenu>
    ))

    return (<header>
        <StyledHeaderDesktop>
            <img src={logoDoti} alt="logoDoti" />
            {menu}
            <a href="./../../">
            <StyledUser>
            <UserOutlined />

                <h2>Olá, Usuário</h2>
            </StyledUser>
            </a>
        </StyledHeaderDesktop>
        <StyledHeaderMobile>
        <img src={logoDoti} alt="logoDoti" />
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
        width: 30px;
        padding: 3px;
    }
    img {
        height: 40px;
        width: auto;
    }
    @media(min-width: 600px){
        display:none;
    }
`

const StyledUser = styled.div`
    font-size: 20px;
    display: flex;
    gap: 20px;
    padding: 10px
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
            font-size: 27px;
            padding-right: 20px;
        }
        ion-icon {
            font-size: 27px;
        }
    }
    @media(max-width: 600px){
        display:none;
    }
`

