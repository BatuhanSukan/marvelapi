import React, { useEffect, useState } from 'react'
import Card  from "./Card"
import axios from "axios"




function Main() {

  const [url,setUrl] = useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=438534a52772d5e7579e9fa22259ce68&hash=2ef164822253a3ffe9be3f29c8fa1b39")

  const [item,setItem] = useState();

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url)
      setItem(res.data.data.results);
      console.log(url)
    }
    fetch();
  },[url])


  
   

  return (
    <>
      <div className="header">
        <div className="bg">
          <img src="./Images/bg.jpg" alt="" />
        </div>
        <div className="search-bar" >
          <img src="Images/logo.png" alt="logo" />
          <input type="search" placeholder='Search Hero' className='search' />
        </div>
      </div>
      <div className="content">
      
        
        {
          (!item) ? <p>Yükleniyor...</p> : <Card data={item} />
        }
      </div>
    </>
  )
}

export default Main