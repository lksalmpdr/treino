import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../../logo.jpg';
import './menu.css';


const Header = () =>{
    return(
        <Navbar bg="light" expand="lg" className="menu">
            <Navbar.Brand>
                <img 
                    src={logo}
                    alt="logo"
                    width="80px"
                    height="80px"
                    style={{borderRadius:"40px"}}
                />Meu Treino</Navbar.Brand>
        </Navbar>
    );
}

export default Header;