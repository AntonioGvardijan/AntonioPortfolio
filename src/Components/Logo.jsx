// className="container flex justify-center" className="container flex justify-center"

import React from 'react';
import logo from '../Images/Logo/Logo2.png';

function Logo(){
    return(
        <div className="container flex justify-center">
            <img src={logo} className="w-4/5 my-8"></img>
        </div>
    )
}

export default Logo