import {useState} from "react";
const Mario = () => {
  const [count, setCount] = useState(0)
  return(
  <div>
    <h1>{count}</h1>
    <p>Das ist ein Test</p>
    <button onClick={() => setCount(count+1)}>TEST</button>
  </div>
  
  )
  
};

export default Mario;
