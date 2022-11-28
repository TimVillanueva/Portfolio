import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Projects from './Projects';

function Main(props) {
    return (
        <div className="main-box">
            <Routes>
                <Route exact path='/' element={<AboutMe/>}/>
                <Route exact path="/AboutMe" element={<AboutMe/>}/>
                <Route exact path="/Resume" element={<Resume/>}/>
                <Route exact path="/Projects" element={<Projects/>}/>
            </Routes>
        </div>
    );
}

export default Main;