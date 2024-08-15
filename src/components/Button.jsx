/*eslint-disable */
import styles from "./Button.module.css";
export default function Button({ style, children, ...rest }) {
  return (
    <button className={`${styles.btn} ${styles[style]}`} {...rest}>
      {children}
    </button>
  );
}
