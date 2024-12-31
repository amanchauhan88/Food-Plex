import { useDispatch } from "react-redux";
import { CDN_IMG_LINK, Rest_Image } from "../utils/constants";
import "./ItemList.css"
import { addItem } from "../utils/cartSlice";

const ItemList=({ list })=>{

    const dispatch=useDispatch();
    

    const handleAddItem=(it)=>{
        //Dispatch an action
        alert("added to cart")
        dispatch(addItem(it))

    }


    if (!Array.isArray(list)) {
        return <p>No items in the cart</p>;
    }
    // console.log( list )
    return(
        <div className="ItemList">
            {
                list.map((it)=>(
                    <div key={it?.itemCards?.info?.name} className="items">
                        <div>
                            <span>{it?.card?.info?.name}</span>
                            {" - "}
                            <span>{it?.card?.info?.price?it?.card?.info?.price/100:it?.card?.info?.defaultPrice/100}₹</span>
                        </div>
                        <div className="Desc-box">
                            <p>{it?.card?.info?.description}</p>
                            <div className="Img-btn-box">
                                <img className="items-image" src={it?.card?.info?.imageId?(CDN_IMG_LINK+it?.card?.info?.imageId):Rest_Image} alt="restaurant"/>
                                <button 
                                    className="Add-btn"
                                    onClick={()=>handleAddItem(it)}
                                >
                                    Add +
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
    
    
    

}

export default ItemList;

