import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-img.png';

interface AppHeaderProps {
  exploreLink: string;
  loginButtonText: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ exploreLink, loginButtonText }) => {
  return (
    <header className="App-header">
      <Link to={exploreLink} className="logo"><img src={logo} className="logo-img"></img><h1 className="logo-font">home</h1></Link>

      <nav className="nav">
        <Link to={exploreLink} className="nav-item">Explore</Link>
        <button className="btn-standard">{loginButtonText}</button>
      </nav>
    </header>
  );
};

export default AppHeader;
