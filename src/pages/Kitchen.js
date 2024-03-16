import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './Navbar';

const Kitchen = () => {
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
          <h1>Modular Kitchen</h1>
            <Slider {...settings}>
                <div>
                    <img src="kitchen1.jpg" alt=" 1" />
                </div>
                <div>
                    <img src="kitchen2.jpg" alt=" 2" />
                </div>
                <div>
                    <img src="kitchen3.jpg" alt=" 3" />
                </div>
                <div>
                    <img src="kitchen4.jpg" alt=" 4" />
                </div>
               
            </Slider>
        </div>
    );
}

export default Kitchen;