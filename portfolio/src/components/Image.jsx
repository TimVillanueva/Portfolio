import React from 'react';
import headshot from '../assets/headshot.jpeg'
import styled from 'styled-components'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'


const Container = styled.div `
.links{
    disply:flex;
    flex-direction:column;
    height: 150px;
    width: 65px;
    position: absolute;
    top: 130px;
    right:300px;
}
.linkedin, .github{
    font-size: 65px;
    color:black;
}
.linkedin{
    color:#0072b1;
}

`;

function Image(props) {
    return (
        <Container>
        <div className="image-box">
            <div className="links">
            <a className="github" href="https://github.com/TimVillanueva" target="_blank"><AiFillGithub/></a>
            <a className="linkedin" href="https://www.linkedin.com/in/timothy-villanueva/" target="_blank"><AiFillLinkedin/></a>
            
            </div>
            <img src={headshot} className="headshot" />
        </div>
        </Container>
    );
}

export default Image;