import React, {useState} from 'react'
import {BrowserView, MobileView} from 'react-device-detect';

export default function MailContent(props) {
  
  const { subject, message } = props

  const [messageOpen, setMessageOpen] = useState(false)


  return (
    <>
      <BrowserView>
        <div className="subject-text" onClick={() => setMessageOpen(!messageOpen)}>{subject}
        {messageOpen && 
          <p>
            {"\n"}
            {message}
          </p>}</div>
      </BrowserView>
      <MobileView>
      <div className="subject-text-mobile" onClick={() => setMessageOpen(!messageOpen)}>{subject}
        {messageOpen && 
          <div className="subject-text-mobile">
            {"\n"}
            {message}
          </div>}</div>
      </MobileView>    
    </>
  )
}