import ItemList from "./ItemList";
import "./ResCategory.css"


const ResCategory=({ data, showItems, setShowState })=>{


    const handleClick=()=>{
        setShowState();
    };


    return (
        <div className="Accordian"> 
            <div className="accordian-Header" onClick={handleClick}>
                <span className="accordian-Title">{data?.title} ({data?.itemCards.length})</span>
                <span className="accordian-Arrow">🠻</span>
            </div>
            
            <div >
                {showItems && <ItemList className="itemCards" list={data?.itemCards}/>}                    
            </div>

        
        </div>
    );        
}


export default ResCategory;