import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu, MobileIcon} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>julia
                    </NavLogo>
                    <FaBars />
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'></NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
