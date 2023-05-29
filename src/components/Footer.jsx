import styled from "styled-components";
import { FacebookFilled, TwitterSquareFilled, WifiOutlined} from '@ant-design/icons'

export default function Footer() {

    return <StyledFooter>
       <StyledIcons>
        <FacebookFilled />
        <TwitterSquareFilled />
        <WifiOutlined />
       </StyledIcons>
       <div>
            <p>
            Blog da Rocketseat © 2023 • Publicado com Ghost
            </p>
       </div>
       <div className="infoJs">

            <p>
            Informações de licensa javaScript
            </p>
       </div>
    </StyledFooter>
}

const StyledFooter = styled.div`
    width: 100vw;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: white;
    background-color:black;
    font-size: 12pt;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    text-align: center;

    .infoJs {
        font-weight: 100;
        text-decoration: underline;
        color: #B0B0B0;
        cursor: pointer;

    }

`
const StyledIcons = styled.div`
    display: flex;
    font-size: 30px;
    gap: 60px;
    margin: 10px;
    cursor: pointer;
`