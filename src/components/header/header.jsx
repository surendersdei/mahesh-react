import React from 'react';
import {
    Navbar,
    Nav,
    NavItem    
} from 'reactstrap';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>            
                <Navbar color="light" light expand="md">
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about">About</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>          
        </header>
    );
}

export default Header;