import React, { useEffect, useState } from 'react';
import Display from './components/Display/Display';
import Buttons from './components/Buttons/Buttons';

function App() {
  const [time, setTime] = useState(0);
  const [intervalID, setIntervalID] = useState(null);
  const [globalTime, setGlobalTime] = useState(null);
  const [stopTime, setStopTime] = useState(false);

  const data = {
    setTime,
    intervalID,
    setIntervalID,
    setGlobalTime,
    stopTime,
    setStopTime,
    time,
  };

  useEffect(() => {
    if (globalTime && !intervalID && !stopTime) {
      setIntervalID(
        setInterval(() => {
          setTime(Date.now() - globalTime);
        }, 150)
      );
    }
  }, [globalTime]);

  useEffect(() => {
    return () => {
      if (intervalID) {
        clearInterval(intervalID);
      }
    };
  }, []);

  return (
    <div className='app container'>
      <Display time={time} />
      <Buttons data={data} />
    </div>
  );
}

export default App;
