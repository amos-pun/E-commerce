import React from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Card = ({item}) => {
    
    const dispatch  = useDispatch()
    const addToCart = () => {
        let cart_item = {
            id: Date.now(),
            product: item
        }
        dispatch({type: "ADD_TO_CART", payload: cart_item})
        toast.success("Item => Cart")
    }
    
  return (
    <div>
      <div className="col">
      <ToastContainer theme="colored" position="top-right"/>
        <div className="card">
            <img
              src={item.item_image}
              className="card-img-top p-3"
              alt="..."
              style={{ height: "233px" }}
            />
            <div className="card-body">
              <h5 className="card-title">{item.item_name}</h5>
              <h3 className="card-title">£ {item.item_price}</h3>
              <div className="text-center">
                <button className="btn btn-warning w-100 fw-bold" onClick={addToCart}> 
                  Add to Cart
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
