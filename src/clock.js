import React, { useState } from 'react';
import './clock.css';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const updateTime = () => {
    setCurrentTime(new Date());
  };

  setInterval(updateTime, 1000);

  const isLoaded = true; // define isLoaded variable

  return (
    <div className="clock">
      <h1>{currentTime.toLocaleTimeString()}</h1>
      <h2>{isLoaded ? currentTime.toLocaleDateString() : 'Loading...'}</h2>
    </div>
  );
};

export default Clock;
