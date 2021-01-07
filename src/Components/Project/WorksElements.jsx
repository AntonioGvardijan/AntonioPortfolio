import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'

export const ProjectContainer = styled.div`

    display:block;
    width: 100%;
    color: white;
    justify-content: center;
    margin-top: 50px;
    
`

export const ProjectH1 = styled.h1`
    width: 100%;
    font-size: clamp(20px, 6vw, 60px);
    padding-top: 15px;
`

export const ProjectWrap = styled.div`
    width: 100%;
    max-width: 768px;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 16px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin: 0 auto;
`

export const ProjectCard = styled.div`
    background: #222222;
    color: white;
    display: block;
    align-items: center;
    border-radius: 10px;
    position: relative;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        
    }
`

export const ProjectImage = styled.img`
    width: 100%;
    border-radius: 10px;
    filter: grayscale(100%);
    transition: all 0.2s ease-in-out;

    &:hover{
        filter: grayscale(0%);
        transition: all 0.2s ease-in-out;
    }
`

export const ProjectBtn = styled.button`
    border-radius: 4px;
    background: transparent;
    white-space: nowrap;
    padding: 5px 11px;
    color: white;
    border: 1px solid #5EC8D2;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    z-index: 3;
    position: absolute;
    bottom: 11px;
    right: 8px;

    &:hover{
        transition: all 0.2 ease-in-out;
        background: rgba(119, 253, 200, 0.3);
    }
`

export const ProjectH2 = styled.h2`
    font-size: 1rem;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    bottom: 0;
    padding: 16px 16px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 2;
`
export const ProjectText =styled.p`
    display: none;
    position: fixed;
    top: 0;
    left: 20%;
    display: ${({isText}) => (isText ? 'none' : 'block')};
`