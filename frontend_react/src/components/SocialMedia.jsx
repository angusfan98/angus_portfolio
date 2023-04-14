import React from 'react'
import {BsLinkedin, BsGithub, BsEmojiSmileFill} from 'react-icons/bs';
import Pdf from './angus_fan_resume.pdf';

const SocialMedia = () => {
  const style = { color: "black"}
  const style_linkedin = {color:"#0366c3"}
  const style_resume = {color:"dark grey"}
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
      <a href={Pdf} target="blank">
        <div>
            <BsEmojiSmileFill style={style_resume}/>
        </div>
      </a>
    </div>
  )
}

export default SocialMedia

