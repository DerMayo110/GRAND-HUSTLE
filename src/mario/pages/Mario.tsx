import {useState, useEffect} from "react";
import CountButton from "../components/Button.tsx";
const Mario = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Da ist was passiert")
  }, [count]);
  return(
  <div>
    <h1>{count}</h1>
    <p>Das ist ein Test</p>
    <CountButton text="Zähl hoch" onClick={() => setCount(count+1)} />
    <CountButton text="Reset" onClick={() => setCount(0)} />
  </div>
  
  )
  
};

export default Mario;
