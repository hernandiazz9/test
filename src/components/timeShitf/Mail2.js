import React,{useState} from 'react';
import emailjs from 'emailjs-com';


export default function ContactUs() {

    const [namee, setName] = useState('')
    const [text, setText] = useState('')
    const [templateParams, setTemplateParams] = useState({})

  function sendEmail(e) {
    e.preventDefault();
     var TemplateParams = {
        'name':namee,
        'message':text
    }
    emailjs.send('gmail', 'template_dmOSpb9g' , TemplateParams, 'user_A2WeTf5ce49gG0fU3X3aY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input 
        type="text"
        onChange={e=>setName(e.target.value)}
        name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" onChange={e=>setText(e.target.value)} />
      <input type="submit" value="Send" />
    </form>
  );
}