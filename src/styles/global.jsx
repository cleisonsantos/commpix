import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
}

body,html {
    /*background: #3c3f43;*/
    height: 100%;
    width: 100%;
    min-height: 100vh;
    font-family: 'Raleway', sans-serif;
}

button {
    height: 2.75rem;
    width: 3rem;
    border-radius: 4px;
    border: 1px solid #006c86;
    cursor: pointer;
}

`
export default GlobalStyle