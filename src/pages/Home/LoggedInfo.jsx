import styled from "styled-components"


export default function LoggedInfo (props){

    return <StyledLoggedInfo>
        {props.info} 
    </StyledLoggedInfo>

}

const StyledLoggedInfo = styled.div`
    background-color: #633BBC;
    color: white;
    padding: 5px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    font-family: 'Poppins', sans-serif;

`