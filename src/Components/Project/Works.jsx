import React from 'react';
import image1 from '../../Images/0285.png';
import image2 from '../../Images/House test.png';
import image3 from '../../Images/MarieProject.PNG';
import image4 from '../../Images/otok.jpg';
import image5 from '../../Images/Marie S. Curie projekt.png';
import {FaAngleRight} from 'react-icons/fa'
import {
    ProjectContainer,
    ProjectH1,
    ProjectWrap,
    ProjectCard,
    ProjectImage,
    ProjectH2,
    ProjectBtn,
    ProjectText
} from './WorksElements';


const Project = ({setSelectedImage1, setSelectedImage2, setSelectedImage3, setSelectedImage4}) => {

    return(
        <ProjectContainer id='project'>
            <ProjectWrap>
            <ProjectH1><FaAngleRight className="inline my-color"></FaAngleRight>My Projects</ProjectH1>
            
                <ProjectCard
                    onClick={()=> setSelectedImage1(image1)} 
                >
                    <ProjectImage src={image1} alt="Project1"></ProjectImage>
                    <ProjectH2>Ball Animation</ProjectH2>
                    <ProjectBtn>See video</ProjectBtn>
                </ProjectCard>
                <ProjectCard
                onClick={()=> setSelectedImage2(image2)}
                >
                    <ProjectImage src={image2} alt="Project2"></ProjectImage>
                    <ProjectH2>Room on Beach</ProjectH2>
                    <ProjectBtn>See Image</ProjectBtn>
                </ProjectCard>
                <ProjectCard
                onClick={()=> setSelectedImage3(image5)}
                >
                    <ProjectImage src={image3} alt="Project3"></ProjectImage>
                    <ProjectH2>Marie S. Curie Project</ProjectH2>
                    <ProjectBtn>See Image</ProjectBtn>
                </ProjectCard>
                <ProjectCard
                onClick={()=> setSelectedImage4(image4)}
                >
                    <ProjectImage src={image4} alt="Project4"></ProjectImage>
                    <ProjectBtn>See Video</ProjectBtn>
                    <ProjectH2>Bachelor Final Project</ProjectH2>
                </ProjectCard>
                
            </ProjectWrap>
        </ProjectContainer>
    )
}

export default Project;