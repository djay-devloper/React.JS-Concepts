//We are creating custom hooks using JS functionalities and already available hooks.

import { useState, useEffect } from "react"

function useCurrencyInfo(currency){
    const[data, setData]= useState({})

    // fetching data is side effect hence useEffect is used.
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency] || {}))
        .catch((error)=> {
            console.error('Currency fetch failed:', error)
            setData({})
        })
    }, [currency])

    return data
}

export default useCurrencyInfo;

// this hook fetches data for a particular given currency.