import React from 'react'
import Style from './Hero.module.css'
import HeroButton from '../component/HeroButton'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import backgroundImage from '../assest/BackgroundImage.jpg'
import BackgroundTwo from '../assest/BackgroundImageTwo.jpg'
import BackgroundImageThree from '../assest/BackgroundImageThree.jpg'
import SlideShowImages from './SlideShowImages'
// import BackgroundImage from "../assest/BackgroundImage.jpg"
// import {OutLet} from 'react-router-dom'



const Hero = () => {
  return (
    <div className={Style.heroContainer}>
      <div className={Style.heroContent}>
        <h1>Securing Africa's Future</h1>
          <span>Confirmed Date | 23th November</span>
      </div>  
      <div className = {Style.heroImage}>
        <SlideShowImages />
      </div>
      
    </div>
    
  )
}
export default Hero
