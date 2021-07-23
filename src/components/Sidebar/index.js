import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen}>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="/">
                            Home
                        </SidebarLink>
                        <SidebarLink to="/about">
                            About Us
                        </SidebarLink>
                        <SidebarLink to="/showcase">
                            Project Showcase
                        </SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
