import React from 'react';
import {FaAngleRight} from 'react-icons/fa'
import {
    ContactContainer,
    ContactH1,
    ContactText,
    ContactBtn,
    ContactBtnLink,
    ContactFooter,
    ContactWrap
} from './ContactElements'

const Contact = () => {
    return(
        <>
            <ContactContainer id="contact">
                <ContactH1><FaAngleRight className="inline my-color"></FaAngleRight>Get In Touch!</ContactH1>
                <ContactText>I'm always looking for new opportunities and challenges as well as gaining new experiences. 
                    If you want to know more about me, hire me or just say hi, I'll always response to you!</ContactText>
                <ContactWrap>
                    <ContactBtn>
                        <ContactBtnLink><a href="mailto:gvardijan.a@gmail.com">Contact Me</a></ContactBtnLink>
                    </ContactBtn>
                    <ContactFooter>Designed & Built by <span className="my-color">Antonio Gvardijan</span></ContactFooter>
                </ContactWrap>
            </ContactContainer>
        </>
    )
}

export default Contact