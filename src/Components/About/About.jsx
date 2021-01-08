import React from 'react'
import {FaAngleRight} from 'react-icons/fa'
import {
    AboutContainer,
    AboutWrap,
    AboutH1,
    AboutText,
    AboutList,
    ABoutListItem,
} from './AboutElements';

const About = () => {
    return (
        <AboutContainer id="about">
            <AboutWrap>
                <AboutH1>
                <FaAngleRight className="inline my-color"></FaAngleRight>About Me
                </AboutH1>
                <AboutText>
                    Hello! I'm Antonio, a web developer and designer based in Zagreb, Croatia.
                </AboutText>
                <AboutText>
                    I love making content that lives on the internet, whatever that be websites, banners, images for promotion or anything similar.
                    My goal is to make everything perfect and pleasing to see. 
                </AboutText>
                <AboutText>
                    I have graduated at <span className=" my-color">Zagreb University of Applied Sciences</span>
                     in 2020 with a Final Bachelor Project in 3D design and animation. I love expanding my knowledge and 
                     skills and try to improve on my existing skills all the time.
                    Here are a few technologies and programs I'm working with:
                </AboutText>
                <AboutList>
                    <ABoutListItem>
                        <FaAngleRight className="inline my-color"></FaAngleRight>HTML and CSS
                    </ABoutListItem>
                    <ABoutListItem>
                        <FaAngleRight className="inline my-color"></FaAngleRight>Javascript
                    </ABoutListItem>
                    <ABoutListItem>
                        <FaAngleRight className="inline my-color"></FaAngleRight>React
                    </ABoutListItem>
                    <ABoutListItem>
                        <FaAngleRight className="inline my-color"></FaAngleRight>Github
                    </ABoutListItem>
                    <ABoutListItem>
                        <FaAngleRight className="inline my-color"></FaAngleRight>Image and video manipulation (Adobe Creative Cloud)
                    </ABoutListItem>
                    <ABoutListItem>
                        <FaAngleRight className="inline my-color"></FaAngleRight>3D modeling and animation (Blender and Maya)
                    </ABoutListItem>                       
                </AboutList>
            </AboutWrap>
        </AboutContainer>
    )
}

export default About
