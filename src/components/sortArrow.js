import React from 'react'
import arrowSVG from '../files/icon_arrow01.svg'


export default function sortArrow(props) {

  const {lowToHigh, selected} = props

  let upOrDown = lowToHigh ? "" : "scale(1,-1)"


  return (
    <>
      {selected && <img src={arrowSVG} style={{ height: 10, width: 10, transform: upOrDown }} alt="arrow" />}
    </>
  )
}
