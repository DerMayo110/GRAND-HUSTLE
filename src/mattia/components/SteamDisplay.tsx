
import { useState, useEffect } from "react";
import bdo2 from "../assets/Bilder/bdo2.png";


function SteamDisplay(){
    const[steamData,setSteamData]=useState<any>();
    

    async function getSteamData(){
        try{
            const res=await fetch("https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games?id=1",{
                method:'GET',
            });
            const data=await res.json();
            console.log(data)
        }
        catch(error){
            console.error("getByRepID keine Daten");
        }
    }

    //CORS Probleme müssen behoben werden
    useEffect(()=>{
       getSteamData(); 
    },[])



    return(
        <>
            <p>BDO GO 2026 on STEAM</p>
            <img src={bdo2} alt="Mysterious Tom Cancer"></img>
        </>
    )
}

export default SteamDisplay