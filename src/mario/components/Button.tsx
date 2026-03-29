 type ButtonProps = {
    text: string;
    onClick: () => void;
  }
const CountButton = (props: ButtonProps) => {
      return(
          <button onClick={props.onClick}>{props.text}</button>
      )
  }
export default CountButton;