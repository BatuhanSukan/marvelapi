import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Marvel() {

  const {id} = useParams();

  const [item,setItem] = useState();
  const [comicsitem,setComics] = useState();

  const fetch = async () => {
    const res = await axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=438534a52772d5e7579e9fa22259ce68&hash=2ef164822253a3ffe9be3f29c8fa1b39`); 
    setItem(res.data.data.results[0])
  }
  fetch();

  const comics = async () => {
    const comicsdata = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}/comics?ts=1&apikey=438534a52772d5e7579e9fa22259ce68&hash=2ef164822253a3ffe9be3f29c8fa1b39`); 
    setComics(comicsdata.data.data.results[0])

  }
  comics();

  return (
    <>
      {
        (!item) ? <p>Veriler Yükleniyor</p> : (
          <div className="box-content">
          
            <div className="right-box">
              <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
            </div>
            <div className="left-box">
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <p>
                <ul>
                  {
                    item.comics.items.map((s) => (<li key={Math.random * 10}>{s.name}</li>
                    ))
                  }
                </ul>
              </p>
            </div>
          </div>
        ) 
      }
    </>
  )
}

export default Marvel;