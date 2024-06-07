/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

 export const CoinContext=createContext();

 const CoinContextProvider=(props)=>{
    const[allCoin,setAllcoin]=useState([])
    const[currency,setCurrency]=useState({
        name: "usd",
        symbol: "$"
    })

    const fetchAllcoin =()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-EytdJ6vFDHa3Y8kmTWtiKnJc'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllcoin(response))
            .catch(err => console.error(err));
    }
    useEffect(()=>{
        fetchAllcoin()
    },[currency])
    const contextValue={
        allCoin,currency,setCurrency
    }
    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
 }

 export default CoinContextProvider;