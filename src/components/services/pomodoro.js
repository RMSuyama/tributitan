import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pomodoro.css";

const Pomodoro = () => {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, time]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(25 * 60);
  };

  return (
    <div id="pomodoro" className="container">
      <div className="card text-center">
        <div className="card-header">Pomodoro Timer</div>
        <div className="card-body">
          <div className="timer text-center">{formatTime(time)}</div>
          <div className="controls d-flex justify-content-center">
            <button
              className="btn btn-primary me-2"
              onClick={handleStart}
              disabled={isActive}
            >
              Start
            </button>
            <button
              className="btn btn-secondary me-2"
              onClick={handlePause}
              disabled={!isActive}
            >
              Pause
            </button>
            <button
              className="btn btn-danger"
              onClick={handleReset}
              disabled={isActive}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
