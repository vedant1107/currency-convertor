import { useState, useEffect } from 'react'

//defining our custon hook useCurrencyInfo
function useCurrencyInfo(currency) {

  //useState hook
  const [data, setData] = useState({})
  
  //useEffect hook
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((res) => res.json())
    .then((jsonRes) => setData(jsonRes[currency]))
    // console.log(data);
  }, [currency])

  // console.log(data)
  return data;
}

export default useCurrencyInfo;