import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import quote from '../assets/images/quote-shape.png'
import img from '../assets/images/1.png'

const FeedBack = () => {

    const SampleNextArrow = (props) => {
        const { onClick } = props
        return (
          <div className='control-btn' onClick={onClick}>
            <button className='next'>
              <i class='bx bx-chevron-right' ></i>
            </button>
          </div>
        )
      }
      const SamplePrevArrow = (props) => {
        const { onClick } = props
        return (
          <div className='control-btn' onClick={onClick}>
            <button className='prev'>
              <i class='bx bx-chevron-left' ></i>
            </button>
          </div>
        )
      }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // autoplay: true,
    // autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        }
      }
    ] 
  };
  return (
    <div className="feedback">
        <div className="feedback__content">
            <div className="feedback__content__title">
                <h1>Client Feddback</h1>
                <h3>Customer Testimonials: What Our Clients Are Saying</h3>
            </div>
            <div className="feedback__content__coment">
              <Slider {...settings}>
                <div className="feedback__content__coment__slider">
                  <img src={quote} alt="" />
                  <div className="feedback__content__coment__slider__content">
                  Exceptional service! Quick delivery and top-notch product quality. Highly recommend
                  </div>
                  <div className="feedback__content__coment__slider__info">
                    <div className="feedback__content__coment__slider__info__img">
                      <img src={img} alt="" />
                    </div>
                    <div className="feedback__content__coment__slider__info__details">
                      <div className="name">
                          Minh
                      </div>
                      <div className="posible">
                          Client
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feedback__content__coment__slider">
                  <img src={quote} alt="" />
                  <div className="feedback__content__coment__slider__content">
                    Impressed with the fast response from customer support. They resolved my issue promptly.
                  </div>
                  <div className="feedback__content__coment__slider__info">
                    <div className="feedback__content__coment__slider__info__img">
                      <img src={img} alt="" />
                    </div>
                    <div className="feedback__content__coment__slider__info__details">
                      <div className="name">
                          Huy
                      </div>
                      <div className="posible">
                          Client
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feedback__content__coment__slider">
                  <img src={quote} alt="" />
                  <div className="feedback__content__coment__slider__content">
                  Great experience shopping here. The website is user-friendly, and the customer service team was very helpful.!
                  </div>
                  <div className="feedback__content__coment__slider__info">
                    <div className="feedback__content__coment__slider__info__img">
                      <img src={img} alt="" />
                    </div>
                    <div className="feedback__content__coment__slider__info__details">
                      <div className="name">
                          Khanh
                      </div>
                      <div className="posible">
                          Client
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feedback__content__coment__slider">
                  <img src={quote} alt="" />
                  <div className="feedback__content__coment__slider__content">
                  Absolutely satisfied with my purchase! The product exceeded my expectations, and the delivery was right on time!
                  </div>
                  <div className="feedback__content__coment__slider__info">
                    <div className="feedback__content__coment__slider__info__img">
                      <img src={img} alt="" />
                    </div>
                    <div className="feedback__content__coment__slider__info__details">
                      <div className="name">
                          Ha Chi Hao
                      </div>
                      <div className="posible">
                          Client
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
        </div>
    </div>
  )
}

export default FeedBack