import React from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const SliderWrapper = styled.div`
  width: 100vw;
  height: 80vh;
  margin: 0;
`;

const Slide = styled.div`
  height: 80vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlideContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding-top: 120px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.6);
`;

const SlideTitle = styled.h2`
  font-size: 3.5rem;
`;

const SlideDescription = styled.p`
  font-size: 2.2rem;
`;

const HeroSlider = () => {
  const slides = useSelector(state => state.heroImages.slides);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  
  return (
    <SliderWrapper>
      <Slider {...settings}>
        {slides.map(slide => (
          <Slide key={slide.id}>
            <img
              src={slide.source}
              alt={slide.title}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 1
                
              }}
            />

            <SlideContent>
              <SlideTitle>{slide.title}</SlideTitle>
              <SlideDescription>{slide.description}</SlideDescription>
            </SlideContent>
          </Slide>
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default HeroSlider;
