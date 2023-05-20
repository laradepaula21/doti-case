import styled from "styled-components";


export const StyledPaginaProdutos = styled.div`
    display:flex;
    width: 100%;
    justify-content: space-between;
    min-width: 360px;
    @media(max-width: 600px) {
        flex-direction: column; 
        align-items: center;
        margin-top: 10px;
        width: 100%; 
        text-align: center;
        padding: 10px;   
    }
`
export const StyledEsquerda = styled.div`
    font-family: 'Poppins', sans-serif;
    display:flex;
    flex-direction: column;
    width: 55%;
    color: white;
    align-items:center;
    margin-top: 200px;
    padding-left: 60px;
    h1 {
        font-size: 60px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    p{
        font-size: 20px;
        line-height: 30px;
        color: #DCDCE1;
    }
    @media(max-width: 600px) {
        margin-top: 30px;
        margin-bottom: 30px;
        width:100%;
        padding-left: 0px;
    }

`
export const StyledDireita = styled.div`
    display:flex;
    flex-direction: column;
    width: 45%;
    padding-right: 20px;
    @media(max-width: 600px) {
        align-items: center;
        margin-top: 10px;
        width: 100%;
        max-height: 360px; 
        text-align: center;
        /* margin-right: 10px; 
        margin-left: 10px; */
    }
`
export const StyledCentroEsquerda = styled.div`
    align-items: start;
    width: 100%;
 

    @media(max-width: 600px) {
        
    }
`

