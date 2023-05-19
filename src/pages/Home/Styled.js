import styled from "styled-components";

const StyledLoggedUsers = styled.div`
    
    background-color: black;
    color: white;
    margin: 10%;

    .CampoTitulos{
        background-color: #646262;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px;
        font-family: 'Poppins', sans-serif;
        font-size: 24px;

    }

`

const StyledLogged = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
   
    .Profile{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 8%;
         img{
        width: 40px;
        border-radius: 50%;
    }

    }

`

const StyledLoggedInfo = styled.div`
    background-color: #633BBC;
    color: white;
    padding: 5px 8px;
    display: inline;
    justify-content: space-between;
    text-align: center;
    font-family: 'Poppins', sans-serif;

`