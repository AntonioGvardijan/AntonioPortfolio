import React, {useState} from 'react';
import { useEffect } from 'react';
import {FaBars} from 'react-icons/fa';
import logo from '../../Images/Logo/Logo2.png';
import {animateScroll as scroll} from 'react-scroll';
import {
    Nav, 
    NavBarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink

} from './NavElements'

const Navigation = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    })

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavBarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        <img src={logo} className="h-4/5"></img>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars></FaBars>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="home"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            activeClass="active"
                            >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="project"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Contact</NavLinks>
                        </NavItem>
                        <NavBtn>
                        <NavBtnLink><a href="https://drive.google.com/file/d/104v9Mq6n5l2w1VJ5i-Oy07RExSFL_GON/view?usp=sharing">Resume</a></NavBtnLink>
                    </NavBtn>
                    </NavMenu>
                    
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default Navigation
