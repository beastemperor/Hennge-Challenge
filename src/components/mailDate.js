import React from 'react'

export default function mailDate(props) {

  const { date } = props

  const currentDate = new Date()

  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()
  const currentDay = currentDate.getDate()

  const remainderYMD = (date / 31556926 - (Math.floor(date / 31556926))) * 31556926
  const remainderHM = (date / 86400 - (Math.floor(date / 86400))) * 86400


  const listedYear = Math.floor(1970 + date /31556926)
  const listedMonth = Math.floor(remainderYMD / 2629743)
  const listedDay = Math.floor(((remainderYMD / 2629743) - listedMonth) * 30.44)
  const listedHour = Math.floor(remainderHM / 3600)
  let listedMinute = Math.round(((remainderHM / 3600) - listedHour) * 60)
  if(listedMinute < 10){
    listedMinute = '0' + listedMinute.toString()
  }


  return (
    <p className="display-inline">
      {currentYear !== listedYear &&`${listedYear}/${listedMonth + 1}/${listedDay + 1}`}
      
      {currentYear === listedYear && currentMonth !== listedMonth &&`${listedMonth + 1}/${listedDay + 1}`}
      
      {currentYear === listedYear && currentMonth !== listedMonth && currentDay !== listedDay &&`${listedMonth + 1}/${listedDay + 1}`}
      
      {currentYear === listedYear && currentMonth === listedMonth && currentDay === listedDay &&`${listedHour}:${listedMinute}`}

    </p>
  )
}