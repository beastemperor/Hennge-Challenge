import React from 'react'
import {BrowserView, MobileView} from 'react-device-detect';
import MailContent from './mailContent'
import MailDate from './mailDate'
import SortArrow from './sortArrow'
import AttachmentSVG from '../files/icon_clip.svg'
import MailIconSVG from '../files/icon_mail_sp.svg'


export default function Results(props) {

  const {results, sortBy, setSortBy, lowToHigh, setLowToHigh} = props

  function updateSort(by) {
    setSortBy(by)
    setLowToHigh(!lowToHigh)
  }

  return (
    <>
      <BrowserView>
        <table>
          <thead>
            <th className={`table-left clickable ${sortBy === 'from' && 'sort-select'}`} onClick={() => updateSort('from')}>From <SortArrow lowToHigh={lowToHigh} selected={sortBy === 'from'}/></th>
            <th >To</th>
            <th className={`clickable ${sortBy === 'subject' && 'sort-select'}`} onClick={() => updateSort('subject')}>Subject <SortArrow lowToHigh={lowToHigh} selected={sortBy === 'subject'}/></th>
            <th className={`clickable ${sortBy === 'date' && 'sort-select'}`} onClick={() => updateSort('date')}>Date <SortArrow lowToHigh={lowToHigh} selected={sortBy === 'date'}/></th>
          </thead>
          {results.map(result => 
            {return(
              <tr key={result.id}>
                <td className="table-left mail-sender">{result.from}</td>
                <td className="mail-sender">{result.to[0]} {result.to.length > 1 && <p className="additional-recipients">+{result.to.length - 1}</p>}</td>
                <td className="mail-subject"><MailContent subject={result.subject} message={result.message} /> {result.attachment && <img className="attachment" src ={AttachmentSVG} alt="A" />}</td>
                <td className="mail-date"><MailDate date={result.date} /></td>
              </tr>
            )}
          )}
        </table>
      </BrowserView>
      <MobileView>
        <div className="result-top-mobile">
          <p className={`result-text-mobile ${sortBy === 'from' && 'sort-select'}`} onClick={() => updateSort('from')}>From <SortArrow lowToHigh={lowToHigh} selected={sortBy === 'from'}/></p>
          <p className="result-text-mobile"> | </p>
          <p className="result-text-mobile">To</p>
          <p className="result-text-mobile"> | </p>
          <p className={`result-text-mobile ${sortBy === 'subject' && 'sort-select'}`} onClick={() => updateSort('subject')}>Subject <SortArrow lowToHigh={lowToHigh} selected={sortBy === 'subject'}/></p>
          <p className="result-text-mobile"> | </p>
          <p className={`result-text-mobile ${sortBy === 'date' && 'sort-select'}`} onClick={() => updateSort('date')}>Date <SortArrow lowToHigh={lowToHigh} selected={sortBy === 'date'}/></p>         
        </div>
        <div>
        {results.map(result => 
            {return(
              <div className="mail-container-mobile" key={result.id}>
                <img className="mail-icon" src={MailIconSVG} />
                <p className="result-text-mobile">{result.from}</p>
                <div className="result-text-mobile mail-date-mobile"> {result.attachment && <img className="attachment-mobile" src ={AttachmentSVG} alt="A" />} <MailDate date={result.date} /></div>
                <br />
                <p className="mail-sender-mobile">{result.to[0]} {result.to.length > 1 && <p className="additional-recipients-mobile">+{result.to.length - 1}</p>}</p>
                <div className="mail-subject-mobile"><MailContent subject={result.subject} message={result.message} /> </div>
              </div>
            )}
          )}
        </div>
      </MobileView>
    </>
  )
}