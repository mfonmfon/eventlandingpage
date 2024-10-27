import React from 'react'
import Style from "./Sponsors.module.css"
import Uber from "../assest/UberSponsor.png"
import Gap from "../assest/GapSponsor.png"
import Union from "../assest/UnionSponsor.png"

const Sponsors = () => {
  return (
    <div className={Style.sponsors}>
      <div className={Style.sponsors__title}>
        <img src={Uber} alt='uber'></img>
        <img src={Gap} alt='gap'></img>
        <img src={Union} alt='uber'></img>
        <img src={Uber} alt='uber'></img>
      </div>
    </div>
  )
}
export default Sponsors
