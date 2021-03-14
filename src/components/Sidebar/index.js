import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen}>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink
                            to="home"
                            duration={700}
                            smooth={true}
                            spy={true}
                            exact='true'
                            offset={-70}
                            onClick={toggle}>
                            Home
                        </SidebarLink>
                        <SidebarLink to="about"
                            duration={700}
                            smooth={true}
                            spy={true}
                            exact='true'
                            offset={-70}
                            onClick={toggle}>
                            About Us
                        </SidebarLink>
                        <SidebarLink to="discover" duration={700}
                            smooth={true}
                            spy={true}
                            exact='true'
                            offset={-70}
                            onClick={toggle}>
                            Discover
                        </SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
