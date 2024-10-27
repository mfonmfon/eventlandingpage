import React from 'react'
import { useEffect, useRef } from 'react'
import Style from './SpeakersImages.module.css'



const SpeakersImages = () => {
  const gridReference = useRef(null)
  const scrollSpeed = 1
  
  useEffect(()=>{
    const scrollIntervals = setInterval(()=>{
      if(gridReference.current){
        gridReference.current.scrollLeft += scrollSpeed
      }
      if(gridReference.current.scrollLeft >= gridReference.scrollWidth / 2){
        gridReference.current.scrollLeft = 0
      }
    }
    , 20)
    return () => clearInterval(scrollIntervals);
  },[])

  return (
    <div className={Style.SpeakersImages}  ref={gridReference}>
      {[...Array(2)].flatMap((_, i)=>(
        [...Array(10)].map((item, index)=>(
          <div className={Style.gridItems} key={`${i}-${index}`}>{item}
          </div>
        ))
      ))}
      
    </div>
  )
}

export default SpeakersImages
