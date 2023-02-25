import styles from './Button.module.scss';
const Button = ({ action, children }) => {
  return (
    <button className={styles.button} type='button' onClick={action}>
      {children}
    </button>
  );
};

export default Button;
