import Button from "../components/Button";
import useCounter from "../hooks/useCounter";
import useToggle from "../hooks/useToggle";
import DasLager from "../components/DasLager";
import Stoppuhr from "../components/Stoppuhr";
import DataFetcher from "../components/DataFetcher";
import ThemedBox from "../components/ThemedBox";
import {useState} from "react";
import ThemeContext from "../context/ThemeContext";



const Mario = () => {
  const { count, increment, reset } = useCounter();
  const {visible: visibleText,toggle: toggleText} = useToggle();
  const {visible: StoppUhrVisible,toggle: toggleStopUhr} = useToggle();
  const [theme, setTheme] = useState("light");
  
  const items = [
    { id: 1, name: 'Stein', quantity: 3 },
    { id: 2, name: 'Holz', quantity: 1 },
    { id: 3, name: 'Hacke', quantity: 99 },
  ];
  
  return(
  <div>
    <ThemeContext.Provider value={theme}> 
      <h1>{count}</h1>
      {visibleText && <p >Sichtbar</p> }
      <Button text="Zähl hoch" onClick={increment} />
      <Button text="Reset" onClick={reset} />
      <Button text="Text ein-/ausblenden" onClick={toggleText} />
      <Button text="StoppUhr starten/deaktivieren" onClick={toggleStopUhr} />
      <Button text="Dark Mode" onClick={() => {setTheme(theme==="light"?"dark":"light")}} />
      {StoppUhrVisible && <Stoppuhr /> }
      <DasLager items={items} />
      <br />
      <br />
      <br />
      <DataFetcher />
      <ThemedBox />
    </ThemeContext.Provider>
  </div>
  
  )
  
};

export default Mario;
