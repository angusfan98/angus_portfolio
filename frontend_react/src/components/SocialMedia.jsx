import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs';

const SocialMedia = () => {
  const style = { color: "black"}
  const style_linkedin = {color:"#0366c3"}
  return (
    <div className='app__social'>
      <a href="https://github.com/angusfan98">
        <div>
            <BsGithub style={style}/>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/angusfan98/">
        <div>
            <BsLinkedin style={style_linkedin}/>
        </div>
      </a>
    </div> 
  )
}

export default SocialMedia