import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './Navbar';

const HotelandRestaurant = () => {

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
      <h1> Hotel and Restaurant</h1>
      <Slider {...settings}>
        <div>
          <img src="hotel1.jpg" alt=" 1" />
        </div>
        <div>
          <img src="hotel2.jpg" alt=" 2" />
        </div>
        <div>
          <img src="hotel3.jpeg" alt=" 3" />
        </div>
        <div>
          <img src="hotel4.jpeg" alt=" 4" />
        </div>

      </Slider>
    </div>
  )
}

export default HotelandRestaurant