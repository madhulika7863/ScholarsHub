import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import API from "../../api/axios";

function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async(event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  try {

    const res = await API.post("/contact", data);

    setResult(res.data.message);

    event.target.reset();

  } catch (error) {

    console.log(error);

    setResult("Error sending message");

  }
    if (data.success) {
      console.log("Form Submitted Successfully",data);
      setResult(data.message);
      event.target.reset();
    } 
  };


    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita 
                adipisci enim ipsa possimus error dolor sint at deserunt placeat blanditiis
                nobis corporis unde in harum voluptates quos, obcaecati molestias minus deleniti, 
                corrupti ducimus pariatur temporibus iusto. Est fugiat hic non!</p>
                <ul>
                    <li><img src={mail_icon} alt="" />Contact@gmail.com</li>
                    <li><img src={phone_icon} alt="" />+91 4585923624</li>
                    <li><img src={location_icon} alt="" />Lorem ipsum dolor sit, amet consectetur <br /> 996201, elit. United States</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name='name' placeholder='Enter your name...' required />
                    <label>Phone Number</label>
                    <input type="tel" name='phone'placeholder='Enter your mobile number' required/>
                    <label>Write Your message here</label>
                    <textarea name="message" id="" rows="6" placeholder='Enter your message..' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact