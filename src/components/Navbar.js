import logo from '../logo.svg';

import styled from "styled-components"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Nav = styled.nav`
display: flex;
flex-direction: row;
flex-grow: 0;
justify-content: space-around;
align-items: center;
box-shadow: 2px 0px 3px black;
padding: 5px;
position: fixed;
width: 100%;
height:80px;

img {
    height: 3.5rem;
    width: auto;
}


`
const Menu = styled.menu`
ul li{
    position: absolute;
    display: flex;
    flex-direction: colum;
    top: -100%;
}

li a{
    padding: 10px;
}
`

function Navbar() {
    return (
        <>
            <Nav >
                <img src={logo} alt="Logo" />
                <FontAwesomeIcon icon={faBars} size="2x" color="#7f8082" />
            </Nav>
            <Menu>
            <ul>
                <li><a href="/servicos">Cadastrar serviço</a></li>
                <li><a href="/colaborador">Cadastrar colaborador</a></li>
                <li><a href="/sair">sair</a></li>
            </ul>
            </Menu>
        </>
    )
}

export default Navbar