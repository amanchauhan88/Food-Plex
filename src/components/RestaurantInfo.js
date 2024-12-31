import { CDN_IMG_LINK } from "../utils/constants";
import { useParams } from "react-router-dom";
import './RestaurantInfo.css';
import useRestaurantInfo from "../utils/useRestaurantInfo";
import ResCategory from "./ResCategory.js";
import { useState } from "react";

// It is the particular restaurant menu that is inside the card of the particular restaurant 

const RestaurantInfo = () => {
    const {resId} =useParams(); 

    const restInfo=useRestaurantInfo(resId);        //custom hook that make the code cleaner and make easy make the test cases for this

    const { name, costForTwoMessage, cloudinaryImageId } = restInfo?.cards[2]?.card?.card?.info || {};


    const categories=restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")||[];

    const [showState, setShowState]=useState(null);
    
    return (
        <div>
            <div className="RestInfo">
                <h1 className="RestInfo-Name">
                    {name ||"loading..."}
                </h1>

                <img className="res-img-menu" src={CDN_IMG_LINK+cloudinaryImageId} alt='res-logo' />

                <h2 className="RestInfo-Cost"> 
                    {costForTwoMessage ||"loading..."}
                </h2>
                <div>
                    
                    {categories.map((category, index)=>
                        <ResCategory 
                            key={category?.card?.card?.title} 
                            data={category?.card?.card}
                            showItems={index===showState?true:false}
                            setShowState={()=>setShowState(index)}
                        />
                    )} 
                </div>
            </div>

        </div>
    )
}

export default RestaurantInfo;
