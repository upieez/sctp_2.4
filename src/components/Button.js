import styles from "../Button.module.css";

function Button({ label, onClick }) {
  return (
    <button onClick={onClick} className={styles.button}>
      {label}
    </button>
  );
}

export default Button;
