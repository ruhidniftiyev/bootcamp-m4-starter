import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import './Carousel.css';

const AutoPlay = () => {
  const [sliderMovies, setSliderMovies] = useState([]);

  React.useEffect(() => {
    axios.get('https://www.omdbapi.com/?s=Fast%20Furious&apikey=5636c888').then((res) => {
      setSliderMovies(res.data.Search);
    });
  }, []);
  sliderMovies.length = 5;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    //   speed: 2000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };

  const id = (ind) => {
      return `https://www.imdb.com/title/${ind}`;
    //   const a = `www.imdb.com/title/${ind}`
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {sliderMovies?.map((movie) => (
          <div className="slider__item" key={movie.imdbID}>
            <a href={id(movie.imdbID)}>
              <img src={movie.Poster} alt="" />
            </a>
            <span>{movie.Title}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoPlay;
