import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pump from '../assets/images/pump.jpg';
import pump from '../assets/images/pump2.jpg';
import pump from '../assets/images/pump3.jpg';
const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const slides = [
    "pump.jpg",
    "pump2.jpg",
    "pump3.jpg",
    "/images/4.jpg"
  ];

  return (
    <div className="max-w-7xl mx-auto mt-4">
      <Slider {...settings}>
        {slides.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index}`} className="w-full h-[400px] object-cover rounded" />
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
