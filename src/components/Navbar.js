import logo from '../logo.svg';

import styled from "styled-components"

const Nav = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-around;
border-button: 1px solid #ccc;
box-shadow: ;
padding: 10px;

img {
    height: 75px;
}

ul li{
    
    display: none;
    flex-direction: colum;
}

li a{
    padding: 10px;
    background: 
}
`


function Navbar() {
    return(
        <Nav >
            <img src={logo} alt="Logo" />
            <div>

            </div>
            <ul>
                <li><a href="/servicos">Cadastrar serviço</a></li>
                <li><a href="/colaborador">Cadastrar colaborador</a></li>
                <li><a href="/sair">sair</a></li>
            </ul>
        </Nav>
    )
}

export default Navbar