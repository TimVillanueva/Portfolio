import React from 'react';
import Nav from './Nav';

function Header(props) {
    return (
        <div className="header-box">
            <div className="myName"> Tim Villanueva </div>
            <Nav/>
        </div>
    );
}

export default Header;