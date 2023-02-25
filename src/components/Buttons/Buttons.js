import Button from '../Button/Button';
import styles from './Buttons.module.scss';
const Buttons = ({
  data: {
    intervalID,
    stopTime,
    setGlobalTime,
    setStopTime,
    setIntervalID,
    setTime,
    time,
  },
}) => {
  const start = () => {
    if (!intervalID) {
      if (!stopTime) {
        setGlobalTime(Date.now());
      } else {
        setGlobalTime(Date.now() - time);
        setStopTime(false);
      }
    }
  };

  const reset = () => {
    if (intervalID) {
      clearInterval(intervalID);
    }
    setIntervalID(null);
    setTime(0);
  };
  const stop = () => {
    setStopTime(true);
    if (intervalID) {
      clearInterval(intervalID);
    }
    setIntervalID(null);
  };
  return (
    <div className={styles.buttons}>
      <Button action={start}>Start</Button>
      <Button action={stop}>Stop</Button>
      <Button action={reset}>Restart</Button>
    </div>
  );
};

export default Buttons;
