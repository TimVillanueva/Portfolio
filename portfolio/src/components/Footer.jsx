import React from 'react';

function Footer(props) {
    return (
        <div className="footer-box">
            <h3 style={{paddingLeft: "10px", paddingTop: "10px"}}>Connect With Me</h3>
            <form className="connect-form">
                <input type="text" placeholder="email"></input><br></br>
                <input type="text" placeholder="subject"></input><br></br>
                <textarea type="textarea" placeholder="message" id="message"></textarea><br></br>
                <input type="submit" value='send'></input>
            </form>
        </div>
    );
}

export default Footer;