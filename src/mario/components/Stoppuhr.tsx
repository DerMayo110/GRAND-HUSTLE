//UseEffect 
import {useEffect, useState} from "react";

const Stoppuhr = () => {
    const [sekunden, setSekunden] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSekunden(aktuelleSekunde => aktuelleSekunde + 1);
        },1000);
        return () => clearInterval(intervalId);
    }, []);
    
    return (<p>Die Stoppuhr: {sekunden}</p>)
}



export default Stoppuhr;