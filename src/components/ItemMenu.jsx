import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function ItemMenu(props) {

    const navigate = useNavigate();
 
    return (
        <StyledItemMenu onClick={()=> navigate(`./../${props.nav}`)}>{props.nome}</StyledItemMenu>
    )

}

const StyledItemMenu = styled.li`
    color: white;
    height: 100%;
    display: flex; 
    align-items:center;
    font-size: 27px;
    font-weight: 600;
    cursor: pointer;

    .underline {
        border-bottom: solid 3px #8257E5;
    }
`