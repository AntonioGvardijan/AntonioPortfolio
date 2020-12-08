import React from 'react';
import logo from '../Images/Logo/Logo2.png';

/*flex flex-column flex-wrap*/
/*<div className="w-full block text-white max-w-screen-md">
            <p className="text-2xl">Hi, my name is</p>
            <p className="text-2xl">Antonio Gvardijan</p>
            <p className="text-2xl pb-4">bacc. ing. techn. inf.</p>
            <p className="text-2xl">I'm a web developer and designer based in Zagreb, Croatia specializing in building and designing 
            web pages, designing promotional material and creating 3D videos.
            </p>
        </div>*/

function Main(){
    return(
    <div className="w-full flex flex-column flex-wrap relative pt-6 justify-center h-screen">
        <div className="w-full">
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
        
        
        
    </div>
        
    )
}

export default Main