import { useState, useEffect } from "react";

const useCounter = () => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
     console.log("Da ist was passiert")
    }, [count]);
    
    const increment = () => {setCount(count+1)};
    const reset = () => {setCount(0)};

    return {
        count, 
        increment,
        reset
    }
}

export default useCounter;