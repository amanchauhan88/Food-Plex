import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import "./cart.css";
import { clearCart } from "../utils/cartSlice";
import { Link } from 'react-router-dom';


const Cart = () => {
  const CartItms = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  console.log(CartItms);
  return (
    <div className="cartName">
      <h1>your Cart is here!!</h1>

      {CartItms.length === 0 ? (

        <Link to="/">
        <h1 className="" >your cart is epmty!<br></br> <button  >Shope Now</button> </h1>
        
        </Link>
        
      ) : (
        <button className="clearBtn" onClick={handleClearCart}>
          Clear cart
        </button>
      )} 

      <ItemList list={CartItms} />
    </div>
  );
};

export default Cart;
