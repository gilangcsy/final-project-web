import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Icon, CloseIcon, NavLogoMobile, SearchBox, SearchBtn, SearchTxt, IconSearch, SearchResult, TitleResult, DescResult } from './NavbarElements'

const Navbar = ({ toggle, isOpen }) => {
    return (
        <>
            <Container className="sticky-top">
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            beaunature.
                        </NavLogo>
                        <NavLogoMobile to="/">
                            b.
                        </NavLogoMobile>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="/">Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="about">About Us</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="contact">Contact</NavLinks>
                            </NavItem>
                        </NavMenu>
                        {/* <SearchBox>
                            <SearchTxt placeholder="Search here..." />
                            <SearchBtn>
                                <IconSearch />
                            </SearchBtn>
                        </SearchBox> */}
                        {/* <SearchResult>
                        <TitleResult>
                            Product
                        </TitleResult>
                        <DescResult>
                            Wardah Beauty Skincare
                        </DescResult>
                    </SearchResult> */}
                        <Icon isOpen={isOpen} onClick={toggle}>
                            <CloseIcon />
                        </Icon>
                        <MobileIcon isOpen={isOpen} onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                    </NavbarContainer>
                </Nav>
            </Container>
        </>
    )
}

export default Navbar
