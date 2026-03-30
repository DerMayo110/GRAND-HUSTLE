import Button from "../components/Button.tsx";
import useCounter from "../hooks/useCounter.ts";
import useToggle from "../hooks/useToggle.ts";


const Mario = () => {
  const { count, increment, reset } = useCounter();
  const {visible,toggle} = useToggle();
  
  return(
  <div>
    <h1>{count}</h1>
    {visible && <p >Sichtbar</p> }
    <Button text="Zähl hoch" onClick={increment} />
    <Button text="Reset" onClick={reset} />
    <Button text="Text ein-/ausblenden" onClick={toggle} />
  </div>
  
  )
  
};

export default Mario;
