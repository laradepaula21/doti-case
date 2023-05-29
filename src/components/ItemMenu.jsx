import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function ItemMenu(props) {


    const navigate = useNavigate();

    return (
        <StyledItemMenu active={props.ativo} onClick={()=> navigate(`./../${props.nav}`)}>{props.nome}</StyledItemMenu>
    )

}

const StyledItemMenu = styled.div`
    color: white;
    height: 100%;
    display: flex; 
    align-items:center;
    font-size: 2em;
    font-weight: 600;
    cursor: pointer;
    border-bottom: solid 3px #000000;
    
    &:hover{
        opacity: .8;
        transition: .8s;
    }

    @media(max-width: 950px){
        font-size: 1.5em;
    }

    ${({ active }) => active && `
    border-bottom: solid 3px #8257E5;
  `}
`