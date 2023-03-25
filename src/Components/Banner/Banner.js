import React, { useEffect, useState } from 'react'
import { API_KEY,imageUrl } from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {
     const [movie, setMovie] = useState()
     console.log(movie)
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      // console.log(response.data.results[1])
      const data = response.data.results;
      console.log(data);
      const randomIndex = Math.floor(Math.random() * data.length);
      setMovie(data[randomIndex])
    })
  
  },[])
  return (
    <div
     style={{backgroundImage:`url(${ movie ? imageUrl+movie.backdrop_path : ""})`}}
      className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.name :""}</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview :""}</h1>
        </div>
        <div className='fade_bottom'></div>
      </div>
  )
}

export default Banner
