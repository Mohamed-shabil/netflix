import React, { useEffect, useState } from 'react'
import axios from '../../axios';
import './Banner.css'
import { API_Key,BannerUrl} from '../../constants/contants';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Banner = () => {
  const [movies,setMovies] = useState([])
  useEffect(()=>{
    axios.get(`trending/tv/day?api_key=${API_Key}`)
    .then((res)=>{
      // console.log(res.data.results)
      setMovies(res.data.results)
    })
  },[])
  console.log(movies[0])
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <Carousel responsive={responsive}>
      { movies.map((movie,index)=>(
          <div className="banner" style={{backgroundImage:`url(${BannerUrl+movie.backdrop_path})`}} >
            <div className="content">
              <h1 className="title">{movie.name}</h1>
              <p className="description">{movie.overview}</p>
              <div className="banner_button">
                <button className="play">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                  </svg>
                  Play        
                </button>
                <button className="moreInfo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))
      }
    </Carousel>
  )
}

export default Banner