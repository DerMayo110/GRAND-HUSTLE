import Button from "../components/Button.tsx";
import useCounter from "../hooks/useCounter.ts";
import useToggle from "../hooks/useToggle.ts";
import DasLager from "../components/DasLager.tsx";


const Mario = () => {
  const { count, increment, reset } = useCounter();
  const {visible,toggle} = useToggle();
  const items = [
    { id: 1, name: 'Stein', quantity: 3 },
    { id: 2, name: 'Holz', quantity: 1 },
    { id: 3, name: 'Hacke', quantity: 99 },
  ];
  
  return(
  <div>
    <h1>{count}</h1>
    {visible && <p >Sichtbar</p> }
    <Button text="Zähl hoch" onClick={increment} />
    <Button text="Reset" onClick={reset} />
    <Button text="Text ein-/ausblenden" onClick={toggle} />
    <DasLager items={items} />
  </div>
  
  )
  
};

export default Mario;
