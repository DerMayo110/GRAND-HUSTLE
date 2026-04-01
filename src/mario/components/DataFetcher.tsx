//Fetch mit promise und Loading State
import Button from "./Button";
import { useState } from "react";

const DataFetcher = () => {
    const [data, setData] = useState<any>();
    const [isLoading, setLoadingState] = useState(false);
    const [error, setError] = useState(null);
    const getDataFromAPI = () => {
        setLoadingState(true);
       
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(json => setData(json))
        .then(()=>setLoadingState(false))
        .catch(error => {
            setLoadingState(false);
            setError(error);
        });
    };
    
    return (
        <div>
            <Button text="API CALL" onClick={getDataFromAPI}/>
            {isLoading && <p>Lädt...</p>}
            {error && <p>Error</p>}
            {data &&
                <div>
                    <h1>{data.title}</h1>
                    <br/>
                    <p>{data.body}</p>
                </div>
            }
        </div>
    )
};

export default DataFetcher;