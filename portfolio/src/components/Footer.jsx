import React from 'react';
import { send } from 'emailjs-com'
import { useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'

function Footer(props) {
    const [toSend, setToSend] = useState({
        from_name: '',
        reply_to: '',
        message: '',
    })
const onSubmit = (e) => {
    e.preventDefault();
    send(
        'service_kha9tv9',
        'template_71l45tv',
        toSend,
        '7GOX69CJ_1K9opo29'
    )
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setToSend({
        from_name: '',
        reply_to: '',
        message: '',
        })
        document.querySelector(".message-confirm").style.visibility = "visible"
    })
    .catch((err) => {
        console.log('FAILED...', err);
    });
    
}

const handleChange = (e) =>{
    setToSend({...toSend, [e.target.name] :e.target.value})
}


    return (
        <div className="footer-box">
            <div className="form-header">
                <h3 style={{paddingLeft: "10px"}}>Connect With Me</h3>
                <div className='message-confirm'>
                        <AiOutlineCheckCircle style={{
                            fontSize:"30px",
                            position: "relative",
                            left: "-5px",
                            top: "5px"}}/>
                message sent!</div>
            </div> 
            <form className="connect-form" onSubmit={onSubmit} autoComplete="off">
                <input type="text" placeholder="name" name='from_name' value={toSend.from_name} onChange={handleChange}></input><br></br>
                <input type="text" placeholder="your email" name='reply_to' value={toSend.reply_to} onChange={handleChange} /><br></br>
                <textarea type="textarea" placeholder="message" name ='message' id="message" value={toSend.message} onChange={handleChange}></textarea><br></br>
                <input type="submit" value='send'></input>
            </form>
        </div>
    );
}

export default Footer;