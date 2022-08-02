import React, {useContext, useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'
import { themeContext } from "../../Context";

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zwih21l', 'template_z81kjtj', form.current, 'TVKP97vAriwjufPeD').then((result) => {
            console.log(result.text);
            setDone(true);
            form.reset();
        }, (error) => {
            console.log(error.text);
        });

    };
    return (
        <div className="contact" id="contact">
            <div className="c-left">
                <span style={{color: darkMode ? 'white': ''}}>Contact me</span>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' className='user' placeholder='Name'/>
                    <input type="email" name='user_email' className='user' placeholder='Email'/>
                    <textarea name="message" className="user" placeholder="Message"/>
                    <input type="submit" value="Send" className="button"/>
                    <span>{done && "Thanks for Contacting me"}</span>
                </form>
            </div>
        </div>
    )
}

export default Contact