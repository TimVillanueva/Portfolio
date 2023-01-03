import React from 'react';
import {DiReact, DiJavascript1, DiHtml5, DiPostgresql,DiPython} from 'react-icons/di'
import {SiDjango} from 'react-icons/si'


function AboutMe(props) {
    
    return (
        <div className="main-box" id="aboutMe-box">
        
            <div className="aboutMe-title">
                Hi, I am
            </div>
            <div className="aboutMe-title" id='aboutMe-name'>
                Tim Villanueva
            </div>
            <h2 className="aboutMe-subheading">Austin, Tx based Full-Stack Software Engineer</h2>

            <h3 className ="brandStatement"> I am a full stack software engineer with a Bachelor's degree in 
Psychology. I believe in using a wide array of perspectives and methodologies to create elegant, thoughtful, and powerful code with the user at the forefront.
            </h3>
        <div className = "icons">
            <div className= "icon-items">
                <DiReact/>
                <DiJavascript1/>
                <DiHtml5/>
                <DiPostgresql/>
                <DiPython/>
                <SiDjango style={{fontSize:"35px", padding:"10px"}}/></div>
            <div className="icon-hidden">
                <h6>React</h6>
                <h6>JavaScript</h6>
                <h6> HTML5 </h6>
                <h6>Postgres</h6>
                <h6>Python</h6>
                <h6>Django</h6>
            </div>

        </div>
        </div>
    );
}

export default AboutMe;