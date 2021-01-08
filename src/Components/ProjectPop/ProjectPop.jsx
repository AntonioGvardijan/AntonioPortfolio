import React from 'react'

const ProjectPop = ({selectedImage1, setSelectedImage1}) => {

    const handleClick1 = (e) => {
        setSelectedImage1(null);
    }

    

    return (
        <div className="backdrop" onClick={handleClick1}>
            <iframe  src="https://www.youtube.com/embed/48m_PGwSbX8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p>This Ball animation is made by using 3D software called Blender. Animation 
                is made so it can loop, what is perfect for social platforms like Instagram or Facebook. 
                All textures and transitions are made in Node Editor inside Blender.
            </p>
        </div>
    )
}

export default ProjectPop;
