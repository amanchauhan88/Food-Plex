import { CDN_IMG_LINK } from "../utils/constants";
import './NorthIndianFood.css';

const NorthIndianFood=(props)=>{

    const {NIresData}=props;
    
    const{
        name,
        cloudinaryImageId,
        cuisines,
        sla,
        avgRating,
        costForTwo
    }=NIresData?.card?.card?.info||{};
    
    return(
        <div>
            {/* <h1>Here you found lazeez North Indian Food</h1> */}
            <div className="Card">

                <h2 className="res-name">{name|| "Restaurant Name"}</h2>
                <div>

                    <img className="res-img" src={CDN_IMG_LINK+cloudinaryImageId} alt="restaurant" />
                </div>

                <div className="cuisines">{cuisines.join(" , ") }</div>
                <div className="star-tod">
                    <span className="stars">
                        {avgRating} ⭐
                    </span>
                    <span className="tod">{sla?.slaString }</span>
                    <div className="price">
                        {costForTwo}
                    </div>

                </div>
                
            </div>
        </div>
    );
    
}


export const withPromotedLabel=(Restaurant)=>{
    return(props)=>{
        return(
            <div>
                <label className='promotedLabel'>Promoted</label>
                <NorthIndianFood {...props}/>
            </div>
        )
            
    }
}
export default NorthIndianFood;