import React from 'react'
import Style from './HeroButton.module.css'

const HeroButton = () => {
  return (
    <div className={Style.HeroButtonContainer}>
      <button className={Style.HeroButton}>
        Become A 2024 Sponsor 
      </button>
    </div>
  )
}
export default HeroButton
