import { useState } from 'react'

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
padding: 0;
margin: 0;
position: fixed;
top: 0;
width: 100%;
height:80px;
background-color: #eee;

img {
    height: 3.25rem;
}
button{
    width: 54px;
}

`
const Menu = styled.menu`
    width: 100%;
    background-color: #006b86;
    height: ${props => props.toggle ? "248px": 0};
    margin-top: 80px;
    transition: all .3s ease;
    display: block;
ul li{
    transition: visibility ease-in-out;
    display: flex;
    visibility:${props => props.toggle ? "visible": "hidden"};
}

li a{
    width: 100%;
    padding: 20px 40px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
}
li a:hover {
    background-color: #009486;
}

`

function Navbar(props) {

    let [toggle, setToggleMenu] = useState(false);
    let [icon, setIcon] = useState(faBars)
    function toggleMenu() {
        setToggleMenu(toggle ? toggle = false : toggle = true)
        toggleIcon(toggle)
    }

    function toggleIcon(status) {
        setIcon(status ? icon = faTimes : icon = faBars);
    }
    return (
        <>
            <Nav >
                <a href="/"><img src={logo} alt="Logo" /></a>
                <button onClick={toggleMenu}>
                <FontAwesomeIcon icon={icon} size="2x" color="#7f8082" />
                </button>
            </Nav>
            <Menu toggle={toggle}>
                <ul>
                    <li><a href="/chaves">Minhas chaves pix</a></li>
                    <li><a href="/servicos">Serviços</a></li>
                    <li><a href="/colaboradores">Colaboradores</a></li>
                    <li><a href="/sair">sair</a></li>
                </ul>
            </Menu>
        </>
    )
}

export default Navbar