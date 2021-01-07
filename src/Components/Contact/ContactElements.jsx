import styled from 'styled-components'

export const ContactContainer = styled.div`
    display:block;
    width: 100%;
    color: white;
    justify-content: center;
    max-width: 768px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin: 0 auto;
`
export const ContactH1 = styled.h1`
    width: 100%;
    font-size: clamp(20px, 6vw, 60px);
    padding-top: 15px;
    margin-top: 100px;
`

export const ContactText = styled.p`
    width: 100%;
    font-size: clamp(var(--fz-sm),5vw,var(--fz-md));
    padding-top: 50px;
`

export const ContactBtn = styled.button`
    border-radius: 4px;
    display: block;
    margin: 0 auto;
    color: white;
    background: transparent;
    border: 1px solid #5EC8D2;
    margin-top: 50px;
`

export const ContactBtnLink = styled.div`
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

export const ContactWrap = styled.div`
    margin: 0 auto;
    justify-content: center;
    align-items:center;
    display: block;
`

export const ContactFooter = styled.p`
    margin: 0 auto;
    margin-top: 200px;
    margin-bottom: 20px;
    text-align: center;
    
`