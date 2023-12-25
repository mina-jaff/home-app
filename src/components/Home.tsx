import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppFooter from './AppFooter';
import picOne from '../assets/pic-one.jpg';
import picTwo from '../assets/pic-two.jpg';
import picFour from '../assets/pic-four.jpg';

interface HomeProps {
  title?: string;
  description?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const Home: React.FC<HomeProps> = ({ 
    title = 'The simple way to find a home',
    description = 'A platform for tenants who prefer an automated approach to finding the right home,',
    ctaText = 'Register Now',
}) => {
  const navigate = useNavigate();

  const handleCtaClick = () => {
    navigate('/registration');
}
  return (
    <div className="home-container">
    <section className="App-banner">
          <div className="App-banner-content">
          <div className="App-banner-title">
          <p>{title}</p>
          </div>
          <div className="App-banner-item">
            <p>{description}</p>
            <p>from start to key</p>
          </div>
          </div>
          <button className="btn-standard" onClick={handleCtaClick}>{ctaText}</button>
    </section>
    <section className="preview">
      <div className="preview-container">
        <img src={picOne} className="img-preview"/>
        <p>Berlin, Prenzlauer Berg, 1 Bedroom Apartment</p>
        <button className="btn-standard">apply</button>
      </div>
      <div className="preview-container">
        <img src={picTwo} className="img-preview"/>
        <p>Berlin, Neukölln, 3 Bedroom Apartment</p>
        <button className="btn-standard">apply</button>
      </div>
      <div className="preview-container">
        <img src={picFour} className="img-preview"/>
        <p>Berlin, Tempelhof, 2 Bedroom Apartment</p>
        <button className="btn-standard">apply</button>
      </div>
    </section>
    <AppFooter />
    </div>
  );
};

export default Home;