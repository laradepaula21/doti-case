import styled from "styled-components"
import Blog_banner from '../../assets/Blog_banner.png'


export const StyledBlog = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    color: white;
    font-family: 'Poppins', sans-serif;
    width:100%;
    @media screen and (min-width: 840px) {
        margin-top: 80px;
    }
    @media(max-width: 600px) {
    
    gap: 10px;
    }
`
export const StyledNewsLetter = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 30vw;
    background: linear-gradient(62deg, rgba(34,19,70,1) 0%, rgba(0,0,0,1) 55%, rgba(14,77,12,1) 100%);
    min-height: 135px;


    div {
        height: 30vw;
        font-size: 1.5em;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        color: white;

        p {
            max-width: 600px;
            text-align: center;
        }
        h1 {
            font-size: 1.5em;
            font-weight: bold;
        }
        button {
            min-width: 250px;
            border-radius: 10px;
            padding: 10px;
            font-size: 16px; 
            cursor: pointer;
            color: #333333;
        }
    }

    @media(max-width: 600px) {
        div {
        width: 100vw;
        height: auto;
        min-height: 135;
        font-size: 10pt;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        color: white;

        h1 {
            font-size: 20pt;
            font-weight: bold;
        }
        button {
            min-width: 50px;
            border-radius: 5px;
            padding: 5px;
            font-size: 8pt; 
            cursor: pointer;
            color: #333333;
        }
    }
    }
`
export const StyledNoticias = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px;
    justify-content: center;

    @media(max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    }
`
export const StyledPost = styled.div`
    font-family: 'Poppins', sans-serif;
    width: 100%;
    max-width: 465px;
    height: 250px;
    color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    padding: 8px 15px;
    font-size: 20px;
    position: relative;
    img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
    }
    div{
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    h1 {
        font-size: 35px;
    }
    .data{
        font-size: 12px;
    }

    @media(max-width: 600px) {    
    width: 100%;
    height: 200px;
    color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    padding: 5px  5px;
    font-size: 12pt;

    div{
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    h1 {
        font-size: 35px;
    }
    .data{
        font-size: 12px;
    }
    }
`