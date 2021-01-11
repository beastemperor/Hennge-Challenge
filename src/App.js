import React, {useState, useEffect} from 'react';
import mails from './components/mails'
import Searchbar from './components/searchbar'
import ResultTable from './components/resultTable'
import LogoPNG from './files/logo.png'

function App() {

  const [fromSearch, setFromSearch] = useState(new Date())
  const [toSearch, setToSearch] = useState(new Date())

  const [lowToHigh, setLowToHigh] = useState(true)
  const [sortBy, setSortBy] = useState('date')

  const [results, setResults] = useState([])

  useEffect(() => {
    const filtered = mails.filter(mail => mail.date > (fromSearch.getTime() /1000) && mail.date < (toSearch.getTime() /1000))

    let sorted = []
    console.log('sorting from low to high? ', lowToHigh, 'by: ', sortBy)
    if(lowToHigh === true){
      sorted = filtered.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
    }else{
      sorted = filtered.sort((a, b) => b[sortBy].localeCompare(a[sortBy]))
    }

    setResults(sorted)
  }, [fromSearch, toSearch, sortBy, lowToHigh])
  
  useEffect(() => {
    console.log('results: ', results)
  }, [results])

  return (
    <>
    <div className="container">
      <Searchbar fromSearch={fromSearch} setFromSearch={setFromSearch} toSearch={toSearch} setToSearch={setToSearch} />
      <div className="results">Results: {results.length} mail(s)</div>
      <ResultTable results={results} sortBy={sortBy} setSortBy={setSortBy} lowToHigh={lowToHigh} setLowToHigh={setLowToHigh} />
      {results.length < 1 && <div className="logo-container"> <img src={LogoPNG} /> </div>}
    </div>
    </>
  );
}

export default App;