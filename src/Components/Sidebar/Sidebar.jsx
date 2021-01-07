import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarBtn,
    SidebarBtnLink
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon></CloseIcon>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="home" onClick={toggle}>Home</SidebarLink>
                        <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                        <SidebarLink to="project" onClick={toggle}>Projects</SidebarLink>
                        <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
                    </SidebarMenu>
                    <SidebarBtn>
                        <SidebarBtnLink><a href="mailto:a@gmail.com">Contact Me</a></SidebarBtnLink>
                    </SidebarBtn>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
