 import styles from "./Button.module.css";
 type ButtonProps = {
    text: string;
    onClick: () => void;
  }
const CountButton = (props: ButtonProps) => {
      return(
        <button 
            className={styles.button}
            onClick={props.onClick}
            >
            {props.text}
        </button>
      )
  }
export default CountButton;