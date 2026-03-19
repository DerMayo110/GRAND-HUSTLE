import { useState } from "react";



function CounterComp(){
  const [count, setCount] = useState(0)

  function Counter(){
    let newCount=count+1;
    setCount(newCount);
  }

  return (
    <>
      <h1>DER GRANDHUSTLE</h1>
      <h2>{count}</h2>
      <button onClick={Counter}></button>
    </>
  )
}

export default CounterComp