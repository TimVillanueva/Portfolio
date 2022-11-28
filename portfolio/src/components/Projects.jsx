import React from 'react';



function Projects(props) {
    return (
    <div className="project-container">
        <div className= "grid-item">PokeAPI Project
            <a href="https://timvillanueva.github.io/" target="_blank">
                <img className="projectImage" src="https://i.imgur.com/BKNAGskm.png" alt="project1" id="pokedex"/>
            </a>
        </div>
        <div className= "grid-item">React API Project
            <a href="https://bigandsmallpetadoption.netlify.app/" target="_blank">
                <img className="projectImage" src="https://i.imgur.com/IHG8fjdl.png" alt="project2" id="petAdoption"/>
            </a>
        </div>
        <div className= "grid-item">Full Stack PERN Project<a  href="google.com" target="_blank"><img className="projectImage" src="" alt="project3"/></a></div>
        <div className= "grid-item"><a  href="google.com" target="_blank"><img className="projectImage" src="" alt="project4"/></a></div>

    </div>
    );
}

export default Projects;