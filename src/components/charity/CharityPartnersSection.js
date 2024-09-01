import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import partnerImg1 from '../../assets/images/charity/partnerImg1.png';
import partnerImg2 from '../../assets/images/charity/partnerImg2.png';
import partnerImg3 from '../../assets/images/charity/partnerImg3.png';
import partnerImg4 from '../../assets/images/charity/partnerImg4.png';
import partnerImg5 from '../../assets/images/charity/partnerImg5.png';

const partnerImages = [
  { src: partnerImg1, width: 189, height: 85 },
  { src: partnerImg2, width: 175, height: 79 },
  { src: partnerImg3, width: 107, height: 75 },
  { src: partnerImg4, width: 222, height: 94 },
  { src: partnerImg5, width: 189, height: 35 },
];

const PartnerLogo = ({ src, width, height }) => (
  <div className="grid">
    <img
      src={src}
      alt="Partner logo"
      width={width}
      height={height}
      layout="responsive"
    />
  </div>
);

const CharityPartnersSection = () => {
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
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="wpo-partners-section">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="partner-grids partners-slider">
              <Slider {...settings}>
                {partnerImages.map((image, index) => (
                  <PartnerLogo key={index} {...image} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharityPartnersSection;