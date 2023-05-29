import styled from "styled-components";


export const StyledGeral = styled.div`
    font-family: 'Poppins', sans-serif;
    color: white;
    padding: 10px;
    display: flex;

    img {
        margin-top: 12px;
        width: 150px;
    }
    h1 {
        font-size: 25px;
        font-weight: 450;
        margin-top: 10px;
        line-height: 30px;
    }
    h2 {
        line-height: 20px;
        font-size: 15px;
        margin-top: 20px;
    }
    svg {
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
    a{
        color:white;
    }
`
export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: #DCDCE1;
    width: 100%;
    @media(max-width: 800px) {
        flex-direction: column; 
        padding: 10px;   
        text-align: center;
    }
`

