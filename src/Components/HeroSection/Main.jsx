import React from 'react';
import logo from '../../Images/Logo/Logo2.png';
import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll'

/*flex flex-column flex-wrap*/
/*<div className="w-full block text-white max-w-screen-md">
            <p className="text-2xl">Hi, my name is</p>
            <p className="text-2xl">Antonio Gvardijan</p>
            <p className="text-2xl pb-4">bacc. ing. techn. inf.</p>
            <p className="text-2xl">I'm a web developer and designer based in Zagreb, Croatia specializing in building and designing 
            web pages, designing promotional material and creating 3D videos.
            </p>
        </div>*/

        const PointerClick = styled(LinkS)`
    
        position: absolute;
        width: 4vw;
        height: 10vw;
        top: 85%;
        margin: -2vh -1vw; 
        cursor: pointer; 

         `

const Main = () =>{

    

    return(
    <div className="w-full flex flex-column flex-wrap relative pt-6 justify-center h-screen" id="home">
        <div className="w-full" id="home">
            <img src={logo} className="w-full m-auto max-w-screen-md"></img>
        </div>
        
        <div className="w-full px-6 block text-white max-w-screen-md">
            <p className="text-id-small my-color">Hi, my name is</p>
            <p className="text-id">Antonio Gvardijan</p>
            <p className="text-id-small pb-4">bacc. ing. techn. inf.</p>
            <p className="text-id-small2">I'm a web developer and designer based in Zagreb, Croatia specializing in building and designing 
            web pages, designing promotional material and creating 3D videos.
            </p>
        </div>     

        <div className="w-full"></div>
        <div className="w-full"></div>
        
        <div className="indicator">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        
        <PointerClick to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
        >
        </PointerClick>

        <div orientation="left" className="left-bar">
            <div className="github-div"><a href="#">github</a></div>
        </div>

        <div orientation="right" className="right-bar">
            <div className="email-div"><a href="mailto:gvardijan.a@gmail.com">gvardijan.a@gmail.com</a></div>
        </div>
        

        
        
    </div>
        
    )
}



export default Main
