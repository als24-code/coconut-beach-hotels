const ExploreSection = ({ data }) => {
  return (
    <section className="explore">
      <div className="explore__header">
        <h2 className="explore__title section-title text-black">
          {data.title}
        </h2>
        <div className="explore__search-block">
          <p className="hotels__description explore__desc hero-subtitle text-black">{data.desc}</p>
          <div className="explore__search">
            <input
              type="text"
              placeholder="Find Hotels"
              className="explore__search-input"
            />
            <button className="explore__search-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="explore__grid">
        {data.hotels.map((hotel) => {
          const fullStars = Math.floor(hotel.rating);
          return (
            <div key={hotel.id} className="explore-card">
              <img src={hotel.img} className="explore-card__image" alt={hotel.name} />
              <div className="explore-card__info">
                <h3 className="explore-card__title text-lg text-black font-jakarta font-semibold">
                  {hotel.name}

                </h3>
                <p className="explore-card__location text-sm text-gray-700 font-jakarta">
                  {hotel.location}
                </p>
                <p className="explore-card__rating body-sm">
                  <span className="explore-card__stars">
                    {"★".repeat(fullStars)}
                    {"☆".repeat(5 - fullStars)}
                  </span>{" "}
                  <span className="text-gray-600">
                    ({hotel.visitors} Visitors)
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="explore__footer">
        <button className="explore__see-more button-text">See More</button>
      </div>
    </section>
  );
};

export default ExploreSection;