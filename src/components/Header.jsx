import styled from "styled-components"
import logoDoti from "../assets/logoDoti.png"
import ItemMenu from "./ItemMenu"

const menuOpcoes = [
{
    pagina: "home",
    navigate: ""
},
{
    pagina: "blog",
    navigate: "blog"

},
{
    pagina: "products",
    navigate: "produtos"
}
]

export default function Header(props) {

    const menu = menuOpcoes.map(n=> (
        <ItemMenu nome={n.pagina} nav={n.navigate} className="underline" key={n.pagina}></ItemMenu>
    ))

    return (
        <StyledHeader>
            <img src={logoDoti} alt="logoDoti" />
            {menu}
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
