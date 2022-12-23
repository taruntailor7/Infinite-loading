/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [page, setpage] = useState(1);
  
  useEffect(()=>{
    getData();
  },[]);

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
  },[]);

  const handleScroll = ()=>{
    console.log("Height",document.documentElement.scrollHeight);
    console.log("top height",document.documentElement.scrollTop);
    console.log("inner height",window.innerHeight);

    
  }

  const getData = ()=>{
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}&sparkline=false`)
    .then(response=>response.json())
    .then(res=>(
      setData(res)
    ))
  }

  return (
    <>
      <h1>Crypto Currencies</h1>
      <div className="cryptos">
        {data?.map((crypto)=>(
          <div key={crypto.id}>
            <div>
              <img src={crypto.image} alt=""/>
            </div>
            <p>{crypto.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;



// ath
// : 
// 69045
// ath_change_percentage
// : 
// -75.60249
// ath_date
// : 
// "2021-11-10T14:24:11.849Z"
// atl
// : 
// 67.81
// atl_change_percentage
// : 
// 24742.13657
// atl_date
// : 
// "2013-07-06T00:00:00.000Z"
// circulating_supply
// : 
// 19241343
// current_price
// : 
// 16848.56
// fully_diluted_valuation
// : 
// 353742870069
// high_24h
// : 
// 16885.88
// id
// : 
// "bitcoin"
// image
// : 
// "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
// last_updated
// : 
// "2022-12-23T09:02:59.605Z"
// low_24h
// : 
// 16599.91
// market_cap
// : 
// 324118471276
// market_cap_change_24h
// : 
// 47739440
// market_cap_change_percentage_24h
// : 
// 0.01473
// market_cap_rank
// : 
// 1
// max_supply
// : 
// 21000000
// name
// : 
// "Bitcoin"
// price_change_24h
// : 
// 2.51
// price_change_percentage_24h
// : 
// 0.01488
// roi
// : 
// null
// symbol
// : 
// "btc"
// total_supply
// : 
// 21000000
// total_volume
// : 
// 18158930981
