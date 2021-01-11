import React, {useState, useEffect} from 'react'
import Calendar from 'react-calendar'
import searchSVG from '../files/icon_search.svg'
import calendarSVG from '../files/icon_calender.svg'

export default function Searchbar(props) {

    const { fromSearch, setFromSearch, toSearch, setToSearch } = props
    const [dateChange, setDateChange] = useState(0)

    useEffect(() => {
      console.log('fromsearch to string', fromSearch.getTime().toString())
      setDateChange(dateChange + 1)
    }, [fromSearch, toSearch])
    
    return (
      <div className="searchbar">
        <div>
          <div onClick={() => setDateChange(2)}>
            <p className="date-in-searchbar padding-left">
              <img className="calendar-icon" src={calendarSVG} style={{ height: 15, width: 15}} alt="C" />
            </p>
            <p className={`date-in-searchbar clickable ${dateChange === 2 && 'date-selected'}`}>
              {`${fromSearch.getFullYear()}/${fromSearch.getMonth() + 1}/${fromSearch.getDate()}`}
            </p>
            <p className="date-in-searchbar">
              {' - '}
            </p>
            <p className={`date-in-searchbar padding-right clickable ${dateChange === 3 && 'date-selected'}`}>
              {`${toSearch.getFullYear()}/${toSearch.getMonth() + 1}/${toSearch.getDate()}`}
            </p>
            <button className="button-in-searchbar clickable">
              <img src={searchSVG} style={{ height: 15, width: 15}} alt="Search" />
            </button>
            </div>
          {dateChange === 2 && <Calendar onChange={setFromSearch} value={fromSearch}/>}
          {dateChange === 3 && <Calendar onChange={setToSearch} value={toSearch}/>}
        </div>
      </div>
    )
}