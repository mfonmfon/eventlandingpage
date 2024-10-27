import React from 'react'
import Style from './EventDetails.module.css'
const EventDetails = () => {
  return (
    <div className={Style.EventDetailsContainer}>
      <h1 className={Style.eventDatilsText}>Event Details</h1>
      <div className={Style.eventDetailsWrap}>
        <div className ={Style.EventDetails}>
        <h2>Volunteer</h2>
        </div>

        <div className ={Style.EventDetails}>
        <h2>SPEAKERS</h2>
        </div>

        <div className ={Style.EventDetails}>
        <h2>GUESTS</h2>
        </div>
    </div>
  </div>
  )
}
export default EventDetails
