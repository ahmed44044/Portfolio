import { useRef, type FormEvent } from 'react'
import './Contact.css'
import ContactData from './ContactData'
import emailjs from '@emailjs/browser'
export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null)

   const sendEmail = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      if (!form.current) return;

    emailjs
      .sendForm('service_gttc9d5', 'template_h03sfuf', form.current,'VYL63bQNrasEV_Rqc',
      )
     form.current.reset()
  };
  return (
    <section className='contact' id='contact'>
       <div className="top-section">
        <h5>Get in </h5>
        <h2>Contact Me</h2>
      </div>
      <div className="container container-contact">
        <div className="contact-options">
          {ContactData.map(({id,icon,title,info,link})=>(
            <article key={id} className='contact-option'>
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target='_blank'>Send Message</a>
            </article>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Full Name' />
          <input type="email" placeholder='Your Email' name="email"  />
          <textarea rows={10} placeholder='Enter Your Message' name="message"></textarea>
          <button className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
