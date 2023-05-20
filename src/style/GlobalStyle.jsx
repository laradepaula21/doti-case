import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Poppins', sans-serif;
}
body {
    background-color: #1A1A1D;
    width: 100vw;
    height: 100%;
    overflow-x: hidden;
}
`

export default GlobalStyle;