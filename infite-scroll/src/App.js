/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
    getData();
  },[page]);

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
  },[]);

  const handleScroll = ()=>{
    // console.log("Height",document.documentElement.scrollHeight);
    // console.log("top height",document.documentElement.scrollTop);
    // console.log("inner height",window.innerHeight);
    if(document.documentElement.scrollTop + window.innerHeight + 1 >= document.documentElement.scrollHeight){
      setpage((prev)=>prev+1);
    }
  }

  const getData = ()=>{
    setLoading(true)
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}&sparkline=false`)
    .then(response=>response.json())
    .then((res)=>(setData(prev=>[...prev,...res])))
    .finally(()=>setLoading(false))
  }

  return (
    <>
      <h1>Crypto Currencies</h1>
      <div className="cryptos">
        {data?.map((crypto)=>(
          <div>
            <div>
              <img src={crypto.image} alt=""/>
            </div>
            <p>{crypto.name}</p>
          </div>
        ))}
      </div>
        {loading && (
          <div style={{width:'30%',margin:"auto"}}>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6e0b072897469.5bf6e79950d23.gif" alt="" />
          </div>)
        }
    </>
  );
}

export default App;
