import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
}

body {
    /*background: #3c3f43;*/
    height: 100%;
    width: 100%;
}
`
export default GlobalStyle