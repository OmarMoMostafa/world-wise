/*eslint-disable */
import BackButton from "./BackButton";
import styles from "./Message.module.css";

function Message({ message }) {
  return (
    <>
      <p className={styles.message}>
        <span role="img">👋</span> {message}
      </p>
      <BackButton />
    </>
  );
}

export default Message;
