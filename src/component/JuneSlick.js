import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import '../scss/Slick.scss';

const JuneSlick = () => {
  const options = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    useCSS: true,
  }

  return (
    <div className="slick">
      <div className="slick__title">
        <p>금룡같은 자태</p>
      </div>
      <Slider {...options} >
        <img src="./img/1.jpg" alt="img" />
        <img src="./img/2.jpg" alt="img" />
        <img src="./img/4.jpg" alt="img" />
      </Slider>
    </div>
  );
}

export default JuneSlick;