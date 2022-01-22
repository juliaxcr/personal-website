import React from 'react'
import {SidebarContainer, Icon, CloseIcon} from './SidebarElements'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about'>
                About
                </SidebarLink>
                <SidebarLink to='projects'>
                Projects 
                </SidebarLink>
                <SidebarLink to='photography'>
                Photography
                </SidebarLink>
                <SidebarLink to='contact'>
                Contact
                </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
