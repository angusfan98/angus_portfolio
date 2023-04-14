import React, {useState} from 'react'
import {images} from '../../constants'
import {AppWrap, MotionWrap} from '../../wrapper'
import {client} from '../../client'
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({name:'',email:'',message:''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {name,email,message} = formData;

  const handleChangeInput = (e) => {
    const {name,value} = e.target
    console.log(name,value)
    setFormData({...formData, [name]:value})
  }

  const handleSubmit = () => {
    setLoading(true)
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message:message,
    }

    client.create(contact).then(()=>{
      setLoading(false)
      setIsFormSubmitted(true)
    })
  }

  return (
    <>
      <h2 className='head-text'><span>Let's Connect !</span><br/></h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email"/>
          <a href="mailto:angusfan8@gmail.com" className="p-text">angusfan8@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile"/>
          <a href="tel: +1 (604) 767-0533" className="p-text">+1 (604) 767-0533</a>
        </div>
      </div>

      {!isFormSubmitted?
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type='text' name='name' placeholder='Your Name' value={name} onChange={handleChangeInput}/>
          </div>
          <div className='app__flex'>
            <input className='p-text' type='email' name='email' placeholder='Your Email' value={email} onChange={handleChangeInput}/>
          </div>
          <div>
            <textarea className='p-text' name="message" placeholder="Your message" value={message} onChange={handleChangeInput}/>
          </div>
          <button type="button" className='p-text' onClick={handleSubmit}>{loading ? 'Sending':'Send Message'}</button>
        </div>
        : 
        <div>
          <h3 className='head-text'>Thank you for reaching out!</h3>
        </div>
      }
    </>
  )
}

export default AppWrap(MotionWrap(Footer,'app__footer'),'contact','app__primarybg')