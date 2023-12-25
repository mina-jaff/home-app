import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AppHeader from './components/AppHeader';
import Home from './components/Home';
import Registration from './components/Registration';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <AppHeader exploreLink="/" loginButtonText="Sign In" />
        
      <div className="App-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration/*" element={<Registration />}/>
          </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
