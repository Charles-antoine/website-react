import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Contact.scss';
import { Row, Col } from 'react-bootstrap';
import AOS from 'aos'; 
import 'aos/dist/aos.css';


function Contact() {
  //STATES
  const [fname,setfname] = useState('');
  const [lname,setlname] = useState('');
  const [email,setemail] = useState('');
  const [message,setmessage] = useState('');
  const [error,seterror] = useState(null);
  const [mailSent,setmailSent] = useState(false);
  const inputs = [fname,lname,email,message];
  //URL API
  const API_PATH = 'http://localhost:3000/build/contact.php';
  //VALIDATE BOOL FORMS INPUTS
  let  validate = false;

  

  //SUBMIT BUTTON CLICK
  const handleFormSubmit = ( event ) => {
    event.preventDefault();
    //
    const wrapperName = document.querySelector('.wrapper-name');
    const wrapperLastName = document.querySelector('.wrapper-lastname');
    const wrapperEmail = document.querySelector('.wrapper-email');
    const wrapperMessage = document.querySelector('.wrapper-message');
    //
    if(fname === '') {wrapperName.classList.add('is-missing');validate = false;}else{wrapperName.classList.remove('is-missing');validate = true;};
    if(lname === '') { wrapperLastName.classList.add('is-missing'); validate = false; }else{ wrapperLastName.classList.remove('is-missing'); validate = true;};
    if(email !== '' && validateEmail(email)) { wrapperEmail.classList.remove('is-missing');validate = true; }else{ wrapperEmail.classList.add('is-missing'); validate = false;};
    if(message === '') { wrapperMessage.classList.add('is-missing'); validate = false; }else{ wrapperMessage.classList.remove('is-missing'); validate = true;};
    //  
    if(validate){sendData(event)};
  }

  //Focus out an input
  const focusInput = (e,nameValue) => {
    nameValue(e.target.value); // = set Value
    const targets = e.currentTarget.className;
    const target = targets.split(' '); // if more as one class
    const wrapper = document.querySelector(`.${target[0]}`);
    //
    if(wrapper.classList.contains('is-missing')){
        wrapper.classList.remove('is-missing');
    }
  }


  //Check if email is valid
  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  //SEND DATA
  const sendData  = (event) => {
    const content = inputs;

    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: content
    })
      .then(result => {
        setmailSent(result.data.sent);
      })
      .catch(error => seterror(error.message));
  }


  useEffect(()=>{
    AOS.init();
  },[])


  return (
    <div className="container">
    <Row>
      <Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 0 }} lg={10}>
        <p>Contact Me</p>
      </Col>
      <Col xs={{ span: 10, offset: 1 }} md={{ span: 12, offset: 0 }} lg={6}>
        <form action="/action_page.php">
          <label>First Name</label>
          <input type="text" id="fname" name="firstname" className="wrapper-name" placeholder="Your name.." required 
          value={fname} 
          onChange={e => focusInput(e,setfname)}/>

          <label>Last Name</label>
          <input type="text" id="lname" name="lastname" className="wrapper-lastname" placeholder="Your last name.."  required
          value={lname} 
          onChange={e => focusInput(e,setlname)}/>


          <label>Email</label>
          <input type="email" id="email" name="email" className="wrapper-email" pattern="[a-zA-Z0-9.!#$%&amp;’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+"
          placeholder="Your email" required
          value={email}
          onChange={e => focusInput(e,setemail)}/>


          <label>Subject</label>
          <textarea id="subject" name="subject" className="wrapper-message"  placeholder="Write something.."
          value={message}
          onChange={e => focusInput(e,setmessage)}>
          </textarea>


          <input type="submit" value="Submit"  onClick={e => handleFormSubmit(e)}  />

          <div>
            {mailSent &&
              <div>Thank you for contacting us.</div>
            }
          </div>

        </form>
      </Col>
      <Col xs={{ span: 10, offset: 1 }} md={{ span: 12, offset: 0 }} lg={12}>
        <div className='test' data-aos="fade-up" data-aos-easing="ease-in-circle"  data-aos-delay="0"  data-aos-offset="100"></div>
      </Col>      
      </Row>
    </div>
  );
}

export default Contact;
