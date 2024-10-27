import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Style from './SlideShowImages.module.css'
import BackgroundImage from '../assest/SlideBackgroundImage.jpg'
import BackgroundImageTwo from '../assest/BackgroundImageTwo.jpg'
import BackgroundImageThree from '../assest/BackgroundImageThree.jpg'

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '70vh',
  width: '100%'
}

const spanStyle = {
  padding: '20px',
  color: 'white',
  fontSize: '45px', 
  fontWeight: 'bold', 
  width: '500px',
  textAlign: 'center'
}

const styleButton ={
  border: '1px transparent',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
  fontWeight: 'bold',
  fontSize: '18px',
}

const backgroundSlidesImages = [
  {
    image: BackgroundImage,
    caption: "Securing Africa's Future",
    text: 'Join Here'
  },
  {
    image: BackgroundImageTwo,
    caption: "Empowering Africa's Next Generation",
    text: 'Join Here'
  },
  {
    image: BackgroundImageThree,
    caption: "Strengthening Africa, Shaping Tomorrow",
    text: 'Join Here'
  }
]
const SlideShowImages = () => {
  return (
    <div className={Style.SlideShowImages}>
      <Slide>
         {backgroundSlidesImages.map((backgroundSlidesImages, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${backgroundSlidesImages.image})`, }}>
                <span style={spanStyle}>{backgroundSlidesImages.caption}</span>, 
                <button style={styleButton} onClick={()=> window.location.href="/register"}>{backgroundSlidesImages.text}</button>
              </div>
            </div>
          ))} 
        </Slide>
      
    </div>
  )
}
export default SlideShowImages
