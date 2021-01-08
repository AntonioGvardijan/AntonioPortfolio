import styled from 'styled-components';
import {keyframes} from 'styled-components';

const loader = keyframes`
    0%{
        left: 0;
        opacity: 1;
    }
    70%{
        left: 0;
        opacity: 1;
    }
    99%{
        left: 0;
        opacity: 0;
    }
    100%{
        left: 100%;
    }

`

const shrinkLogo = keyframes`
    0% {
        width: 15%;
    }
    50% {
        width: 15%;
    }
    100% {
        width: 1%;
    }
`
const shrinkRotate = keyframes`
    0% {
        width: 20vw;
        height: 20vw;
    }
    50% {
        width: 20vw;
        height: 20vw;
    }
    100% {
        width: 1vw;
        height: 1vw;
    }
`

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

export const SplashContainer = styled.div`
    z-index: 1000;
    opacity: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 100%;
    background: #282B35;
    animation: ${loader} 7s linear;
`

export const SplashLogo = styled.div`
    width: 15%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: ${shrinkLogo} 7s linear;

    @media screen and (max-width: 540px){
        width: 25%;
    }

`

export const SplashLoader = styled.div`
    width: 20vw;
    height: 20vw;
    color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: ${shrinkRotate} 7s linear;
    

    &::after{
        content: " ";
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: ${rotate} 3s linear infinite;
    }

    @media screen and (max-width: 540px){
        width: 30vw;
        height: 30vw;
    }


`
