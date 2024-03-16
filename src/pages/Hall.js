import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './Navbar';


const Hall = () => {

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
      <h1> Hall</h1>
      <Slider {...settings}>
        <div>
          <img src="hall1.jpg" alt=" 1" />
        </div>
        <div>
          <img src="hall2.jpg" alt=" 2" />
        </div>
        <div>
          <img src="hall3.jpg" alt=" 3" />
        </div>
        <div>
          <img src="hall4.jpg" alt=" 4" />
        </div>

      </Slider>
    </div>
  )
}

export default Hall