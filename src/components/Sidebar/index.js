import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'

const Sidebar = ({ isOpen }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen}>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="/">
                            Home
                        </SidebarLink>
                        <SidebarLink to="/">
                            About Us
                        </SidebarLink>
                        <SidebarLink to="/">
                            Contact
                        </SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
