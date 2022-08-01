import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zwih21l', 'template_z81kjtj', form.current, 'TVKP97vAriwjufPeD').then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    };
    return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    )
}

export default Contact