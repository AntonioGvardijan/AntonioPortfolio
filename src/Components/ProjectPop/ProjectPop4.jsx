import React from 'react'

const ProjectPop4 = ({selectedImage4, setSelectedImage4}) => {

    const handleClick4 = (e) => {
        setSelectedImage4(null);
    }

    

    return (
        <div className="backdrop" onClick={handleClick4}>
            <iframe src="https://www.youtube.com/embed/HO7KRZwaofk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p>In this Bachelor Final Project I made the animation of Island and all wonders on it. 
                The Project was made in 3D software called Blender. 
                The whole project thesis can be found <a href="https://drive.google.com/file/d/1gY9STmVnSToCf0WU7hCQ9Q2v0P--HMKg/view?usp=sharing">here.</a>
            </p>
        </div>
    )
}

export default ProjectPop4;
