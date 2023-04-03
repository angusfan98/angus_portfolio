import React, {useState,useEffect} from 'react';
import {motion} from 'framer-motion';
import './About.scss'
import {urlFor, client} from '../../client'
import {AppWrap} from '../../wrapper';
import {MotionWrap} from '../../wrapper';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(()=>{
    const query = '*[_type == "abouts"]'
    client.fetch(query).then((data)=>setAbouts(data))
  },[]);
  return (
    <>
    <h2 className='head-text'><span>Hi my name is Angus Fan,</span><br/></h2>
    <TypeAnimation
      sequence={[
        'I am a Software Engineer', 
        2000, // Waits 1s
        'I am enthusiastic about Computer Science', 
        2000, // Waits 2s
        'give me a job', 
        2000,
        () => {
          console.log('Sequence completed'); 
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className='head-text'
    />
    <div className='app__profiles'>
      {abouts.map((about,index)=>(
        <motion.div whileInView={{opacity: 1}} whileHover={{scale:1.1}} transition={{duration:0.5,type:'tween'}} className="app__profile-item" key={about.title + index}>
          <img src={urlFor(about.imgUrl)} alt={about.title}/>
          <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
          <p className='p-text' style={{marginTop:10}}>{about.description}</p>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'),'about','app__whitebg');