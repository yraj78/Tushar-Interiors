import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './Navbar';

const Bedroom = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="kitchen-slider">
      <Navbar/>
      <h1> Bedroom</h1>
      <Slider {...settings}>
        <div>
          <img src="bedroom1.jpg" alt=" 1" />
        </div>
        <div>
          <img src="bedroom2.jpg" alt=" 2" />
        </div>
        <div>
          <img src="bedroom3.jpg" alt=" 3" />
        </div>
        <div>
          <img src="bedroom4.jpg" alt=" 4" />
        </div>

      </Slider>
    </div>
  )
}

export default Bedroom