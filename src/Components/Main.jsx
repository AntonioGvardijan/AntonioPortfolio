import React from 'react';
import logo from '../Images/Logo/Logo2.png';

/*flex flex-column flex-wrap*/
/*<h4 className="w-full max-w-screen-sm mx-4 my-12">I'm a web developer and designer based in Zagreb, Croatia specializing in building and designing 
            web pages, designing promotional material and creating 3D videos.
        </h4>*/

function Main(){
    return(
    <div className="w-full flex flex-column flex-wrap relative justify-center h-screen">
        <div className="w-full py-12">
            <img src={logo} className="block mx-auto max-w-screen-sm"></img>
        </div>
        
        <p className="w-full text-white max-w-screen-sm mx-4 my-12">I'm a web developer and designer based in Zagreb, Croatia specializing in building and designing 
            web pages, designing promotional material and creating 3D videos.
        </p>

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