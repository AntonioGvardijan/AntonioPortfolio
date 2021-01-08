import React, {useState} from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Main from '../HeroSection/Main'
import Navigation from '../NavBar/Navigation'
import Project from '../Project/Works'
import ProjectPop from '../ProjectPop/ProjectPop'
import ProjectPop2 from '../ProjectPop/ProjectPop2'
import ProjectPop3 from '../ProjectPop/ProjectPop3'
import ProjectPop4 from '../ProjectPop/ProjectPop4'
import Sidebar from '../Sidebar/Sidebar'
import Splash from '../Splash/Splash'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const[selectedImage1, setSelectedImage1] = useState(null);
    const[selectedImage2, setSelectedImage2] = useState(null);
    const[selectedImage3, setSelectedImage3] = useState(null);
    const[selectedImage4, setSelectedImage4] = useState(null);
 

    return (
        <>
            <Splash></Splash>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navigation toggle={toggle} />
            <Main/>
            <About/>
            <Project 
            setSelectedImage1={setSelectedImage1} 
            setSelectedImage2={setSelectedImage2} 
            setSelectedImage3={setSelectedImage3} 
            setSelectedImage4={setSelectedImage4}/>
            { selectedImage1 && <ProjectPop selectedImage1={selectedImage1} setSelectedImage1={setSelectedImage1}/> }
            { selectedImage2 && <ProjectPop2 selectedImage2={selectedImage2} setSelectedImage2={setSelectedImage2}/> }
            { selectedImage3 && <ProjectPop3 selectedImage3={selectedImage3} setSelectedImage3={setSelectedImage3}/> }
            { selectedImage4 && <ProjectPop4 selectedImage4={selectedImage4} setSelectedImage4={setSelectedImage4}/> }
            <Contact/>
        </>
    )
}

export default Home;
