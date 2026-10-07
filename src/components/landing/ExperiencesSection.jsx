"use client";

import { useState } from "react";

const ExperienceSection = ({ data }) => {
  const [index, setIndex] = useState(0);
  const total = data.reviews.length;

  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1));

  const getOffset = (i) => {
    let diff = i - index;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section className="experience">
      <div className="experience__header">
        <h2 className="experience__title section-title text-white">
          {data.title}
        </h2>
        <p className="hotels__description hero-subtitle body-md text-gray-300">
          {data.desc}
        </p>
      </div>

      <div className="experience__carousel">
        <button
          className="experience__nav experience__nav--prev"
          onClick={prev}
          aria-label="Previous"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="experience__track-wrapper">
          <div className="experience__track">
            {data.reviews.map((review, i) => {
              const offset = getOffset(i);
              if (Math.abs(offset) > 3) return null;

              const isActive = offset === 0;

              return (
                <div
                  key={review.id}
                  className={`testimonial-card ${isActive ? "testimonial-card--active" : ""}`}
                  style={{
                    "--offset": offset,
                  }}
                  onClick={() => !isActive && setIndex(i)}
                >
                  <div className="testimonial-card__quote-top">“</div>
                  <p className="testimonial-card__review body-md text-white">
                    {review.review}
                  </p>
                  <div className="testimonial-card__quote-bottom">”</div>

                  <div className="testimonial-card__user">
                    <img
                      src={review.user_img}
                      className="testimonial-card__avatar"
                      alt={review.user}
                    />
                    <div>
                      <p className="testimonial-card__user-name">
                        {review.user}
                      </p>
                      <p className="testimonial-card__user-origin">
                        {review.user_origin}
                      </p>
                    </div>
                  </div>

                  <div className="testimonial-card__hotel">
                    <img
                      src={review.img}
                      className="testimonial-card__hotel-img"
                      alt={review.hotel_name}
                    />
                    <div className="testimonial-card__hotel-overlay" />
                    <div className="testimonial-card__hotel-info">
                      <div>
                        <h4 className="testimonial-card__hotel-name">
                          {review.hotel_name}
                        </h4>
                        <p className="testimonial-card__hotel-location">
                          {review.location}
                        </p>
                        <p className="testimonial-card__hotel-rating">
                          {"★".repeat(Math.floor(review.rating))}
                          {"☆".repeat(5 - Math.floor(review.rating))}{" "}
                          <span>({review.visitors} Visitors)</span>
                        </p>
                      </div>
                      <button className="testimonial-card__arrow">
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          className="experience__nav experience__nav--next"
          onClick={next}
          aria-label="Next"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="experience__dots">
        {data.reviews.map((_, i) => (
          <button
            key={i}
            className={`experience__dot ${i === index ? "experience__dot--active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
