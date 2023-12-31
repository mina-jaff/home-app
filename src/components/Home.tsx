import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppFooter from './AppFooter';
import PreviewContainer from './PreviewContainer';
import picOne from '../assets/pic-one.jpg';
import picTwo from '../assets/pic-two.jpg';
import picThree from '../assets/pic-three.jpg';
import picFour from '../assets/pic-four.jpg';
import picFive from '../assets/pic-five.jpg';
import picSix from '../assets/pic-six.jpg';

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
      <PreviewContainer imgSrc={picOne} description={'Berlin, Moabit, 2 Bedroom Apartment'}/>
      <PreviewContainer imgSrc={picTwo} description={'Berlin, Neukölln, 4 Bedroom Apartment'}/>
      <PreviewContainer imgSrc={picThree} description={'Berlin, Charlottenburg, 3 Bedroom Apartment'}/>
      <PreviewContainer imgSrc={picFour} description={'Berlin, Kreuzberg, 3 Bedroom Apartment'}/>
      <PreviewContainer imgSrc={picFive} description={'Berlin, Tempelhof, Single Studio'}/>
      <PreviewContainer imgSrc={picSix} description={'Berlin, Friedrichshagen, 2 Bedroom Apartment'}/>
    </section>
    <AppFooter />
    </div>
  );
};

export default Home;