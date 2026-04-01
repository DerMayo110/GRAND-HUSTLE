import Button from "../components/Button";
import useCounter from "../hooks/useCounter";
import useToggle from "../hooks/useToggle";
import DasLager from "../components/DasLager";
import Stoppuhr from "../components/Stoppuhr";


const Mario = () => {
  const { count, increment, reset } = useCounter();
  const {visible: visibleText,toggle: toggleText} = useToggle();
  const {visible: StoppUhrVisible,toggle: toggleStopUhr} = useToggle();
  
  const items = [
    { id: 1, name: 'Stein', quantity: 3 },
    { id: 2, name: 'Holz', quantity: 1 },
    { id: 3, name: 'Hacke', quantity: 99 },
  ];
  
  return(
  <div>
    <h1>{count}</h1>
    {visibleText && <p >Sichtbar</p> }
    <Button text="Zähl hoch" onClick={increment} />
    <Button text="Reset" onClick={reset} />
    <Button text="Text ein-/ausblenden" onClick={toggleText} />
    <Button text="StoppUhr starten/deaktivieren" onClick={toggleStopUhr} />
    {StoppUhrVisible && <Stoppuhr /> }
    <DasLager items={items} />
  </div>
  
  )
  
};

export default Mario;
