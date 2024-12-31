import './Body.css';
import Restaurant from './Restaurant';
import {api} from '../utils/mockdata';
import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () =>{
    const [rest, filterData]=useState([]);
    const [searchText, setsearchText]=useState([]);    
    const [searchList, setSearchedList]=useState([]);    

    // const {uSer, SetUser}=useContext(UserContext);
    // console.log(uSer);

    useEffect(()=>{
        fetchData(); 
    }, []);
   
    const fetchData= async ()=>{
        const dataa= await fetch(api);
        const json=await dataa.json();
        filterData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setSearchedList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    const {loggedInUser, setUserName}=useContext(UserContext);
    
    // Checking online status by our own custom hook Known as useOnlineStatus
    
    const OnlineStatus=useOnlineStatus();       //OnlineStatus is false that means offline if true then it works as it is fetching the data from api

    if(OnlineStatus===false) return <h1> looks like you are OFFLINE!!!!</h1>;

    
    //conditional rendering

    
    
    return(rest.length===0)?<Shimmer/>:
    (
        <div className="Body">
            <div className="fliterBox">
                <div className="searchBar">
                    <input 
                        className="searchBarText" 
                        type="text"
                        value={searchText}
                        onChange={(e)=>{
                            setsearchText(e.target.value);
                        }}
                    >

                    </input>
                    <button 
                        className="searchBarBtn" 
                        onClick={()=>{
                            const searchedData=rest.filter(
                                (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setSearchedList(searchedData);
                        }}
                    >
                        Search
                    </button>
                </div>

                <div className="Search">
                    <button 
                        className="res-btn"
                        onClick={()=>{
                            const filterlist=rest.filter(
                                (res)=>res.info.avgRating>4
                            );
                            filterData(filterlist);                   
                        }}
                    >
                        Show Restaurant with high rating
                    </button>
                </div>

                <div className="searchBarText1" >
                    <label>User :{" "}</label>
                    <input 
                    className='login-input'
                        value={loggedInUser}
                        onChange={(e)=>setUserName(e.target.value)}
                    />
                </div>

            </div>
            <div className="res-card">
                {searchList.map((restaurant)=>(
                    <Link className="linkk" key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                        <Restaurant  resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Body;