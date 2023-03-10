import styles from './Display.module.scss';
const Display = ({ time }) => {
  const milliseconds = Math.trunc(time);
  const s = (Math.trunc(milliseconds / 1000) % 60).toString();
  const m = (Math.trunc(milliseconds / 60000) % 60).toString();
  const h = (Math.trunc(milliseconds / 3600000) % 24).toString();
  const ms = milliseconds % 1000;
  return (
    <p className={styles.display}>
      <span className='hour'>{h.padStart(3 - h.length, '0')}</span>:
      <span className='minutes'>{m.padStart(3 - m.length, '0')}</span>:
      <span className='seconds'>{s.padStart(3 - s.length, '0')}</span>:
      <span className={styles.milliseconds}>{ms}</span>
    </p>
  );
};

export default Display;
