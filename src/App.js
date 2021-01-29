import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import FirstSection from './components/sections/first-section/FirstSection';
import SecondSection from './components/sections/second-section/SecondSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstSection />
      <SecondSection />
    </div>
  );
}

export default App;
