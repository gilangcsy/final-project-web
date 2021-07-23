import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContent from '../MainContent'
import Footer from '../Footer'
import Hero from '../Hero'
import Title from "../ContentTitle/"
import Home from '../Home'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Icon, CloseIcon, NavLogoMobile, SearchBox, SearchBtn, SearchTxt, IconSearch, SearchResult, TitleResult, DescResult } from './NavbarElements'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Navbar = ({ toggle, isOpen }) => {
    return (
        <>
            <Router>
                <Nav>
                    <Container>
                        <NavbarContainer>
                            <NavLogo
                                to="home"
                                duration={700}
                                smooth={true}
                                spy={true}
                                exact='true'
                                offset={70}
                            >
                                Android UPNVJ
                            </NavLogo>
                            <NavLogoMobile
                                to="home"
                                duration={700}
                                smooth={true}
                                spy={true}
                                exact='true'
                                offset={70}
                            >
                                b.
                            </NavLogoMobile>
                            <NavMenu>
                                <NavItem>
                                    <NavLinks to="/">Home</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to="/about">About Us</NavLinks>
                                </NavItem>
                                {/* <NavItem>
                                    <NavLinks
                                        to="discover"
                                        duration={700}
                                        smooth={true}
                                        spy={true}
                                        exact='true'
                                        offset={-70}
                                    >Discover
                                    </NavLinks>
                                </NavItem> */}
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
                    </Container>
                </Nav>
                <Switch>
                    <Route path="/" exact>
                        <Hero />
                        <Home />
                    </Route>
                    <Route path="/about" exact>
                        <Title title="Anggota" />
                        <MainContent
                            title="Toni Kroos"
                            type="upper"
                            mdoffset="2"
                            lgoffset="1"
                            img="ang1.png"
                            width="300"
                            quote="'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'"
                            pos="Ketua Umum"
                        />

                        <MainContent
                            title="Toni Kroos"
                            type="lower"
                            mdoffset="0"
                            lgoffset="0"
                            img="ang1.png"
                            width="300"
                            quote="'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'"
                            pos="Ketua Umum"
                        />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default Navbar
