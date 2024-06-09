import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../contexts/CoinContext";
import LineChart from "../components/line chart/LineChart";

function Coin() {
  const { coinId } = useParams();
  const {currency}=useContext(CoinContext)
  const[coindata,setCoinData]=useState()
  const[historicalData,setHistoricalData]=useState()

  async function fetchCoinById() {
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-EytdJ6vFDHa3Y8kmTWtiKnJc'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(response => response.json())
      .then(response => setCoinData(response))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchCoinById();
    fetchHistoricCoinData();
  }, [currency]);



  const fetchHistoricCoinData= ()=>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-EytdJ6vFDHa3Y8kmTWtiKnJc'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
      .then(response => response.json())
      .then(response => setHistoricalData(response) )
      .catch(err => console.error(err));
  }

  if(coindata,historicalData)
    {
      return (
        <div className="h-[90vh] ">
          <h1 className="text-center text-2xl text-white">10 days chart</h1>
          <div className="coinname flex align-middle justify-center items-center my-2">
            <img src={coindata.image.large} alt="" className=" w-40" />
            <p className="text-white text-2xl"> <b>{coindata.name} ({coindata.symbol.toUpperCase()})</b> </p>
          </div>

          <div className="coinchart flex align-middle justify-center items-center ml-20">
            <LineChart  historicalData={historicalData}   />
          </div>
          <div className="coinInfo  text-center mr-20 mt-4  text-xl text-white">
            <ul className="flex gap-56 justify-center mb-4 items-center">
              <li>Crypto Market Rank</li>
              <li>{coindata.market_cap_rank}</li>
            </ul>

            <ul className="flex gap-56 justify-center mb-4 items-center">
              <li>Current Price</li>
              <li>{currency.symbol} {coindata.market_data.current_price[currency.name].toLocaleString()}</li>
            </ul>

            <ul className="flex gap-56 justify-center mb-4 items-center">
              <li>Market Cap</li>
              <li>{currency.symbol} {coindata.market_data.market_cap[currency.name].toLocaleString()}</li>
            </ul>

            <ul className="flex gap-56 justify-center mb-4 items-center">
              <li>24 Hr high</li>
              <li>{currency.symbol} {coindata.market_data.high_24h[currency.name].toLocaleString()}</li>
            </ul>
          </div>
          
        </div>
      );
    }
    else
    {
      <div className="h-[80vh]">
          <p>loader.....</p>
          
        </div>
    }
 
}

export default Coin;
