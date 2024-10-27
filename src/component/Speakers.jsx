import React from "react"
import Style from './Speakers.module.css'
// import SpeakersImages from "./SpeakersImages"
import SpeakersImages from '../component/SpeakersImages'

const Speaker = ()=>{
  return (
    <div className={Style.SpeakersContainer}>
      <h1>All Speakers</h1>
      <h3>Solving Africa's Most Challenging Problems</h3>
      <p>We’re bringing together the most audacious thinkers, doers and investors in African tech,
         working on everything from fintech to commerce,
         renewable energy, climate change, tech policy, AI, telco, cloud and more.</p>

         <button className={Style.SpeakersButton}>View All Speakers</button>

         <SpeakersImages />
    </div>
  )
}
export default Speaker