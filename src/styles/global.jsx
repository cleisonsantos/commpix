import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`


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
    font-family: 'Antic Slab', serif;

}

button {
    height: 2.75rem;
    width: 3rem;
    border-radius: 4px;
    border: 1px solid #006c86;
    cursor: pointer;
}
button:hover {
        border-color: #006c86;
    }

`
export default GlobalStyle