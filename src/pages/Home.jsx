import React from 'react'
import NavBar from '../component/NavBar'
import Hero from '../component/Hero'
import Sponsors from '../component/Sponsors'
import AboutEvent from '../component/AboutEvent'
import EventDetails from '../component/EventDetails'
import Speakers from '../component/Speakers'

const Home = () => {
  return (
    <div >
      <NavBar />
      <Hero /> 
      <Sponsors />
      <AboutEvent />
      <EventDetails />
      <Speakers />
    </div>
  )
}

export default Home
