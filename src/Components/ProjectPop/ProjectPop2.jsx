import React from 'react'

const ProjectPop2 = ({selectedImage2, setSelectedImage2}) => {

    const handleClick2 = (e) => {
        setSelectedImage2(null);
    }

    

    return (
        <div className="backdrop" onClick={handleClick2}>
            <img src={selectedImage2} alt="Project2"/>
            <p>This Room interior is made in 3D software named Blender. Tools to make building and windows is used ArchiMesh (free addon inside Blender) while water, shore and trees are made by hand and using Node Editor to manipulate textures.</p>
        </div>
    )
}

export default ProjectPop2;
