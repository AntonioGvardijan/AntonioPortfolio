import React from 'react';
import Logo from '../../Images/Logo/Logo_without_text.png';

import {
    SplashContainer,
    SplashLogo,
    SplashLoader
} from './SplashElements';

const Splash = () => {
    return(
        <SplashContainer>
            <SplashLogo>
                <img src={Logo} alt="Logo"/>
            </SplashLogo>
            <SplashLoader>
                
            </SplashLoader>
        </SplashContainer>
    )
}

export default Splash;