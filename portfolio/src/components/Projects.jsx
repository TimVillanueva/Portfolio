import React from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { BsInfoCircle, BsBoxArrowInUpRight  } from 'react-icons/bs'

function Projects(props) {

const iconStyle = {
    fontSize:"35px",
    color:"black"
}

    return (
    <div className="main-box" id="project-container">
        <div className= "grid-item"><h5>PokeAPI Project</h5>
            <div className="project-icons">
                <a href="https://github.com/TimVillanueva/timvillanueva.github.io" target="_blank"><AiFillGithub style={iconStyle}/></a>
                <BsInfoCircle style={iconStyle} className="info"/>
                
                <div className="projectHover" id="project1">My first project. I utilized JS + HTML/CSS along with the PokeAPI to create a working searchable Pokedex. </div>
            </div>
            <a href="https://timvillanueva.github.io/" target="_blank">
                <img className="projectImage" src="https://i.imgur.com/BKNAGskm.png" alt="project1" id="pokedex"/>
            </a>
            
        </div>
        <div className= "grid-item"><h5>React API Project</h5>
            <div className="project-icons">
                <a href="https://github.com/TimVillanueva/AdoptionSite" target="_blank"><AiFillGithub style={iconStyle}/></a>
                <BsInfoCircle style={iconStyle} className="info"/>
                <div className="projectHover" id="project2">This project focuses on React functionality and creating a styled front end. Using the Pet Finder API, I created this pet adoption site! </div>
            </div>
            <a href="https://bigandsmallpetadoption.netlify.app/" target="_blank">
                <img className="projectImage" src="https://i.imgur.com/IHG8fjdl.png" alt="project2" id="petAdoption"/></a>
        </div>
        <div className= "grid-item"><h5> Outdoorsy PERN Project</h5>
            <div className="project-icons">
                <a href="https://github.com/TimVillanueva/Project3-Client" target="_blank"><AiFillGithub style={iconStyle}/></a>
                <BsInfoCircle style={iconStyle} className="info"/>
                <div className="projectHover" id="project3">A full stack PERN single page application. Our team created a restful API with full CRUD to map recreation activities using React-Leaflet (currently not deployed)</div>
            </div>
            <a href="https://github.com/TimVillanueva/Project3-Client" target="_blank"><img className="projectImage" src="https://i.imgur.com/Ahdqaotm.png" alt="project3" style={{scale:"1.0"}}/></a>
        </div>
        <div className= "grid-item"><h5>Test Maker PERN Project</h5>
            <div className="project-icons">
                <a href="https://github.com/TimVillanueva/TestForm_Generator" target="_blank"><AiFillGithub style={iconStyle}/></a>
                <BsInfoCircle style={iconStyle} className="info"/>
                <div className="projectHover" id="project4">Utilizing PERN and @syncfusion, users can create question banks and generate test forms from them. Inspired by my fiancee, a high school teacher (currently not deployed)</div>
            </div>
            <a  href="https://github.com/TimVillanueva/TestForm_Generator" target="_blank"><img className="projectImage" src="https://i.imgur.com/5tju3bEm.png" alt="project4"/></a>
        </div>

    </div>
    );
}

export default Projects;

//