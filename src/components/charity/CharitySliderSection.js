import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import charitySliderImg1 from "../../assets/images/charity/charity-slider-img1.jpg";
import charitySliderImg2 from "../../assets/images/charity/charity-slider-img2.jpg";
import charitySliderImg3 from "../../assets/images/charity/charity-slider-img3.jpg";
import charitySliderImg4 from "../../assets/images/charity/charity-slider-img4.jpg";
import charitySliderImg5 from "../../assets/images/charity/charity-slider-img5.jpg";

// Define the InstagramCard component
const InstagramCard = ({ imageUrl, altText }) => (
  <div className="instagram-card">
    <div className="image-container">
      {/* Use <img> instead of <Image> */}
      <img
        src={imageUrl}
        alt={altText}
        width={390}
        height={402}
        className="img img-responsive"
      />

      {/* <div className="overlay">
        <div className="content">
          <span>Charity</span>
          <h2>Pure Water Supply</h2>
          <button className="popup-icon">
            <i className="ti-plus"></i>
          </button>
        </div>
      </div> */}
    </div>
  </div>
);

const CharitySliderSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    charitySliderImg1,
    charitySliderImg2,
    charitySliderImg3,
    charitySliderImg4,
    charitySliderImg5,
  ];

  return (
    <section className="wpo-instagram-section">
    <div className="container-fluid">
      <div className="instagram-wrap">
        <div className="instagram-slider">
          <Slider {...settings}>
            {images.map((image, index) => (
              <InstagramCard
                key={index}
                imageUrl={image}
                altText={`Instagram ${index + 1}`}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  </section>
  );
};

export default CharitySliderSection;
