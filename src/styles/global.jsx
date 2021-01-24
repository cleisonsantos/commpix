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
    font-family: 'Ubuntu', serif;

}

input {
        font-size: 16px;
        padding: .5rem;
        color: #444;
        border-radius: .25rem;
        border: 1px solid #ccc;
        width: 100%;
        margin: .25rem;
    }
    input:focus{
        border-color: #006c86;
        box-shadow: 0 0 0 0.2rem  #006b8660
    }

button {
    height: fit-content;
    width: fit-content;
    padding: .5rem .75rem;
    margin: .25rem;
    border-radius: 4px;
    border: 1px solid #006c86;
    cursor: pointer;
    white-space: nowrap;
    font-size: 16px;
}
button:hover {
        border-color: #006c86;
    }

`
export default GlobalStyle
