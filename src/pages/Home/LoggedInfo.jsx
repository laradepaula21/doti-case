import styled from "styled-components"


export default function LoggedInfo (props){

    return <StyledLoggedInfo>
        {props.info} 
    </StyledLoggedInfo>

}

const StyledLoggedInfo = styled.div`

    background-color: #633BBC;
    color: white;
    padding: 6px 10px;
    font-size: 14px;
    border-radius: 2px;
  
`