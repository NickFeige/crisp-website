import React from 'react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="main-background">
      <div className="about-content">
        {/* CRISP title as a button that routes to /home */}
        <button className="title" onClick={() => navigate('/Home')}>
          <b>CRISP</b>
        </button>

        <h2 className="title2">About Crisp</h2>
        <p className="about-text">
          Crisp, your local fresh fruit and veg shop, has been providing produce to the community for 18 years.
        </p>
      </div>
    </div>
  );
};

export default About;