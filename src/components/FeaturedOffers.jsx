import React, { useEffect, useState } from "react";
import img1 from "../assets/images/products/01.jpg"
import Button from "./Button";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Link } from "react-router-dom";
import numberWithCommas from "../utils/numberWithCommas";
import ig1 from "../assets/images/products/01.jpg";
import ig2 from "../assets/images/products/04.jpg";
import ig3 from "../assets/images/products/05.jpg";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const featured = [
  {
    img: ig1,
    path: "/catalog/Camera%20Tapo%20C125",
    price: '890000',
    priceold: '42000000',
    title: "Camera Tapo C125"
  },
  {
    img: ig2,
    path: "/catalog/camera%20Tapo%20C620%20KIT",
    price: '27490000',
    priceold: '8200000',
    title: "Camera Tapo C620 KIT"
  },
  {
    img: ig3,
    path: "/catalog/camera%20tapo%20C621%20KIT",
    price: '19700000',
    priceold: '13290000',
    title: "Camera Tapo C621 KIT"
  }
]

const FeaturedOffers = () => {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div className="featured">
      <div className="featured__title">
        <h1>Featured Offers</h1>
        <h3>Connecting Businesses and Customers through Unique Offers and Features</h3>
      </div>
      <div className="featured__content">
        <div className="featured__content__left">
          <div className="cl1">
            <h2>
              <Link to="/catalog/iphone-13-pro-max">
              Camera Tapo C125
              </Link>
            </h2>
            <div className="cl1__price">
              <del>{numberWithCommas(35000000)}</del>
              <span>-</span>
              <span>{numberWithCommas(32500000)}</span>
            </div>
            <div className="cl1__box-img">
              <img src={img1} alt="" />
            </div>
            <div className="cl1__count-down">
              <CountdownCircleTimer
                {...timerProps}
                colors="#266bf9"
                duration={daySeconds}
                size={60}
                initialRemainingTime={remainingTime % daySeconds}
                onComplete={(totalElapsedTime) => ({
                  shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
                })}
              >
                {({ elapsedTime, color }) => (
                  <span style={{ color: "#000" }}>
                    {renderTime(getTimeHours(daySeconds - elapsedTime))}
                  </span>
                )}
              </CountdownCircleTimer>
              <CountdownCircleTimer
                {...timerProps}
                colors="#266bf9"
                size={60}
                duration={hourSeconds}
                initialRemainingTime={remainingTime % hourSeconds}
                onComplete={(totalElapsedTime) => ({
                  shouldRepeat:
                    remainingTime - totalElapsedTime > minuteSeconds,
                })}
              >
                {({ elapsedTime, color }) => (
                  <span style={{ color: "#000" }}>
                    {renderTime(getTimeMinutes(hourSeconds - elapsedTime))}
                  </span>
                )}
              </CountdownCircleTimer>
              <CountdownCircleTimer
                {...timerProps}
                colors="#266bf9"
                size={60}
                duration={minuteSeconds}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={(totalElapsedTime) => ({
                  shouldRepeat: remainingTime - totalElapsedTime > 0,
                })}
              >
                {({ elapsedTime, color }) => (
                  <span style={{ color: "#000" }}>
                    {renderTime(getTimeSeconds(elapsedTime))}
                  </span>
                )}
              </CountdownCircleTimer>
            </div>
            <Button>
              <Link to="/catalog/iphone-13-pro-max">
                  Buy Now
              </Link>
            </Button>
          </div>
        </div>
        <div className="featured__content__right">
          <div className="cl2">
            {
              featured.map((item, index) => (
                <div className="cl2__item" key={index}>
                  <div className="cl2__item__box-img">
                    <Link to={item.path}>
                      <img src={item.img} alt="" />
                    </Link>
                  </div>
                  <div className="cl2__item__info">
                    <div className="times">End In: 00 : 00 : 00</div>
                    <div className="title">
                      <h3>
                        <Link to={item.path}>
                          {item.title}
                        </Link>
                      </h3>
                      <div className="price">
                        <del>{numberWithCommas(item.priceold)}</del>
                        <span>-</span>
                        <span>{numberWithCommas(item.price)}</span>
                      </div>
                    </div>
                    <div className="detail"></div>
                  </div>
                </div>
              ))
            }
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedOffers;
