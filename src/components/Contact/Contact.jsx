/*import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { API } from '../data/data'
import LoadingSpinner from '../loader/LoadingSpinner'

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleContact = async(e)=>{
    e.preventDefault();
    setLoading(true);

    try {
      const responce = await fetch(`${API}/mail/send`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({email, name, phone, message})
      })
      if(responce.ok){
        alert("Mail Send Successfully....!!!")
        setEmail("");
        setName("");
        setPhone("");
        setMessage("");
      }
    } catch (error) {
      console.log(error)
      alert("failed to send Email....!!!")
    }finally{
      setLoading(false)
    }
  }
  return (
    <div className='contact'>
      <div className="contact-co">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form
             or find our contact information below. Your feedback,
              questions, and suggestions are important to us as we 
              strive to provide exceptional service to our university
               community.</p>
               <ul>
                <li><img src={mail_icon} alt="" />pavancreativehub@gmail.com</li>
                <li> <img src={phone_icon} alt="" />+91 6303966182</li>
                <li><img src={location_icon} alt="" />Main road, Karlemma, Kotturu, Srikakulam, Andhra Pradesh, 532455</li>
               </ul>
      </div>
      <div className="contact-co">
        <form onSubmit={handleContact}>
          <label>Email</label>
          <input type="email" required={true} value={email} onChange={(e)=> setEmail(e.target.value)} name="email" placeholder='Enter Your Name' id="" />
            <label>
                Your Name :
            </label>
            <input type="text" required={true} value={name} onChange={(e)=> setName(e.target.value)} name="name" placeholder='Enter Your Name' id="" />
            <label>Phone :</label>
            <input type="tel" required={true} value={phone} onChange={(e)=> setPhone(e.target.value)} name='phone' placeholder='Enter Your mobile Number'/>
            <label >Write your message here</label>
            <textarea name="message" required ={true} value={message} onChange={(e)=> setMessage(e.target.value)} rows='6' id="" placeholder='Enter your message'></textarea>
            <button type='submit' className='btn dark-btn'>
              {loading ? <LoadingSpinner />: 'Submit'}</button> 
        </form>
        <span></span>
      </div>
    </div>
  )
}

export default Contact*/
import React, { useState } from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import { API } from '../data/data';

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state

  const handleContact = async(e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    try {
      const response = await fetch(`${API}/mail/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, name, phone, message })
      });
      if (response.ok) {
        alert("Mail Sent Successfully....!!!");
        setEmail("");
        setName("");
        setPhone("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to send Email....!!!");
    } finally {
      setLoading(false); // Set loading to false after completion
    }
  };

  return (
    <div className='contact'>
      <div className="contact-co">
        <h3>Send us a message <img src={msg_icon} alt="Message Icon" /></h3>
        <p>Feel free to reach out through contact form
          or find our contact information below. Your feedback,
          questions, and suggestions are important to us as we 
          strive to provide exceptional service to our university
          community.</p>
        <ul>
          <li><img src={mail_icon} alt="Mail Icon" />pavancreativehub@gmail.com</li>
          <li><img src={phone_icon} alt="Phone Icon" />+91 6303966182</li>
          <li><img src={location_icon} alt="Location Icon" />Main road, Karlemma, Kotturu, Srikakulam, Andhra Pradesh, 532455</li>
        </ul>
      </div>
      <div className="contact-co">
        <form onSubmit={handleContact}>
          <label>Email</label>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder='Enter Your Email' />
          <label>Your Name :</label>
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder='Enter Your Name' />
          <label>Phone :</label>
          <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} name='phone' placeholder='Enter Your Mobile Number'/>
          <label>Write your message here</label>
          <textarea name="message" required value={message} onChange={(e) => setMessage(e.target.value)} rows='6' placeholder='Enter your message'></textarea>
          <button type='submit' className='btn dark-btn' disabled={loading}>
            {loading ? "Sending..." : "Submit"} 
            {loading && <span className="loader"></span>}
            <img src={white_arrow} alt="Arrow Icon" />
          </button>
        </form>
        <span></span>
      </div>
    </div>
  );
};

export default Contact;
