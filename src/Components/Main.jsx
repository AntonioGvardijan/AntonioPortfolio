import React from 'react';
import logo from '../Images/Logo/Logo2.png';

/*flex flex-column flex-wrap*/

function Main(){
    return(
    <div className="w-full flex flex-column flex-wrap justify-center relative h-screen">
        <div className="w-full my-12">
            <img src={logo} className="w-4/5 max-w-screen-sm"></img>
        </div>
        
            <h4 className="w-full max-w-screen-sm mx-4 my-12">I'm a web developer and designer based in Zagreb, Croatia specializing in building and designing 
                web pages, designing promotional material and creating 3D videos.
            </h4>
        
        
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