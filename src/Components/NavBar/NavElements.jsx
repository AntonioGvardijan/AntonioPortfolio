import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: ${({ scrollNav}) => (scrollNav ? '#222222' : 'transparent')};
    display: flex;
    height: 80px;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.8s all ease;

    @media screen and (max-width: 768px) {
        transition: 0.8s all ease;
    }
`

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 100%;

    @media screen and (max-width: 768px){
        max-width: 768px;
    }
`

export const NavLogo = styled(LinkS)`
    color: #fff;
    height: 80px;
    cursor: pointer; 
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 70%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px){
        display:none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #77FDC8;
    }

    &:hover{
        transition: all 0.2 ease-in-out;
        background: rgba(119, 253, 200, 0.3);
    }
`

export const NavBtn = styled.nav`
    display:flex;
    align-items: center;
    border-radius: 4px;
    color: white;
    background: transparent;
    border: 1px solid #5EC8D2;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled.div`
    
    white-space: nowrap;
    padding: 5px 11px;
    color: white;
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2 ease-in-out;
        background: rgba(119, 253, 200, 0.3);
    }
`

