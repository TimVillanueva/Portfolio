import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Projects from './Projects';
import { useTransition, a } from 'react-spring'


function Main(props) {

    const location = useLocation()
    const transitions = useTransition(location, {
    from: { x:-500, opacity:0 },
    enter: { x:0, opacity:1 },
})

    return (
        transitions((styles, item) => (
            <a.div style={styles}>
            <Routes location={item}>
                <Route exact path='/' element={<AboutMe />} />
                <Route exact path="/AboutMe" element={<AboutMe />}/>
                <Route exact path="/Resume" element={<Resume />}/>
                <Route exact path="/Projects" element={<Projects/>}/>
            </Routes>
        </a.div>
    )));
}

export default Main;