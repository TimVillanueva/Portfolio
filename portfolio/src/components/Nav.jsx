import React from 'react';
import { Link } from 'react-router-dom'

function Nav(props) {
    return (
        <div className="nav">
            <ul className="nav-ul">
                <li className="nav-li"><Link to="/AboutMe">About Me</Link></li>
                <li className="nav-li"><Link to="/Resume">Resume</Link></li>
                <li className="nav-li"><Link to="/Projects">Projects</Link></li>
            </ul>
            
        </div>
    );
}

export default Nav;