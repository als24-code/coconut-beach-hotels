import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const HotelsSection = ({ data, ref }) => {
  return (
    <section className="hotels" ref={ref}>
      <div className="hotels__text">
        <h1 className="section-title text-black text-center">{data.title}</h1>
        <p className="hotels__description hero-subtitle text-black text-center">
          {data.desc}
        </p>
      </div>
      <div className="hotels__gallery grid-container">
        {data.hotels.map((hotel, i) => (
          <div
            key={i}
            className={`card ${
              i === 0
                ? "card--main"
                : i === 1
                  ? "card--side-top"
                  : "card--side-bottom"
            }`}
          >
            <img src={hotel.img} className="hotels__image" alt="" />
            <div className="card__overlay" />
            <div className="card__content">
              <div className="card__top">
                <h3 className="card__title">{hotel.name}</h3>
                <button className="card__arrow">
                  <svg
                    fill="#ffff"
                    width="50px"
                    height="35px"
                    viewBox="0 0 24 24"
                    id="right-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon line"
                  >
                    <path
                      id="primary"
                      d="M3,12H21m-3,3,3-3L18,9"
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "1.0",
                      }}
                    ></path>
                  </svg>
                </button>
              </div>
              <p className="card__meta">
                {hotel.location} <span className="dot">●</span>{" "}
                <span className="stars">
                  {"★".repeat(hotel.rating)}
                  {"☆".repeat(5 - hotel.rating)}
                </span>{" "}
                <span className="dot">●</span> ({hotel.visitors} Visitors)
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelsSection;
