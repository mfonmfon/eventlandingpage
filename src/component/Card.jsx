import React from "react"
import Style from "../Card.module.css"
const Card =()=>{
  return (
    <div className={Style.Card}>
      <div className={Style.CardContainer}>
        <h1>Card Items </h1>
        <p>Card is here bring it to daddy</p>
      </div>

      <div className={Style.CardContainer}>
        <h1>Card Items </h1>
        <p>Card is here bring it to daddy</p>
      </div>

      <div className={Style.CardContainer}>
        <h1>Card Items </h1>
        <p>Card is here bring it to daddy</p>
      </div>

      <div className={Style.CardContainer}>
        <h1>Card Items </h1>
        <p>Card is here bring it to daddy</p>
      </div>

    </div>
  )
}
export default Card