import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
h5{
    margin:3px 0 10px 0;
}
`;

function Resume(props) {


    return (
        <Container>
        <div className="main-box" id="resume-box">
            <div>
                <h4 style={{marginBottom:5}}>Experience</h4>
                <h5>Software Engineering Immersive | General Assembly | October 2022 – January 2023</h5>
                <h5>ER Veterinary Technician | Pet Specialists of Austin | February 2022–September 2022</h5>
                <h5>ER Department Coordinator | OakVet Animal Specialty Hospital | November 2020–December 2021</h5>
            </div>
            <div>
                <h4 style={{marginBottom:-10}}>Skills</h4>
                <ul >
                    <li style={{marginBottom:5}}>Programming Languages: Javascript, Java, C++, C#, Python3, HTML 5, CSS</li>
                    <li style={{marginBottom:5}}>Frameworks: ReactJS, Object-Oriented Java, Express, Bootstrap</li>
                    <li style={{marginBottom:5}}>Databases: Postgres, DjangoDB</li>
                    <li style={{marginBottom:5}}>Tools: NodeJS, Postico, Insomnia, GitHub</li>
                </ul>
            </div>
        </div>
        </Container>
    );
}

export default Resume;