import { MENU_API } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantInfo=(resId)=>{

    const[ restInfo, setrestInfo]=useState(null);
    
    useEffect(()=>{
        fetchrestInfo();
    },[]);
     
    const fetchrestInfo = async ()=>{
        const dataa= await fetch(
            MENU_API+resId
        )
        const json= await dataa.json();
        setrestInfo(json?.data);
    };
    return restInfo;
}

export default useRestaurantInfo;