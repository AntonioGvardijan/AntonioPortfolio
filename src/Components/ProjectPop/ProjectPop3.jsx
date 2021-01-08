import React from 'react'

const ProjectPop3 = ({selectedImage3, setSelectedImage3}) => {

    const handleClick3 = (e) => {
        setSelectedImage3(null);
    }

    

    return (
        <div className="backdrop" onClick={handleClick3}>
            <img src={selectedImage3} alt="Project 3"/>
            <p>This is a University project for Marie S. Curie project where we needed to design a game or 
                application for children with difficulties in studies. The Project was held on European 
                level and all of
                featured works from Croatia were displayed at event called "Noć istraživača u Hrvatskoj" 
                in Tunnel Grič, Zagreb.
            </p>
        </div>
    )
}

export default ProjectPop3;
