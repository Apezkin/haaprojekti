import './App.css';
import React, { useState, useEffect } from 'react';

// Source for this CountdownTimer is ChatGPT
const CountdownTimer = () => {
  const targetDate = "2026-05-09T11:00:00"
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    return difference > 0 ? difference : 0;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate, timeLeft]);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(days).padStart(2, '0')}d : ${String(hours).padStart(2, '0')}h : ${String(minutes).padStart(2, '0')}m : ${String(seconds).padStart(2, '0')}s`;
  };

  return (
    <div style={{ fontSize: '2rem', fontFamily: 'monospace' }}>
      {timeLeft > 0 ? formatTime(timeLeft) : 'Se ois häät ny'}
    </div>
  );
};

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Häät tulossa</h1>
        <CountdownTimer/>
      </header>
    </div>
  );
}

export default App;
