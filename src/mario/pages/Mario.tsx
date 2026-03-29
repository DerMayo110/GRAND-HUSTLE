import {useEffect} from "react";
import CountButton from "../components/Button.tsx";
import useCounter from "../hooks/useCounter.ts";

const Mario = () => {
  const { count, increment, reset } = useCounter();
  useEffect(() => {
    console.log("Da ist was passiert")
  }, [count]);
  return(
  <div>
    <h1>{count}</h1>
    <p>Das ist ein Test</p>
    <CountButton text="Zähl hoch" onClick={increment} />
    <CountButton text="Reset" onClick={reset} />
  </div>
  
  )
  
};

export default Mario;
