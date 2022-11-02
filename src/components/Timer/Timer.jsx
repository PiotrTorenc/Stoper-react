import { useEffect, useState } from 'react';
import FormattedTime from '../FormattedTime/FormattedTime';

import styles from './Timer.module.scss';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimeOn] = useState(false);
  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((previousTime) => previousTime + 100);
      }, 100);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);
  return (
    <div className={styles.div}>
      <FormattedTime time={time} />
      <button className={styles.button} onClick={() => setTimeOn(true)}>
        Start
      </button>
      <button className={styles.button} onClick={() => setTimeOn(false)}>
        Stop
      </button>
      <button className={styles.button} onClick={() => setTime(0)}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
