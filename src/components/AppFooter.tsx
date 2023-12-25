import React from 'react';
import logo from '../assets/logo-img-gradient.png';

const AppFooter: React.FC = () => {
  return (
    <section className="App-banner">
        <div className="App-banner-content">
            <div className="App-banner-item">
                <p className="footer-item">&copy; {new Date().getFullYear()} Home. All rights reserved.</p>
            </div>
            <div className="logo"><img src={logo} className="logo-img"></img><h1 className="logo-font">home</h1></div>
        </div>
    </section>
  );
};

export default AppFooter;
