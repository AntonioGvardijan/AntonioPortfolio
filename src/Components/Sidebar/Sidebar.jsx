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
                        <SidebarLink to="home" onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Home</SidebarLink>
                        <SidebarLink to="about" onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >About</SidebarLink>
                        <SidebarLink to="project" onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Projects</SidebarLink>
                        <SidebarLink to="contact" onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Contact</SidebarLink>
                    </SidebarMenu>
                    <SidebarBtn>
                        <SidebarBtnLink><a href="https://drive.google.com/file/d/1YulIIaGMmJzJT4B-H4AIAHo36tZPSaf_/view?usp=sharing">Resume</a></SidebarBtnLink>
                    </SidebarBtn>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
