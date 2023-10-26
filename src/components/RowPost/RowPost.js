import React,{useEffect,useState} from 'react'
import './RowPost.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from '../../axios';
import { imageUrl,BannerUrl } from '../../constants/contants';
const RowPost = (props) => {
    console.log(props.url)
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(props.url).then(response => {
            console.log(response.data.results)
            setMovies(response.data.results)
        })
    }, [])
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3
        }
      };
  return (
    <div className="container">
        <div className="wrapper">
            <div className="title">
                <h2>{props.title}</h2>
            </div>
            <div className="posters_container">
                <div className='posters'>
                {/* <Carousel responsive={responsive} className='poster_card'> */}
                        {movies.map((movie, index) => {
                            return (
                                <div className="poster_div" key={index}>
                                    <img className="poster" src={`${BannerUrl+movie.backdrop_path}`} alt="" srcset="" />
                                </div>
                            )
                        })}
                {/* </Carousel> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default RowPost