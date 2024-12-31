import './Restaurant.css';
import { CDN_IMG_LINK } from "../utils/constants";
import { useContext } from 'react';
import UserContext from '../utils/UserContext';

// It is restaurant card which is showing on the home page the website...

const Restaurant= (props) => {
    
    const { resData }=props;

    const {loggedInUser}=useContext(UserContext)

    // console.log(resData);
    const{
        name,
        cloudinaryImageId,
        cuisines,
        sla,
        avgRating, 
        costForTwo
    }=resData?.info;
    
    return(
        <div className="Card">
            <h2 className="res-name">{name}</h2>
            <div>
                <img className="res-img" src={CDN_IMG_LINK+cloudinaryImageId} alt='res-logo' />
            </div>
            <div className="cuisines">{cuisines.join(" ,")}</div>
            <div className="star-tod">
                <span className="stars">
                    {avgRating} star
                </span>
                <span className="tod">{sla.slaString}</span>
                <div className="price">
                    {costForTwo}
                </div>
               
            </div>

        </div>
    );
}

// Higher order components => also a normal javascript function which used for add some special functionalities to the particular component



export default Restaurant;


