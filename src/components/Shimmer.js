import './Shimmer.css';
import { loaderImg } from '../utils/constants';
const Shimmer=()=>{
    return(
        <div className="shimmer">
            <div><img src={loaderImg} alt="Loading..."/></div>
            <div><img src={loaderImg} alt="Loading..."/></div>
            <div><img src={loaderImg} alt="Loading..."/></div>
            <div><img src={loaderImg} alt="Loading..."/></div>
            <div><img src={loaderImg} alt="Loading..."/></div>
            <div><img src={loaderImg} alt="Loading..."/></div>
        </div>
    );

}

export default Shimmer;