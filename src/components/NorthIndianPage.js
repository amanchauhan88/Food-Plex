import NorthIndianFood, { withPromotedLabel } from "./NorthIndianFood";
import { useState,useEffect } from "react";

import { northIndApi } from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const NorthIndianPage=()=>{
    const [northIndfoodMenu,setnorthIndfoodMenu]=useState([]);

    const PromotedLabelComponent=withPromotedLabel(NorthIndianFood);

    useEffect(()=>{
        fetchData();
    }, []);
   
    const fetchData= async ()=>{
        const dataa= await fetch(northIndApi);
        const json=await dataa.json();
        setnorthIndfoodMenu(json?.data?.cards);
        
        // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);xx
    }
    // console.log(northIndfoodMenu);
    if(northIndfoodMenu.length===0){
        return <Shimmer/>;
    }
    return(
        <div className="res-card">
                {northIndfoodMenu.map((ress)=>(
                    <Link key={ress?.card?.card?.info?.id} to={"/restaurants/"+ress?.card?.card?.info?.id}>
                        {
                            ress?.card?.card?.info?.promoted?<PromotedLabelComponent  NIresData={ress}/>:
                            ress?.card?.card?.info?<NorthIndianFood NIresData={ress} />:""
                        }
                    
                    </Link>
                ))}
        </div>
    );
}

export default NorthIndianPage;