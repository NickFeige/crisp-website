import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const carouselRef = useRef<any>(null);

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - bounds.left;

    if (clickX < bounds.width / 2) {
      carouselRef.current?.decrement(); // left click
    } else {
      carouselRef.current?.increment(); // right click
    }
  };

  return (
    <div className="main-background">
      {/* 🌿 Carousel with click navigation */}
      <div className="carousel-click-zone" onClick={handleImageClick}>
        <Carousel
          ref={carouselRef}
          showThumbs={false}
          autoPlay={false}
          infiniteLoop
          showStatus={false}
          showIndicators={true} // ✅ keep the dots
          className="veg-carousel"
        >
          <div>
            <img src="/images/tomatoes.jpg" alt="Tomatoes on Sale" />
            <p className="legend">Fresh Tomatoes - 20% Off</p>
          </div>
          <div>
            <img src="/images/broccoli.jpg" alt="Broccoli on Sale" />
            <p className="legend">Broccoli - 2 for £1.50</p>
          </div>
          <div>
            <img src="/images/carrot.jpg" alt="Carrots on Sale" />
            <p className="legend">Organic Carrots - £0.99/kg</p>
          </div>
        </Carousel>
      </div>

      {/* 🔶 Title and Button */}
      <h1 className="title"><b>CRISP</b></h1>
      <div className="button-container">
        <button className="button" onClick={() => navigate('/about')}>
          About Crisp
        </button>
      </div>
    </div>
  );
};

export default Home;